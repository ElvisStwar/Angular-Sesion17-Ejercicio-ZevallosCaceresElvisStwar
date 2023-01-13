import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Aa17Component } from './aa17/aa17.component';
import { ProductosComponent } from './productos/productos.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ComponentesModule } from "../componentes/componentes.module";



@NgModule({
    declarations: [
        HomeComponent,
        NosotrosComponent,
        ContactoComponent,
        Aa17Component,
        ProductosComponent
    ],
    exports: [
        HomeComponent,
        NosotrosComponent,
        ContactoComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        ComponentesModule,
        RouterModule
    ]
})
export class PagesModule { }
