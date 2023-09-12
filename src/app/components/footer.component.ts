import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <footer class="p-8 flex flex-wrap gap-16 justify-center border-t-2 border-t-gray-700 text-center">
      <section>
        <h4 class="font-bold text-xl mb-2">Communauté</h4>
        <ul>
          <li class="py-1 sm:py-0"><a href="https://twitter.com/AngularDevsFr" target="_blank">Twitter</a></li>
          <li class="py-1 sm:py-0"><a href="https://www.linkedin.com/company/angular-devs-france" target="_blank">LinkedIn</a></li>
          <li class="py-1 sm:py-0"><a href="https://discord.gg/c8XThfW9a7" target="_blank">Discord</a></li>
        </ul>
      </section>

      <section>
        <h4 class="font-bold text-xl mb-2">Evènements</h4>
        <ul>
          <li class="py-1 sm:py-0"><a href="https://www.youtube.com/channel/UCmEGS2U5CSzWBt62WnCh_Cw" target="_blank">YouTube</a></li>
          <li class="py-1 sm:py-0"><a routerLink="/code-de-conduite">Code de conduite</a></li>
        </ul>
      </section>

      <section>
        <h4 class="font-bold text-xl mb-2">Nous rencontrer</h4>
        <ul>
          <li class="py-1 sm:py-0"><a href="https://conference-hall.io/public/event/xXhZVEbtz1mMoWZYhsoE" target="_blank">Proposer un sujet</a></li>
          <li class="py-1 sm:py-0"><a href="mailto:angulardevsfr@gmail.com">Nous contacter</a></li>
        </ul>
      </section>
    </footer>
  `
})
export class FooterComponent {
}
