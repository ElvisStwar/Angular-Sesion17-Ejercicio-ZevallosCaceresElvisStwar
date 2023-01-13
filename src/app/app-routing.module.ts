import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisionComponent } from './componentes/mision/mision.component';
import { VisionComponent } from './componentes/vision/vision.component';
import { Aa17Component } from './pages/aa17/aa17.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},

  {path:"nosotros", component:NosotrosComponent,
    children:[
      {path:"mision", component:MisionComponent},
      {path:"vision", component:VisionComponent}
    ]
  },
  
  {path:"contacto", component:ContactoComponent},
  // {path:"404",}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
