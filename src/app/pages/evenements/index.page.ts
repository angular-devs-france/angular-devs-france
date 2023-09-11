import {Component } from '@angular/core';
import {EvenementComponent} from "../../components/evenement.component";
import {injectContentFiles} from "@analogjs/content";
import {NgForOf} from "@angular/common";
import {Evenement} from "../../models/evenement.model";

@Component({
  selector: 'app-evenements',
  standalone: true,
  imports: [
    EvenementComponent,
    NgForOf
  ],
  template: `
    <h1 class="text-6xl font-bold mb-8">Evenements</h1>
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
  // TODO add sorting
  evenements = injectContentFiles<Evenement>(({filename}) => filename.startsWith('/src/content/events/'));
}
