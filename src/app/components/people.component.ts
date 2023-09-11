import {Component, Input} from "@angular/core";
import {People} from "../models/people.model";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgOptimizedImage
  ],
  template: `
      <article class="flex flex-col items-center gap-2">
          <img class="rounded-full" height="128" width="128" [ngSrc]="people.picture" alt="">
          <h1 class="font-bold">{{people.name}}</h1>
          <ul class="flex gap-2" *ngIf="people.socials.length">
              <li *ngFor="let social of people.socials">
                  <a *ngIf="social.twitter">
                      <img ngSrc="/images/twitter.svg" height="20" width="20" alt="">
                  </a>
                  <a *ngIf="social.linkedin">
                      <img ngSrc="/images/linkedin.svg" height="20" width="20" alt="">
                  </a>
              </li>
          </ul>
      </article>
  `
})
export class PeopleComponent {
  @Input({required: true}) people!: People;
}
