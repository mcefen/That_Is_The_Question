import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Events/components/home/home.component';
import { LoginregisterComponent } from './User/loginregister/component-loginregister/component-loginregister.component';
import { FooterComponentComponent } from './shared/footer-component/footer-component.component';
import { HeaderComponentComponent } from './shared/header-component/header-component.component';
import { PageregisterComponent } from './User/pageregister-component/pageregister-component.component';
import { EquipoComponent } from './User/equipo/equipo.component';
import { ContactComponent } from './User/contact/contact.component';
import { StartComponent } from './User/start/start.component';
import { NavLoginComponent } from './shared/nav-login/nav-login.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'start', component:StartComponent},
  { path: 'home', component:HomeComponent},
  { path: 'footer', component: FooterComponentComponent },
  { path: 'login', component: LoginregisterComponent},
  { path: 'header', component: HeaderComponentComponent},
  { path: 'register', component:PageregisterComponent},
  { path: 'equipo', component:EquipoComponent,
},
  { path: 'contact', component:ContactComponent},
  { path: 'log-in', component:NavLoginComponent},
  { path: 'inicio', component:DashboardComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
