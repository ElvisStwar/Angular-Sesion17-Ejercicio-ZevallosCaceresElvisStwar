import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Aa17Component } from './pages/aa17/aa17.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"nosotros", component:NosotrosComponent},
  {path:"contacto", component:ContactoComponent},
  {path:"asincrona-17", component:Aa17Component},
  {path:"productos", component:ProductosComponent},
  // {path:"404",}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
