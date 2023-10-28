import {Component } from '@angular/core';
import {EvenementComponent} from "../../components/evenement.component";
import {injectContentFiles} from "@analogjs/content";
import {NgForOf} from "@angular/common";
import {Evenement} from "../../models/evenement.model";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-evenements',
  standalone: true,
  imports: [
    EvenementComponent,
    NgForOf
  ],
  template: `
    <h1 class="text-4xl sm:text-6xl font-bold mb-8">Evènements</h1>

    <ul>
      <li>
        <app-event
          *ngFor="let evenement of evenements"
          [evenement]="evenement"
        ></app-event>
      </li>
    </ul>
  `
})
export default class EvenementsComponent {
  evenements = injectContentFiles<Evenement>(({filename}) => filename.startsWith('/src/content/evenements/')).sort(
    (a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime()
  );
  constructor(
    private readonly title: Title,
    private readonly meta: Meta
  ) {
    title.setTitle('Evènements - Angular Devs France');
    meta.updateTag({name: 'description', content: 'Découvrez les évènements à venir de la communauté Angular Devs France'});
  }
}
