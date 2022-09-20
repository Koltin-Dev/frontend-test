# Koltin - Prueba de técnica desarrollador frontend

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

Haz un fork de este repo y envíanos un pull request cuando creas que has terminado. No hay una fecha límite para esta tarea a menos que se le indique  lo contrario.

> ¿Y si tengo una pregunta?

Sólo tienes que crear un **Issue**  en este repositorio y te responderemos rápidamente.


