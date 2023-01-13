import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProductosService {

  datos=[{
    "id":"1",
    "codigo":"1",
    "descripcion":"Galletas",
    "precioC":"10",
    "precioV":"15",
    "ganancia":"5",
    "existencia":"100.00"
  },
  {
    "id":"2",
    "codigo":"2",
    "descripcion":"Mermelada",
    "precioC":"65",
    "precioV":"80",
    "ganancia":"15",
    "existencia":"100.00"
  }];

  constructor() { }
}
