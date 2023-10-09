import { Component } from '@angular/core';
import {injectContent, MarkdownComponent} from "@analogjs/content";
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {Evenement} from "../../models/evenement.model";
import {Meta, Title} from "@angular/platform-browser";
import {tap} from "rxjs";

@Component({
  selector: 'app-evenement',
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe, NgOptimizedImage],
  template: `
    <ng-container *ngIf="evenement$ | async as evenement">
      <img class="border-2 border-white" [ngSrc]="'/images/' + evenement.attributes.image" height="360" width="640" alt="">
      <h1 class="text-6xl font-bold mb-8">{{evenement.attributes.title}}</h1>
      <p>{{evenement.attributes.description}}</p>
      <a class="not-prose inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-bold rounded-md" [href]="evenement.attributes.youtube"
         target="_blank" title="Accédez à l'évènement live sur YouTube">
        <img ngSrc="/images/youtube.svg" height="24" width="24" alt=""/>
        Participer
      </a>
      <analog-markdown class="prose prose-headings:font-bold prose-h2:text-3xl" [content]="evenement.content"></analog-markdown>
    </ng-container>
    `,
  styles: [
    `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      @apply prose prose-headings:font-bold;
    }`
  ]
})
export default class EvenementComponent {
  evenement$ = injectContent<Evenement>({
    param: 'slug',
    subdirectory: 'evenements'
  }).pipe(
    tap((evenement) => {
      this.title.setTitle(`${evenement.attributes.title} - Angular Devs France`);
      this.meta.updateTag({name: 'description', content: evenement.attributes.description});
    })
  );

  constructor(
    private readonly title: Title,
    private readonly meta: Meta
  ) {
  }
}
