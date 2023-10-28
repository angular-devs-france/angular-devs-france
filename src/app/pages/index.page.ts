import { Component } from '@angular/core';
import {EvenementComponent} from "../components/evenement.component";
import {injectContentFiles} from "@analogjs/content";
import {Evenement} from "../models/evenement.model";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
      <div class="flex justify-center items-center flex-wrap gap-8">
          <img alt="Logo Angular Devs France" ngSrc="/images/logo.webp" height="250" width="250" priority/>
          <div class="flex flex-col items-center gap-4 text-center">
              <h1 class="text-6xl font-bold title">ANGULAR DEVS FRANCE</h1>
              <p class="text-xl">LE rendez-vous de la communauté Angular francophone!</p>
              <p>Rejoignez la communauté en live sur YouTube chaque premier mardi du mois à 19h!</p>
              <a class="inline-flex items-center gap-2 px-4 py-3 bg-red-600 text-white font-bold rounded-md"
                 href="https://www.youtube.com/channel/UCmEGS2U5CSzWBt62WnCh_Cw" target="_blank">
                <img ngSrc="/images/youtube.svg" height="24" width="24" alt=""/>
                Découvrir la chaine YouTube
              </a>
              <a
                      class="sm:hidden px-4 py-3 bg-blue-700 text-white font-bold rounded-md"
                      href="https://conference-hall.io/public/event/xXhZVEbtz1mMoWZYhsoE"
                      target="_blank" title="Rejoignez notre communauté de speakers en proposant un sujet sur Conference Hall">
                  Proposer un sujet
              </a>
          </div>
      </div>

      <h2 class="text-4xl font-bold mt-20 mb-8 text-center">Prochains événements</h2>
      <ng-container *ngIf="nextEvents.length; else upcoming">
        <app-event *ngFor="let event of nextEvents" [evenement]="event"></app-event>
      </ng-container>
      <ng-template #upcoming>
        <p class="text-center">Annonce à venir pour la prochaine édition</p>
      </ng-template>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .title {
        font-family: 'Lilita One', sans-serif;
      }
    `
  ],
  imports: [
    EvenementComponent,
    NgOptimizedImage,
    NgIf,
    NgForOf
  ]
})
export default class HomeComponent {
  nextEvents = injectContentFiles<Evenement>(file => {
    return file.filename.startsWith('/src/content/evenements/') && new Date(file.attributes.date) > new Date()
  }).sort((a, b) => new Date(a.attributes.date).getTime() - new Date(b.attributes.date).getTime());
}
