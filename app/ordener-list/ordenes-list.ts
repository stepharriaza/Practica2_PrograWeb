import { Component } from '@angular/core';

import { Order } from '../data/order';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { OrderService } from '../services/order';

@Component({
  selector: 'app-ordenes-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './ordenes-list.html',
  styleUrl: './ordenes-list.css'
})
export class OrdenesList {
  orders: Order[] = [];

  constructor(private router: Router, private orderService: OrderService) {
  }

  ngOnInit() {
  this.orders = this.orderService.obtenerOrdersList();
  }

  navegateOrdenesRegistry() {
    this.router.navigate(['/ordenes-registry'], { state: { orders: this.orders } });
  }
  navegateOrdenesUpdate(){
    this.router.navigate(['/ordenes-update'], { state: { orders: this.orders } })
  }
  navegateSeguimientoOrden() {
    this.router.navigate(['/package-seguimiento']);
  }

}
