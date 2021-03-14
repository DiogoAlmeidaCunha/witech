import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontPageComponent} from './front-page/front-page.component';
import { ContactComponent } from "./contact/contact.component";
import { WebComponent} from './web/web.component'

const routes: Routes = [
  { path: '', component : FrontPageComponent},
  { path: 'contact' , component: ContactComponent},
  { path: 'website' , component: WebComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
