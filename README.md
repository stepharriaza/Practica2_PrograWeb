# Practica 2 - AngularJS - Programación Web

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.
Este proyecto busca inplementar la lógica de las aplicaciones de paquetería, por lo que permite realizar registros de paquetes de envío y darles seguimiento a través de esta misma página. 

## Inicio del Proyecto
Para iniciar el proyecto es necesario ejecutar el comando:
```bash
ng serve
```
Una vez iniciado el proyecto, se debe de abrir el navegador y dirigirse a `http://localhost:4200/`. La aplicación estará recarcandose de forma automática según sean las modificaciones que se vayan realizando en los archivos del proyecto. Realizadas estas dos acciones ya se puede navegar en el proyecto. 

## Codigo scaffolding

Angular incluye distintas herramientas scaffolding tools que automatiza la estructura básica de un proyecto creando carpetas, código y otros componentes. Para crear un componente se debe ejecutar lo siguiente :

```bash
ng generate component component-name
```
Así se puede acceder a una lista completa de los esquemas disponibles. Para conocer los distintos componentes con los que cuenta Angular se debe ejecutar el siguiente comando: 

```bash
ng generate --help
```

## Páginas 

El proyecto contiene distintas páginas con en las que se pueden navegar e interactuar. 
- Registro de Ordenes: permite crear nuevas ordenes. 
- Actualización de Ordenes: realiza actualizaciones del estado de una orden y guarda la información de esta misma.
- Seguimiento de Paquetes: permite visualizar el historial del estado de un paquete. 