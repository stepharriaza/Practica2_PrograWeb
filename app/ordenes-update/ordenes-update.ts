import { Component } from '@angular/core';
//
import { OrderService } from '../services/order';
import { Order, OrderStatus } from '../data/order';
//
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordenes-update',
  imports: [CommonModule,FormsModule],
  templateUrl: './ordenes-update.html',
  styleUrl: './ordenes-update.css',
  standalone: true
})
export class OrdenesUpdate {

  //variable para el numero de la orden
  numeroOrden: number | null = null;
  //variable para el nuevo estado seleccionado
  selectedStatus: OrderStatus = 'Creado';
  //variable para el mensaje informativo
  infoMessage = '';
  //mensaje de actualización de estado
  comentarioActual = '';
  //variable que guardara el estado actual
  estadoActual: string = ''; 
  //
  responsableActual: string = '';
  //
  foundOrder: Order | null = null;
  //variables para escribir la información que se va a obtener
  nombre = '';
  direccion = '';
  numOrden: number | null = null;

  //opciones validas para cada estado
  transicionesSegunEstado: { [key: string]: string[] } = {
    'Creado': ['Creado','En preparación'],
    'En preparación': ['En preparación','En transito', 'No entregado'],
    'En transito': ['En transito','Entregado', 'No entregado'],
    'No entregado': []
  };


  constructor(private orderService: OrderService, private router: Router) {}
    get opcionesEstado(): string[] {
    return this.transicionesSegunEstado[this.estadoActual] || [];
  }

  updateStatus(){
    //verificar que el numero no sea null
    if (this.numeroOrden !== null) {
      //actualizar estado
      const success = this.orderService.updateEstado(this.numeroOrden, this.selectedStatus, this.comentarioActual,this.responsableActual);
      //Mostrar mensaje de error si no encuentra la orden
      setTimeout(() => { this.infoMessage = 'La orden ha sido actualizada';}, 3000); // se borra después de 3 segundos
      //this.infoMessage = success ? ` La orden ha sido actualizada` : ` No se ha encontrado la orden con el numero ${this.numeroOrden}`;
      //Limpiar la información
      this.numeroOrden = null;
      this.numOrden = null;
      this.estadoActual = '';
      this.selectedStatus = 'Creado';
      this.comentarioActual = '';
      this.nombre = '';
      this.direccion = '';
      this.responsableActual = '';
    }

  }

  //busqueda de la informacion de la orden
  buscarEstadoActual(){
  //verificar que el numero de la orden no sea null
    if (this.numeroOrden !== null){
    
      //console.log(this.numeroOrden);
      //obtener la orden mediante el numero de orden ingresado
      const orden = this.orderService.obtenerNumeroDeOrden(this.numeroOrden);
    
      //console.log(orden);

      //Si se encuentra el numeor de la orden
      if (orden){
        this.foundOrder = orden;
        this.numOrden = orden.numeroOrden;
        this.estadoActual = orden.estado;
        this.nombre = orden.nombre;
        this.direccion = orden.direccion;
        //this.selectedStatus = this.opcionesEstado[0]  as OrderStatus || 'Creado';
        //this.comentarioActual = orden.comentario;
        this.infoMessage = '';
      } else{
        this.estadoActual = '';
        this.infoMessage = ` No se ha encontrado la orden con el numero "${this.numeroOrden}"`;
      }
    } else{
    this.infoMessage = ' Ingresar un numero de paquete valido.';
    }
  }

  //metodo para poder ir al registro de las ordenes
  navegateOrdenesRegistry(){
    this.router.navigate(['/ordenes-registry']);
  }
  //metodo para poder ir la lista de las ordenes
  navegateOrdenesList(){
    this.router.navigate(['/ordenes-list']);
  }
  //metodo para poder ir al seguimiento del los paquetes
  navegateSeguimientoOrden(){
    this.router.navigate(['/ordenes-list']);
  }

}
