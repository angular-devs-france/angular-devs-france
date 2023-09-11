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
      <h1>{{post.attributes.title}}</h1>
      <p>{{post.attributes.description}}</p>
      <analog-markdown [content]="post.content"></analog-markdown>
    </ng-container>
    `,
})
export default class EvenementComponent {
  post$ = injectContent<Evenement>({
    param: 'slug',
    subdirectory: 'events'
  });
}
