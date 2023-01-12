import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Aa17Component } from './aa17/aa17.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    Aa17Component,
    ProductosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    NosotrosComponent,
    ContactoComponent
  ]
})
export class PagesModule { }
