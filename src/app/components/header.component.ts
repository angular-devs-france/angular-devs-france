import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="flex justify-center sm:justify-between items-center px-8 h-16">
      <a class="hidden sm:block title" routerLink="/" title="Accéder à la page d'accueil">ANGULAR DEVS FRANCE</a>
      <nav>
        <ul class="flex justify-center items-center gap-4">
          <li><a class="pb-2" routerLink="/" title="Accéder à la page d'accueil">Accueil</a></li>
          <li><a class="pb-2" routerLink="/evenements" routerLinkActive="active" title="Découvrez nos évènements">Evènements</a></li>
          <li><a class="pb-2" routerLink="/ateliers" routerLinkActive="active" title="Découvrez nos formations gratuites pour la communauté féminine">Ateliers</a></li>
          <li><a class="pb-2" routerLink="/a-propos" routerLinkActive="active" title="Découvrez l\'équipe derrière Angular Devs France">A propos</a></li>
          <li>
            <a
              class="hidden sm:block px-2 py-1 bg-blue-700 text-white font-bold rounded-md"
              href="https://conference-hall.io/public/event/xXhZVEbtz1mMoWZYhsoE"
              title="Rejoignez notre communauté de speakers en proposant un sujet sur Conference Hall"
              target="_blank">
              Proposer un sujet
            </a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [
    `
      .active {
        border-bottom: 3px solid darkblue;
      }

      .title {
        font-family: 'Lilita One', sans-serif;
      }
    `
  ],
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgClass
  ]
})
export class HeaderComponent {
}
