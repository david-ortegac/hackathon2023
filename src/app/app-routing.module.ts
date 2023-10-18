import { RegisterComponent } from './components/tabs/register/register.component';
import { LoginComponent } from './components/tabs/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabajarComponent } from './components/tabs/trabajar/trabajar.component';
import { AsesoriaComponent } from './components/tabs/asesoria/asesoria.component';
import { FinanciacionComponent } from './components/tabs/financiacion/financiacion.component';
import { InversionistaComponent } from './components/tabs/inversionista/inversionista.component';
import { NosotrosComponent } from './components/tabs/nosotros/nosotros.component';
import { ContactoComponent } from './components/tabs/contacto/contacto.component';
import { IndexComponent } from './components/tabs/index/index.component';

const routes: Routes = [
  {path:'', component: IndexComponent, pathMatch:'full'},
  {path:'login', component: LoginComponent, pathMatch:'full'},
  {path:'register', component: RegisterComponent, pathMatch:'full'},
  {path:'trabajar', component: TrabajarComponent, pathMatch:'full'},
  {path:'asesoria', component: AsesoriaComponent, pathMatch:'full'},
  {path:'financiacion', component: FinanciacionComponent, pathMatch:'full'},
  {path:'inversionista', component: InversionistaComponent, pathMatch:'full'},
  {path:'nosotros', component: NosotrosComponent, pathMatch:'full'},
  {path:'contacto', component: ContactoComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
