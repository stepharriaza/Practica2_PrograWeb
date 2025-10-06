import { Routes } from '@angular/router';
//Rutas
import { OrdenesRegistry } from './ordenes-registry/ordenes-registry';
import { OrdenesUpdate } from './ordenes-update/ordenes-update';
import { PackageSeguimiento } from './package-seguimiento/package-seguimiento';
import { OrdenesList } from './ordenes-list/ordenes-list';


export const routes: Routes = [
    { path: 'ordenes-registry', component: OrdenesRegistry},
    { path: 'ordenes-update', component: OrdenesUpdate},
    { path: 'package-seguimiento', component: PackageSeguimiento},
    { path: 'ordenes-list', component:  OrdenesList}
];
