import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BuyproductsComponent } from './buyproducts/buyproducts.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'help',component:HelpComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'footer',component:FooterComponent},
  {path:'buyproducts',component:BuyproductsComponent},
  {path:'signin',component:SigninComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
