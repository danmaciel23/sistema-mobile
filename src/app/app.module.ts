import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
//import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // ← necessário para ngModel
//import { provideHttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
//precisa resolver esse cliente Module para fazer as requisições HTTP
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    //AppRoutingModule,
    FormsModule // ← ESSENCIAL!
   // HttpClientModule // ← necessário para fazer requisições HTTP
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
