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
    PortfolioComponent
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
