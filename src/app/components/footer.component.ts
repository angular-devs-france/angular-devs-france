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
          <li class="py-1 sm:py-0"><a href="https://twitter.com/AngularDevsFr" target="_blank" title="Rejoignez la communauté sur Twitter">Twitter</a></li>
          <li class="py-1 sm:py-0"><a href="https://www.linkedin.com/company/angular-devs-france" target="_blank" title="Rejoignez la communauté sur LinkedIn">LinkedIn</a></li>
          <li class="py-1 sm:py-0"><a href="https://discord.gg/c8XThfW9a7" target="_blank" title="Rejoignez la communauté sur le serveur Discord Bonjour Angular">Discord Bonjour Angular</a></li>
        </ul>
      </section>

      <section>
        <h4 class="font-bold text-xl mb-2">Evènements</h4>
        <ul>
          <li class="py-1 sm:py-0"><a href="https://www.youtube.com/channel/UCmEGS2U5CSzWBt62WnCh_Cw" target="_blank" title="Retrouver notre contenu sur YouTube">YouTube</a></li>
          <li class="py-1 sm:py-0"><a routerLink="/code-de-conduite" title="Découvrer nos valeurs">Code de conduite</a></li>
        </ul>
      </section>

      <section>
        <h4 class="font-bold text-xl mb-2">Nous rencontrer</h4>
        <ul>
          <li class="py-1 sm:py-0"><a href="https://conference-hall.io/public/event/xXhZVEbtz1mMoWZYhsoE" target="_blank" title="Rejoignez notre communauté de speakers en proposant un sujet sur Conference Hall">Proposer un sujet</a></li>
          <li class="py-1 sm:py-0"><a href="mailto:angulardevsfr@gmail.com" title="Contactez nous par email">Nous contacter</a></li>
        </ul>
      </section>
    </footer>
  `
})
export class FooterComponent {
}
