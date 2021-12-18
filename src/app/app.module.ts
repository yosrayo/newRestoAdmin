import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { GestionComponent } from './gestion/gestion.component';
import {APP_BASE_HREF} from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { ListPlatComponent } from './list-plat/list-plat.component'
import { PlatService } from './services/plat.service';
import { GestionPlatComponent } from './gestion-plat/gestion-plat.component';
import { GestionCategoryComponent } from './gestion-category/gestion-category.component';
import { GestionLivreurComponent } from './gestion-livreur/gestion-livreur.component';
import { FactureComponent } from './facture/facture.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { PopularComponent } from './popular/popular.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    GestionComponent,
    LoginComponent,
    PopUpComponent,
    AddPlatComponent,
    ListPlatComponent,
    GestionPlatComponent,
    GestionCategoryComponent,
    GestionLivreurComponent,
    FactureComponent,
    ListCommandeComponent,
    PopularComponent,
    
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    
    BrowserAnimationsModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
 

  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'},PlatService],
  bootstrap: [AppComponent]
})
export class AppModule { }