import { Component } from '@angular/core';
//
import { OrderService } from '../services/order';
import { Order } from '../data/order';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-package-seguimiento',
  imports: [CommonModule,FormsModule],
  templateUrl: './package-seguimiento.html',
  styleUrl: './package-seguimiento.css',
  standalone: true,
})
export class PackageSeguimiento {

  numeroPackage: string | null = null;
  foundOrder: Order | null = null;
  errorMessage = '';

  constructor(private orderService: OrderService, private router:Router) {}

  trackOrder() {
    if (this.numeroPackage !== null) {
      const order = this.orderService.obtenerNumeroDePaquete(this.numeroPackage);
      if (order) {
        this.foundOrder = order;
        this.errorMessage = '';
      } else {
        this.foundOrder = null;
        this.errorMessage = `No se ha encontrado el paquete con el numero "${this.numeroPackage}"`;
      }
    }else{
      this.errorMessage = `Ingresar un numero de paquete valido.`;
    }
  }

  navegateOrdenesRegistry() {
    this.router.navigate(['/ordenes-registry']);
  }
  navegateOrdenesUpdate(){
    this.router.navigate(['/ordenes-update'])
  }
  navegateOrdenesList() {
    this.router.navigate(['/ordenes-list']);
  }

}
