import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { HomeComponent } from './Events/components/home/home.component';
import { LoginregisterComponent  } from './User/loginregister/component-loginregister/component-loginregister.component';
import { FooterComponentComponent } from './shared/footer-component/footer-component.component';
import { HeaderComponentComponent } from './shared/header-component/header-component.component';
import { PageregisterComponent } from './User/pageregister-component/pageregister-component.component';
import { RouterModule } from '@angular/router';
import { EquipoComponent } from './User/equipo/equipo.component';
import { ContactComponent } from './User/contact/contact.component';
import { StartComponent } from './User/start/start.component';
import { NavLoginComponent } from './shared/nav-login/nav-login.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginregisterComponent,
    FooterComponentComponent,
    HeaderComponentComponent,
    PageregisterComponent,
    EquipoComponent,
    ContactComponent,
    StartComponent,
    NavLoginComponent,
    DashboardComponent,
   
   
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
