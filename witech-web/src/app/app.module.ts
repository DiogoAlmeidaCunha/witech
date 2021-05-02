import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './Components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SquareComponent } from './Components/square/square.component';
import AOS from 'aos';
import { ContactComponent } from './contact/contact.component';
import { WebComponent } from './services/web/web.component';
import { MobileComponent } from './services/mobile/mobile.component';
import { PublicityComponent } from './services/publicity/publicity.component';
import { SocialmediaComponent } from './services/socialmedia/socialmedia.component';
import { PortfolioComponent } from './services/portfolio/portfolio.component';
import { DeccerComponent } from './product-pages/deccer/deccer.component';
import { NfComponent } from './product-pages/nf/nf.component';
import { RelatedWorkComponent } from './Components/related-work/related-work.component';
import { DigitarqComponent } from './product-pages/digitarq/digitarq.component';
import { HealthComponent } from './product-pages/health/health.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NavMobileComponent } from './Components/nav-mobile/nav-mobile.component';

AOS.init();


@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    FooterComponent,
    SquareComponent,
    ContactComponent,
    WebComponent,
    MobileComponent,
    PublicityComponent,
    SocialmediaComponent,
    PortfolioComponent,
    DeccerComponent,
    NfComponent,
    RelatedWorkComponent,
    DigitarqComponent,
    HealthComponent,
    NavbarComponent,
    NavMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
