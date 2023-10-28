import {Component, computed, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {ContentFile} from "@analogjs/content";
import {Evenement} from "../models/evenement.model";

@Component({
  selector: 'app-evenement-link',
  template: `
    <a *ngIf="evenement.attributes.youtube"
       class="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-bold rounded-md"
       [href]="evenement.attributes.youtube"
       target="_blank" title="Accédez à l'évènement live sur YouTube">
      <img ngSrc="/images/youtube.svg" height="24" width="24" alt=""/>
      {{isFuture() ? 'Participer' : 'Revoir'}}
    </a>
    <a *ngIf="evenement.attributes.link && isFuture()"
       class="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white font-bold rounded-md"
       [href]="evenement.attributes.link"
       target="_blank" title="Vivez l'événement avec la communauté en personne">
      Nous rejoindre
    </a>
    <a *ngIf="!evenement.attributes.link && !evenement.attributes.youtube"
       class="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white font-bold rounded-md"
       href="https://conference-hall.io/public/event/xXhZVEbtz1mMoWZYhsoE"
       title="Rejoignez notre communauté de speakers en proposant un sujet sur Conference Hall"
       target="_blank">
      Proposer un sujet
    </a>
  `,
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  standalone: true
})
export class EvenementLinkComponent {
 @Input({required: true}) evenement!: ContentFile<Evenement>;

 isFuture = computed(() => {
    return new Date(this.evenement.attributes.date) > new Date();
 })
}
