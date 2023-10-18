import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/index/header/header.component';
import { HeroComponent } from './components/index/hero/hero.component';
import { FooterComponent } from './components/index/footer/footer.component';
import { TrabajarComponent } from './components/tabs/trabajar/trabajar.component';
import { InversionistaComponent } from './components/tabs/inversionista/inversionista.component';
import { AsesoriaComponent } from './components/tabs/asesoria/asesoria.component';
import { FinanciacionComponent } from './components/tabs/financiacion/financiacion.component';
import { LoginComponent } from './components/tabs/login/login.component';
import { RegisterComponent } from './components/tabs/register/register.component';
import { IndexComponent } from './components/tabs/index/index.component';
import { NosotrosComponent } from './components/tabs/nosotros/nosotros.component';
import { ContactoComponent } from './components/tabs/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    TrabajarComponent,
    InversionistaComponent,
    AsesoriaComponent,
    FinanciacionComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
