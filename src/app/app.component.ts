import { Component } from '@angular/core';

import { HomeComponent } from './features/landing/pages/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    FooterComponent,
    NavbarComponent,
    RouterOutlet
  ],

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}