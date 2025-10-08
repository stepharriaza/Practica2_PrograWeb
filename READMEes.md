# Practica 2 - AngularJS - Programación Web

Este proyecto busca inplementar la lógica de las aplicaciones de paquetería, por lo que permite realizar registros de paquetes de envío y darles seguimiento a través de esta misma página. 

## Instalación de AngularJS
Para crear un proyecto en formato AngularJS se debe ejecutar el comando: 
```bash
ng new nombre_del_proyecto
```
Este creara el proyecto en el cual se irán implementando los distindos códigos que se encuentran en el repositorio.

## Descarga del Proyecto 
El proyecto se debe de descargar desde Github y los archivos deben irse agregando dentro de la carpeta src.

Angular incluye distintas herramientas scaffolding que automatiza la estructura básica de un proyecto creando carpetas, código y otros componentes. Para crear un componente se debe ejecutar lo siguiente :

```bash
ng generate component component-name
```
Así se puede acceder a una lista completa de los esquemas disponibles. Para conocer los distintos componentes con los que cuenta Angular se debe ejecutar el siguiente comando: 

```bash
ng generate --help
```

## Inicio del Proyecto
Para iniciar el proyecto es necesario ejecutar el comando:
```bash
ng serve
```
Una vez iniciado el proyecto, se debe de abrir el navegador y dirigirse a `http://localhost:4200/`. La aplicación estará recarcandose de forma automática según sean las modificaciones que se vayan realizando en los archivos del proyecto. Realizadas estas dos acciones ya se puede navegar en el proyecto. 

## Uso 

El proyecto contiene distintas páginas con en las que se pueden navegar e interactuar. 
- Registro de Ordenes: permite crear nuevas ordenes. 
- Actualización de Ordenes: realiza actualizaciones del estado de una orden y guarda la información de esta misma.
- Seguimiento de Paquetes: permite visualizar el historial del estado de un paquete. 