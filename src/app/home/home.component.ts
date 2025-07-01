import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavNextBannerComponent } from '../nav-next-banner/nav-next-banner.component';
import { AboutEmpowerComponent } from '../about-empower/about-empower.component';
import { KeynoteComponent } from '../keynote/keynote.component';
import { Card3Component } from '../card3/card3.component';
import { SpecialOfferComponent } from '../special-offer/special-offer.component';
import { MotivationComponent } from '../motivation/motivation.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ RouterOutlet, NavbarComponent,NavNextBannerComponent,AboutEmpowerComponent,KeynoteComponent,Card3Component,SpecialOfferComponent,MotivationComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
