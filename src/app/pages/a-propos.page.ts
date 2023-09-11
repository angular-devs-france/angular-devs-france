import { Component} from "@angular/core";
import {injectContentFiles} from "@analogjs/content";
import {NgForOf} from "@angular/common";
import {PeopleComponent} from "../components/people.component";
import {People} from "../models/people.model";

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [
    NgForOf,
    PeopleComponent
  ],
  template: `
    <h1 class="text-6xl font-bold mb-8">A propos</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur, atque dignissimos doloremque, ea enim et facilis hic iste minima nostrum praesentium quis quo ratione sequi suscipit, unde voluptates. Autem.</p>
    <h2 class="text-4xl font-bold mt-20 mb-8">L'équipe</h2>
    <ul class="flex flex-wrap justify-center gap-8">
      <li *ngFor="let people of staff">
        <app-people [people]="people.attributes"></app-people>
      </li>
    </ul>
  `,
  styles: [
    `
    :host {
      text-align: start;
    }
    `
  ]
})
export default class AProposComponent {
  staff = injectContentFiles<People>(({filename}) => filename.startsWith('/src/content/staff/'));
}
