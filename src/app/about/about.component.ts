import { DubleYourConComponent } from './../duble-your-con/duble-your-con.component';
import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { NavNextBannerComponent } from '../nav-next-banner/nav-next-banner.component';
import { FaqComponent } from '../faq/faq.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet,NavNextBannerComponent,DubleYourConComponent,FaqComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
img_url1 =signal("../../assets/all_photo/grow-black.jpeg");
}
