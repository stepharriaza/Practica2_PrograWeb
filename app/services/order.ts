import { Injectable } from '@angular/core';
import { Order, OrderStatus, Seguimiento } from '../data/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[] = [];

  agregarOrden(order: Order) {
    this.orders.push(order);
  }

  obtenerOrdersList(): Order[] {
    return this.orders;
  }

  obtenerNumeroDePaquete(numeroPackege: string): Order | undefined {
  return this.orders.find(order => order.numeroPackege === numeroPackege);
  }

  obtenerNumeroDeOrden(numeroOrden: number): Order | undefined {
  return this.orders.find(order => order.numeroOrden == numeroOrden);
  }

  updateEstado(numeroOrden: number, nuevoEstado: OrderStatus, comentario: string, responsable: string): boolean {
  const order = this.obtenerNumeroDeOrden(numeroOrden);
  if (order) {
    order.estado = nuevoEstado;
    order.comentario = comentario;

    const nuevoHistorial: Seguimiento = {
      fecha: new Date(),
      estado: nuevoEstado,
      comentario: comentario,
      responsable: responsable
    };

    order.historial.push(nuevoHistorial);

    return true;
  }
  return false;
  }

  
}
