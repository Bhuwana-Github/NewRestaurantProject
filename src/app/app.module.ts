import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { FooterComponent } from './footer/footer.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import{HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    LoginComponent,
    RegisterComponent,
    UpdateComponent,
    FooterComponent,
    AddRestaurantComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
