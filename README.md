<<<<<<< HEAD
# Koltin prueba técnica desarrolador frontend

## Índice

* [1. Koltin-Empresa](#1-Koltin-Empresa)
* [2. Requisitos prueba técnica desarrollador frontend](#2-Requisitos-prueba-técnica-desarrollador-frontend)
* [3. Desarrollo de la prueba técnica](#3-Desarrollo-de-la-prueba-técnica)
* [4. Conclusión](#4-Conclusión)


***
## 1. Koltin-Empresa

El presente proyecto a sido realizado para llevar a cabo una prueba técnica para la empres Koltin.

Koltin es una empresa cuya misión es : 

"Promover un estilo de vida saludable, devolverle la dignidad a la vejez. Nosotros creemos que las personas son más que números y evaluaciones de riesgos.
Buscamos entender más a las grandes personas y darles las herramientas para vivir una vida más completa y enriquecedora."

Página web https://www.koltin.mx/

## 2. Requisitos prueba técnica desarrollador frontend

Utilice este archivo Figma para ver los estados de los botones, los colores y el diseño responsivo. Debe asegurarse de completar la prueba para imitar el diseño como se ve.

![Figma1](src/assets/FigmaKoltin1.png)
![Figma2](src/assets/FigmaKoltin2.png)
![Figma3](src/assets/FigmaKoltin3.png)

La página de Post individual se deja para que el dev la diseñe y desarrolle.

Koltin Blog API
Para listar los Blogs tienes que usar los access point de la API

Base URL https://6328f6acd2c97d8c525f8f80.mockapi.io/api/v1/


Metodo	Url	Código	Respuesta
GET	/blogs	200	Array
GET	/blogs/:id	200	Blog


PAGINATION
Agregar los siguientes parametros en la peticiones GET:

/blogs?page=1&limit=10
/blogs?p=1&l=10
Funcionalidad
Listar los blogs paginados, 5 post por página
Al dar click en la imagen del listado de blog, se tiene que mostrar el contenido del post individual
Tech Stack
ReactJS, VueJS, Vanilla Javascript
CSS
Bonus
Que la maqueta sea responsiva
Describir en un readme como ejecutar el proyecto
Mostrar demo online del proyecto
Escribir mensajes de commit claros y concisos


### 3. Desarrollo de la prueba técnica

La prueba la lleve a cabo con React, durante el Bootcamp de Laboratoria desarrolle 1 proyecto con dicha tecnología, lo cual me permitió desarrollar el presente reto.

Para la parte de maquetación use siguientes tecnologías:

CSS
REACT JS

Para la parte de la funcionalidad usé el método GET con REACT para poder obtener y "pintar" la información compartida en el access point de la API

Base URL https://6328f6acd2c97d8c525f8f80.mockapi.io/api/v1/

A continuación muestro el resultado final de la presente prueba

![Desarrollo1](src/assets/DesarrolloKoltin1.png)
![Desarrollo2](src/assets/DesarrolloKoltin2.png)
![Desarrollo3](src/assets/DesarrolloKoltin3.png)
![Desarrollo4](src/assets/DesarrolloKoltin4.png)
![Desarrollo5](src/assets/DesarrolloKoltin5.png)

### 4. Conclusión
Agradezco la oportunidad por presentar dicha prueba, fue un proyecto lleno de aprendizajes.

Gracias.

Liliana Hdez Castelán
=======
# Koltin - Prueba de técnica desarrollador frontend

El tiempo de entrega para la prueba es de **2 días**

Asegúrese de leer **todo** este documento con atención y siga las directrices que contiene.

Los aspectos que se evaluarán en la prueba son los siguientes.

* Calidad en el código.
* Creatividad.
* Dominio de las tecnologías que decidan utilizar.
* Atención al detalle.

## Contexto

Utiliza **React** o **VueJS** para implementar la siguiente maqueta. Solo se requiere que completes las vistas de escritorio, a menos que se indique lo contrario.

Utilice este archivo Figma para ver los estados de los botones, los colores y el diseño responsivo.  Debe asegurarse de completar la prueba para imitar el diseño como se ve.

> [Archivo Figma](https://www.figma.com/file/2FkX7OHtR2xTxa78Vee6L4/%F0%9F%8C%8E-Koltin-Blog%2C-Test?node-id=118%3A1909)

La página de **Post** individual se deja para que el dev la diseñe y desarrolle.

## Requerimientos

### Koltin Blog API

Para listar los Blogs tienes que usar los access point de la API

**Base URL**  `https://6328f6acd2c97d8c525f8f80.mockapi.io/api/v1/`


| Metodo | Url    | Código | Respuesta   |
|--------|--------|--------|-------------|
| GET    | /blogs | 200    | Array<Blog> |
| GET    | /blogs/:id|200  |Blog             |

### PAGINATION

Agregar los siguientes parametros en la peticiones **GET**:

* `/blogs?page=1&limit=10`
* `/blogs?p=1&l=10`

### Funcionalidad

- Listar los blogs paginados, 5 post por página
- Al dar click en la imagen del listado de blog, se tiene que mostrar el contenido del post individual

###  Tech Stack

* ReactJS, VueJS, Vanilla Javascript
* CSS

### Bonus

* Que la maqueta sea responsiva
* Describir en un readme como ejecutar el proyecto
* Mostrar demo online del proyecto
* Escribir mensajes de **commit** claros y concisos

## Q&A

> ¿Dónde debo enviar el resultado cuando haya terminado?

Haz un fork de este repo y envíanos un pull request cuando creas que has terminado.

> ¿Y si tengo una pregunta?

Sólo tienes que crear un **Issue**  en este repositorio y te responderemos rápidamente.


>>>>>>> 2b4da455ccd4c43956eb48ccc98ef3c310fcd030
