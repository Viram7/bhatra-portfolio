import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkshopComponent } from './workshop/workshop.component';

export const routes: Routes = [

  {path:'',component:HomeComponent },
  {path:'',redirectTo:'home', pathMatch: 'full' },

  {path:'home',component:HomeComponent },
  {path:'about',component:AboutComponent},
  {path:'workshop',component:WorkshopComponent}

];
