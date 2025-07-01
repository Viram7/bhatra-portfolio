import { SpecialOfferComponent } from './../special-offer/special-offer.component';
import { Component } from '@angular/core';
import { NavNextBannerComponent } from '../nav-next-banner/nav-next-banner.component';
import { UnlockTheComponent } from '../unlock-the/unlock-the.component';
import { RouterOutlet } from '@angular/router';
import { LearnBasicComponent } from '../learn-basic/learn-basic.component';
import { FooterComponent } from "../footer/footer.component";
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { WhoIsComponent } from '../who-is/who-is.component';

@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [RouterOutlet, NavNextBannerComponent,
     UnlockTheComponent, SpecialOfferComponent,
      LearnBasicComponent,TestimonialsComponent, FooterComponent,
      WhoIsComponent,
    ],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.scss'
})
export class WorkshopComponent {
img_url1:string="../../assets/all_photo/low-profit.png";
}
