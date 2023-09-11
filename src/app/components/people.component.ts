import {Component, Input} from "@angular/core";
import {People} from "../models/people.model";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  template: `
      <article class="flex flex-col items-center gap-2">
          <img class="rounded-full h-32 w-auto" [src]="people.picture" alt="">
          <h1 class="font-bold">{{people.name}}</h1>
          <ul class="flex gap-2" *ngIf="people.socials.length">
              <li *ngFor="let social of people.socials">
                  <a *ngIf="social.twitter">
                      <img src="/images/twitter.svg" alt="">
                  </a>
                  <a *ngIf="social.linkedin">
                      <img src="/images/linkedin.svg" alt="">
                  </a>
              </li>
          </ul>
      </article>
  `
})
export class PeopleComponent {
  @Input({required: true}) people!: People;
}
