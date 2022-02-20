import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontPageComponent} from './front-page/front-page.component';
import { ContactComponent } from "./contact/contact.component";
import { WebComponent} from './services/web/web.component';
import { MobileComponent} from './services/mobile/mobile.component';
import { SocialmediaComponent} from './services/socialmedia/socialmedia.component';
import { ContactoComponent } from "./contacto/contacto.component";
import { PortfolioComponent} from './services/portfolio/portfolio.component'; 
import { PublicityComponent} from './services/publicity/publicity.component';
import { DeccerComponent} from './product-pages/deccer/deccer.component';
import { NfComponent} from './product-pages/nf/nf.component';
import { DigitarqComponent} from './product-pages/digitarq/digitarq.component';
import {HealthComponent} from './product-pages/health/health.component';
import {ServicePageComponent } from './service-page/service-page.component'
import {TisComponent } from './product-pages/tis/tis.component';

const routes: Routes = [
  { path: '', component : FrontPageComponent},
  { path: 'contact' , component: ContactComponent},

  { path: 'contacto' , component: ContactoComponent},

  { path: 'service/website' , component: WebComponent},
  { path: 'service/mobile' , component: MobileComponent},
  { path: 'service/socialmedia' , component: SocialmediaComponent},
  { path: 'service/portfolio' , component: PortfolioComponent},
  { path: 'service/publicity' , component: PublicityComponent},

  { path: 'projects' , component: ServicePageComponent},

  { path: 'product-pages/deccer' , component: DeccerComponent},
  { path: 'product-pages/nf' , component: NfComponent},
  { path: 'product-pages/digitarq' , component: DigitarqComponent},
  { path: 'product-pages/health' , component: HealthComponent},
  { path: 'product-pages/tis' , component: TisComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
