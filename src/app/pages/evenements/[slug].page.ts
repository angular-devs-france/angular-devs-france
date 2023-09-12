import { Component } from '@angular/core';
import {injectContent, MarkdownComponent} from "@analogjs/content";
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {Evenement} from "../../models/evenement.model";

@Component({
  selector: 'app-evenement',
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe, NgOptimizedImage],
  template: `
    <ng-container *ngIf="post$ | async as post">
      <img class="border-2 border-white" ngSrc="/images/event.png" height="360" width="640" alt="">
      <h1 class="text-6xl font-bold mb-8">{{post.attributes.title}}</h1>
      <p>{{post.attributes.description}}</p>
      <analog-markdown class="prose prose-headings:font-bold prose-h2:text-3xl" [content]="post.content"></analog-markdown>
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
  post$ = injectContent<Evenement>({
    param: 'slug',
    subdirectory: 'events'
  });
}
