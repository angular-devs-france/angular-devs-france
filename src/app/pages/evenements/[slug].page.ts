import { Component } from '@angular/core';
import {injectContent, MarkdownComponent} from "@analogjs/content";
import {AsyncPipe, NgIf} from "@angular/common";
import {Evenement} from "../../models/evenement.model";

@Component({
  selector: 'app-evenement',
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe],
  template: `
    <ng-container *ngIf="post$ | async as post">
      <h1 class="text-6xl font-bold mb-8">{{post.attributes.title}}</h1>
      <p>{{post.attributes.description}}</p>
      <analog-markdown class="text-justify prose prose-headings:font-bold" [content]="post.content"></analog-markdown>
    </ng-container>
    `,
  styles: [
    `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      @apply text-justify prose prose-headings:font-bold;
    }`
  ]
})
export default class EvenementComponent {
  post$ = injectContent<Evenement>({
    param: 'slug',
    subdirectory: 'events'
  });
}
