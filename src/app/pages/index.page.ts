import { Component } from '@angular/core';
import {EvenementComponent} from "../components/evenement.component";
import {injectContentFiles} from "@analogjs/content";
import {Evenement} from "../models/evenement.model";

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
      <div class="flex justify-center items-center flex-wrap gap-8">
          <img alt="Logo Angular Devs France" src="/images/logo.png"/>
          <div class="flex flex-col items-center gap-4">
              <h1 class="text-6xl font-bold">Angular Devs France</h1>
              <p class="text-xl">LE rendez-vous de la communauté Angular francophone!</p>
              <a class="inline-block px-4 py-3 bg-red-600 text-white font-bold rounded-md" href="https://www.youtube.com/channel/UCmEGS2U5CSzWBt62WnCh_Cw" target="_blank">Découvrir
                  la chaine
                  YouTube</a>
              <a
                      class="sm:hidden px-4 py-3 bg-blue-700 text-white font-bold rounded-md"
                      href=""
                      target="_blank">
                  Proposer un sujet
              </a>
          </div>
      </div>


      <h2 class="text-4xl font-bold mt-20 mb-8">Prochain événement</h2>
      <app-event [evenement]="nextEvent"></app-event>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  imports: [
    EvenementComponent
  ]
})
export default class HomeComponent {
  nextEvent = injectContentFiles<Evenement>(file => {
    return file.filename.startsWith('/src/content/events/') && new Date(file.attributes.date) > new Date()
  })[0];

}
