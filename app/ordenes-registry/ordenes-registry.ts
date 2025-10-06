import { Component } from '@angular/core';

import { Order } from '../data/order';
import { OrderService } from '../services/order';
import { Router } from '@angular/router';
//
import { Modal } from '../modal/modal';
//
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ordenes-registry',
  imports: [Modal, CommonModule, FormsModule],
  templateUrl: './ordenes-registry.html',
  styleUrl: './ordenes-registry.css'
})
export class OrdenesRegistry {
  
  formData = {
    nombre: '',
    direccion: '',
    correo: '',
    descripcion: ''
  };

  //array que contiene las ordenes
  orders: Order[] = [];

  createdOrder: Order | null = null;
  //ventana emergente que muestra la información 
  showModal = false;
  modalMessage = '';

  constructor(private router: Router,private orderService: OrderService) {
  }

  //metodo para agregar la información
  submitForm(){
    const newOrder = new Order(
      this.formData.nombre,
      this.formData.direccion,
      this.formData.correo,
      this.formData.descripcion,
      'Sistema',
      'Nueva Orden'
    );

    //guardar la orden
    this.orderService.agregarOrden(newOrder);
    this.createdOrder = newOrder;
    //ventana emergente que muestra la información de la orden creada
    this.modalMessage = `✅ Orden creada exitosamente\n📦 Número de Paquete: ${this.createdOrder.numeroPackege}\n🆔 Numero de Orden: ${this.createdOrder.numeroOrden}`;
    this.showModal = true;

    //mostrar la orden creada
    console.log(newOrder);

    //limpiar el formulario
    this.formData = {
      nombre: '',
      direccion: '',
      correo: '',
      descripcion: ''
    };
  }

  //metodo para poder ir la lista de las ordenes
  navegateOrdenesList(){
    this.router.navigate(['/ordenes-list'], { state: { orders: this.orders } });
  }


}
