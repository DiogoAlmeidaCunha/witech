import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontPageComponent} from './front-page/front-page.component';
import { ContactComponent } from "./contact/contact.component";
import { WebComponent} from './services/web/web.component';
import { MobileComponent} from './services/mobile/mobile.component';
import { SocialmediaComponent} from './services/socialmedia/socialmedia.component';
import { PortfolioComponent} from './services/portfolio/portfolio.component';
import { PublicityComponent} from './services/publicity/publicity.component';

const routes: Routes = [
  { path: '', component : FrontPageComponent},
  { path: 'contact' , component: ContactComponent},
  { path: 'service/website' , component: WebComponent},
  { path: 'service/mobile' , component: MobileComponent},
  { path: 'service/socialmedia' , component: SocialmediaComponent},
  { path: 'service/portfolio' , component: PortfolioComponent},
  { path: 'service/publicity' , component: PublicityComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
