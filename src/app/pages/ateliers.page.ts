import {Component} from "@angular/core";

@Component({
  selector: 'girl',
  template: `
    <img src="/images/girls/banner.png" alt=""/>
    <h1 class="text-5xl text-center my-6 title">Ateliers de découverte à Angular</h1>
    <h2 class="text-2xl text-center my-6 py-2 rounded-xl border-2 border-black">dédiés à la communauté féminine</h2>
    <p class="text-center mb-12">"Accompagner l'employabilité et développer son réseau grâce à une journée de formation gratuite en non-mixité."</p>
    <p>Au delà de la simple découverte d'un nouveau framework, ce sont nos ambitions en proposant cet événément à la
      communauté féminine afin d'oeuvrer pour la diversité dans les métiers du numérique en France.</p>

    <p class="mt-6">Forts d'engagements individuels dans d'autres démarches (Duchess, Ada Tech School, EstimNumérique...), nous avons fait le choix
      de nous investir dans cette nouvelle action dans notre ligne directrice: le partage de connaissances au sein de la communauté Angular.</p>

    <section class="flex flex-col md:flex-row justify-between flex-wrap mt-12">
      <div class="md:max-w-[45%]">
        <h2 class="text-2xl mb-6">Un accompagnement par la communauté</h2>
        <p class="mb-6">Nous accompagnons les participantes avec le soutien de développeuses Angular locales qui prennent le rôle de mentor le temps d'une journée.</p>
        <p>Responsables d'un petit groupe qu'elles suivent toute la journée, cet accompagnement permet de profiter d'un moment privilégié entre elles.</p>
      </div>
      <img class="md:max-w-[45%]" src="images/girls/adriana.jpg" alt="">
    </section>

    <h3 class="text-2xl mt-12">Prochaines dates</h3>

    <h4 class="text-xl mt-8">Nantes</h4>

    <p class="mt-4">Nous accueillerons très bientôt mentors et participantes à Nantes</p>
    <p>En attente du choix d'une date avec les mentors, vous pouvez dès à présent vous préinscrire</p>

    <div class="flex justify-center my-12">
      <a class="inline-block py-2 px-4 rounded bg-blue-800 text-white" href="https://docs.google.com/forms/d/e/1FAIpQLScfT5TJFfE0BGTGEVbW0e3bz7uxK4zEjoKl5wPL9Rv_kvAOjw/viewform?usp=sf_link" target="_blank">Préinscription</a>
    </div>

    <!--
    <img src="images/girls/banner-2.png" alt="">
    -->


    <section class="flex flex-col md:flex-row justify-between flex-wrap mt-12">
      <div class="md:max-w-[45%]">
        <h3 class="text-3xl mt-12 mb-6">Bientôt dans votre entreprise?</h3>
        <p>Initiative bénévole, nous sommes à la recherche de locaux prêts à accueillir les participantes et les mentors
          pour leur permettre de se réunir dans les meilleurs conditions.</p>
        <p class="mb-6"> Afin de créer à la fois une cohésion et une atmosphère conviviale, cette recherche va avec un sponsoring sur la
          prise en charge d'un petit déjeuner et d'un repas pour proposer la meilleure expérience d'accueil possible à
          toutes.</p>

        <a class="py-2 px-4 rounded bg-blue-800 text-white" href="mailto: angulardevsfr@gmail.com">Nous contacter</a>

      </div>
      <img class="md:max-w-[45%]" src="images/girls/DJI_0173.jpg" alt="">
    </section>

    <img class="mt-16" src="images/girls/groupe.jpeg" alt="">



  `,
  styles: [
    `
      .title {
        font-family: 'Lilita One', sans-serif;
      }
    `
  ],
  standalone: true
})
export default class GirlsComponent {
  constructor() {
  }

  foo() {

  }
}
