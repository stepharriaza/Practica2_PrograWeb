//Se crea una clase que me va ayudar a encapsular la lógica de los datos 

//modelo que va restringir el estado para que solo tengan estos tipos de estados
export type OrderStatus = 'Creado' | 'En preparación' | 'En transito' | 'Entregado' | 'No entregado';

// modelo para obtener como un historial de los estados
export interface Seguimiento {
  fecha: Date;
  estado: OrderStatus;
  comentario: string;
  responsable: string;
}
//modelo para las ordenes
export class Order {
    numeroOrden: number;
    numeroPackege: string;
    nombre: string;
    direccion: string;
    correo: string;
    descripcion: string;
    estado: OrderStatus;
    descripcionEstado: string;
    historial: Seguimiento[] = [];
    
    constructor( nombre:string, direccion: string, correo: string, descripcion: string, public responsable: string, public comentario: string){
        this.numeroOrden = this.generarNumeroOrden();
        this.numeroPackege = this.generarNumeroPaquete();
        this.nombre = nombre;
        this.direccion = direccion;
        this.correo = correo;
        this.descripcion = descripcion;
        //estado inicial 
        this.estado = 'Creado';
        this.descripcionEstado = ' ';
    }

    //generador de numero de orden
    private generarNumeroOrden(): number {
        return Math.floor(100000 + Math.random() * 900000);
    }
    //generador de numero de paquete
    private generarNumeroPaquete(): string {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        return Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    }


}
