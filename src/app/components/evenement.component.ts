import {Component, Input} from '@angular/core';
import {Evenement} from "../models/evenement.model";
import {ContentFile} from "@analogjs/content";
import {RouterLink} from "@angular/router";
import {DatePipe, NgIf, NgOptimizedImage} from "@angular/common";
import {EvenementLinkComponent} from "./evenement-link.component";

@Component({
  selector: 'app-event',
  standalone: true,
  template: `
    <article class="flex justify-between items-start w-full max-w-screen-md gap-4 mb-8">
      <section class="text-start">
        <h3 class="font-bold text-2xl" itemprop="title">{{evenement.attributes.title}}</h3>
        <p class="flex gap-1 mb-4 italic" itemprop="date">
          <img ngSrc="/images/calendar.svg" height="28" width="24" alt=""/>
          {{evenement.attributes.date | date}} à {{evenement.attributes.startTime}}
        </p>
        <p class="line-clamp-4 sm:line-clamp-3" itemprop="description">
          {{evenement.attributes.description}}
        </p>
        <a class="underline block mb-4" [routerLink]="['/evenements', evenement.slug]" title="Découvrez les détails de l'évènement">Voir plus</a>
        <app-evenement-link [evenement]="evenement"></app-evenement-link>
      </section>
      <img class="hidden sm:block border-2 border-white" [ngSrc]="'/images/' + evenement.attributes.image" height="180" width="320" priority alt="">
    </article>

  `,
  imports: [
    RouterLink,
    DatePipe,
    NgOptimizedImage,
    NgIf,
    EvenementLinkComponent
  ],
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
      }
    `
  ]
})
export class EvenementComponent {
  @Input({required: true}) evenement!: ContentFile<Evenement>;
}
