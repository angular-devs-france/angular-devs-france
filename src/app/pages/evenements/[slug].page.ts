import { Component } from '@angular/core';
import {ContentFile, injectContent, MarkdownComponent} from "@analogjs/content";
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {Evenement} from "../../models/evenement.model";
import {Meta, Title} from "@angular/platform-browser";
import {Observable, tap} from "rxjs";
import {EvenementLinkComponent} from "../../components/evenement-link.component";

@Component({
  selector: 'app-evenement',
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe, NgOptimizedImage, EvenementLinkComponent],
  template: `
    <ng-container *ngIf="evenement$ | async as evenement">
      <img class="border-2 border-white" [ngSrc]="'/images/' + evenement.attributes.image" height="360" width="640" alt="" priority>
      <h1 class="text-6xl font-bold mb-8">{{evenement.attributes.title}}</h1>
      <p>{{evenement.attributes.description}}</p>
      <app-evenement-link [evenement]="evenement"></app-evenement-link>
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
  evenement$ = (injectContent<Evenement>({
    param: 'slug',
    subdirectory: 'evenements'
  }) as Observable<ContentFile<Evenement>>).pipe(
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
