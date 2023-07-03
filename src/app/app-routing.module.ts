import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';
import { MyproductsComponent } from './components/myproducts/myproducts.component';
import { AUService } from './services/gard/au.service';
import { ProducatdetailsComponent } from './components/producatdetails/producatdetails.component';
import { NOAUService } from './services/gard/noau.service';
const routes: Routes = [
  // {path:'',component:HomeComponent,canActivate:[NOAUService]},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent,canActivate:[NOAUService]},
  {path:'register',component:RegisterComponent,canActivate:[NOAUService]},
  {path:'profile',component:ProfileComponent,canActivate:[AUService]},
  {path:'products',component:ProductsComponent,canActivate:[AUService]},
  {path:'myproducts',component:MyproductsComponent,canActivate:[AUService]},
  {path:'product/:key',component:ProducatdetailsComponent,canActivate:[AUService]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }