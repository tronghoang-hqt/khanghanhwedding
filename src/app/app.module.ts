import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InvatationComponent } from './invatation/invatation.component';
import { InvatationGroomComponent } from './invatation-groom/invatation-groom.component';
import { InvatationBrideComponent } from './invatation-bride/invatation-bride.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvatationComponent,
    InvatationGroomComponent,
    InvatationBrideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
