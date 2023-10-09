import { Component} from "@angular/core";
import {injectContentFiles} from "@analogjs/content";
import {NgForOf} from "@angular/common";
import {PeopleComponent} from "../components/people.component";
import {People} from "../models/people.model";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [
    NgForOf,
    PeopleComponent
  ],
  template: `
    <h1 class="text-4xl sm:text-6xl font-bold mb-8">A propos</h1>
    <p>LE nouveau rendez-vous de la communauté Angular francophone.</p>
    <p>Rejoignez nous chaque premier mardi de chaque mois à 19h en live sur YouTube pour découvrir des présentations sur Angular et les technologies web pour vous aider à faire de vous de vrais experts.</p>
    <p>C'est l'occasion unique de faire fi des frontières et de rencontrer la communauté Angular francophone depuis votre canapé! </p>
    <p>Abonnez-vous dès maintenant sur les réseaux sociaux pour ne manquer aucun évènement et rejoignez-nous dans cette aventure passionnante de découverte et de partage.</p>
    <h2 class="text-4xl font-bold mt-20 mb-8">L'équipe</h2>
    <ul class="flex flex-wrap justify-center gap-8">
      <li *ngFor="let people of activeStaff">
        <app-people [people]="people.attributes"></app-people>
      </li>
    </ul>
    <h2 class="text-4xl font-bold mt-20 mb-8">Hall of Fame</h2>
    <ul class="flex flex-wrap justify-center gap-8">
      <li *ngFor="let people of inactiveStaff">
        <app-people [people]="people.attributes"></app-people>
      </li>
    </ul>
  `,
  styles: [
    `
    :host {
      text-align: start;
    }

    p {
      margin-bottom: 1rem;
    }
    `
  ]
})
export default class AProposComponent {
  staff = injectContentFiles<People>(({filename}) => filename.startsWith('/src/content/staff/'));
  activeStaff = this.staff.filter(({attributes}) => attributes.active);
  inactiveStaff = this.staff.filter(({attributes}) => !attributes.active);

  constructor(
    private readonly title: Title,
    private readonly meta: Meta
  ) {
    title.setTitle('A propos - Angular Devs France');
    meta.updateTag({name: 'description', content: 'Découvrez l\'équipe derrière Angular Devs France'});
  }
}
