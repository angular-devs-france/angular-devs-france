import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="flex justify-center sm:justify-between items-center px-8 h-16">
      <a class="hidden sm:block" routerLink="/" title="Accéder à la page d'accueil">Angular Devs France</a>
      <nav>
        <ul class="flex justify-center items-center gap-4">
          <li><a routerLink="/" title="Accéder à la page d'accueil">Accueil</a></li>
          <li><a routerLink="/evenements" routerLinkActive="active" title="Découvrez nos évènements">Evènements</a></li>
          <li><a routerLink="/a-propos" routerLinkActive="active" title="Découvrez l\'équipe derrière Angular Devs France">A propos</a></li>
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
    `
  ],
  imports: [
    RouterLink,
    RouterLinkActive
  ]
})
export class HeaderComponent {
}
