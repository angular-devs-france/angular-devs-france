import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header.component";
import {FooterComponent} from "./components/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <main class="flex justify-center grow px-4 py-12 min-h-screen">
      <router-outlet></router-outlet>
    </main>
    <app-footer />
  `,
  styles: [
    `
      :host {
        max-width: 1280px;
        min-height: 100vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        @apply prose max-w-screen-lg;
      }
    `,
  ],
})
export class AppComponent {}
