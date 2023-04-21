import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Menu',component:MenuComponent},
  {path:'Contact-us',component:ContactUsComponent},
  
  { path: '**', redirectTo: '/Home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
