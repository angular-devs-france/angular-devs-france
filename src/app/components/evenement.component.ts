import {Component, Input} from '@angular/core';
import {Evenement} from "../models/evenement.model";
import {ContentFile} from "@analogjs/content";
import {RouterLink} from "@angular/router";
import {DatePipe, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-event',
  standalone: true,
  template: `
    <article class="flex justify-around items-start max-w-screen-md gap-4 mb-8">
      <section class="text-start">
        <h3 class="font-bold text-2xl">{{evenement.attributes.title}}</h3>
        <p class="flex gap-1 mb-4 italic">
          <img ngSrc="/images/calendar.svg" height="28" width="24" alt=""/>
          {{evenement.attributes.date | date}} à 19h
        </p>
        <p class="line-clamp-4 sm:line-clamp-3">
          {{evenement.attributes.description}}
        </p>
        <a class="underline block mb-4" [routerLink]="['/evenements', evenement.slug]">Voir plus</a>
        <a class="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-bold rounded-md" href=""
           target="_blank">
          <img ngSrc="/images/youtube.svg" height="24" width="24" alt=""/>
          Participer
        </a>
      </section>
      <img class="hidden sm:block border-2 border-white" ngSrc="/images/event.png" height="180" width="320" priority alt="">
    </article>

  `,
  imports: [
    RouterLink,
    DatePipe,
    NgOptimizedImage
  ],
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
      }
    `
  ]
})
export class EvenementComponent {
  @Input({required: true}) evenement!: ContentFile<Evenement>;
}
