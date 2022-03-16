import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { component: HomeComponent,path:''},
  {component: AddRestaurantComponent, path:'add' },
  {component: RestaurantListComponent,path:'restaurantlist'},
  {component: UpdateComponent, path:'update' },
  {component: RegisterComponent,path:'register'},
  
  {component: LoginComponent, path:'login' }
    

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
