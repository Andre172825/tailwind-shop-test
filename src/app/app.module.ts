import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/pages/header/header.component';
import { FooterComponent } from './core/pages/footer/footer.component';
import { MainComponent } from './core/pages/main/main.component';
import { MainV2Component } from './core/pages/main-v2/main-v2.component';
import { MainV3Component } from './main-v3/main-v3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MainV2Component,
    MainV3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
