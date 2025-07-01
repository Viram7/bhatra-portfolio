import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-next-banner',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './nav-next-banner.component.html',
  styleUrl: './nav-next-banner.component.scss'
})
export class NavNextBannerComponent {
   @Input() img_url:string = "../../assets/all_photo/grow-img.png";
}
