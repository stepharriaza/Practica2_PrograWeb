import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Practica2');
  constructor(private router: Router){

  }

  //metodo para poder ir la lista de las ordenes
  navegateOrdenesList() {
    this.router.navigate(['/ordenes-list']);
  }
  //metodo para poder ir registrar una orden
  navegateOrdenesRegistry() {
    this.router.navigate(['/ordenes-registry']);
  }
  //metodo para poder ir a actualizar una orden
  navegateOrdenesUpdate(){
    this.router.navigate(['/ordenes-update']);
  }
  //metodo para poder ir seguimiento de paquete
  navegateSeguimientoOrden() {
    this.router.navigate(['/package-seguimiento']);
  }
}
