import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NavNextBannerComponent } from './nav-next-banner/nav-next-banner.component';
import { AboutEmpowerComponent } from './about-empower/about-empower.component';
import { KeynoteComponent } from './keynote/keynote.component';
import { FooterComponent } from './footer/footer.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';
import { MotivationComponent } from './motivation/motivation.component';
import { Card3Component } from './card3/card3.component';
import { HomeComponent } from "./home/home.component";

// import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bhatra';
}

