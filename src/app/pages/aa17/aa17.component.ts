import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProductosService } from 'src/app/servicios/data-productos.service';

@Component({
  selector: 'app-aa17',
  templateUrl: './aa17.component.html',
  styleUrls: ['./aa17.component.css']
})
export class Aa17Component {

  // plantilla=[{
  //   "id":"",
  //   "codigo":"",
  //   "descripcion":"",
  //   "precioC":"",
  //   "precioV":"",
  //   "ganancia":"",
  //   "existencia":""
  // }]

  // id!:string

  // constructor(private route:ActivatedRoute, public datoproducto:DataProductosService){

  // }

  // ngOnInit(): void {
  //     this.id =String(this.route.snapshot.paramMap.get("id"));
  //     this.filtrar(this.id)
  // }

  // filtrar(id:string){
  //   this.plantilla = this.datoproducto.datos.filter(producto => producto.id === id)
  //   // alert(JSON.stringify(this.datoproducto.datos))
  // }

}
