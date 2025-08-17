# Dashboard Administrativo

## Propósito
 Este dashboard administrativo fue creado como parte de una tarea para la clase de Diseño Web.El propósito es demostrar el diseño y la implementación de un dashboard administrativo moderno, aplicar conceptos de estructura semántica HTML, diseño responsivo, accesibilidad y visualización de datos con gráficos.

## Descripción

Este dashboard es una simulación de un sistema administrativo para gestión de inventario y usuarios. Su propósito es mostrar cómo se estructura y se diseña una interfaz web moderna y accesible, aplicando técnicas aprendidas en clase como CSS Grid, responsividad, accesibilidad y buenas prácticas de desarrollo.

## Caracteristicas

- **index.html:** Página principal con resumen de ventas, inventario y usuarios, incluyendo un gráfico visual y tablas.
- **inventarios.html:** Listado completo de productos en inventario, categorías, cantidades y estado.
- **usuarios.html:** Listado de usuarios del sistema, incluyendo clientes y empresas.
- **styles.css:** Hoja de estilos principal, con comentarios explicativos sobre el uso de CSS Grid, media queries, hover, focus y roles ARIA para accesibilidad.
- **chart.js:** Script para generar el gráfico de barras dinámico en la página principal.

## Estructura del proyecto

```
├── index.html                # Página principal
├── inventarios.html          # Página individual: inventario de productos
├── usuarios.html                # Página individual: Lista de usuarios
├── README.md                 # Este archivo
├── assets/
|   ├── style.css             # Archivo con los estilos CSS
│   ├── chart.js              # Archivo JavaScript para gráficos
│   ├── icons/
│   |   ├── inventario.png
│   |   ├── resumen.png
│   |   ├── usuarios.png
│   ├── images/
│   |   ├── logo.png
│   |   ├── user.png
```

## Importante

> **Todos los nombres, correos electrónicos, empresas y datos utilizados son totalmente ficticios y solo tienen fines educativos y demostrativos.**

## Semántica y accesibilidad

- Se utilizaron etiquetas semánticas como `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<ul>`, `<li>`, `<h1>`–`<h2>`, para estructurar la información correctamente.
- El atributo `lang="es"` en la etiqueta `<html>` indica el idioma principal del sitio, ayudando a los lectores de pantalla y motores de búsqueda. 
- Se incluyeron atributos `alt` en todas las imágenes para usuarios con lectores de pantalla.
- Los enlaces (`<a>`) son descriptivos y permiten regresar fácilmente al menú.
- La navegación puede hacerse con teclado (usando `Tab`) gracias a elementos enfocados correctamente.
- Se agregó soporte visual de `:focus` en los estilos para mejorar la experiencia con teclado.
- Los colores y el tamaño de fuente dan buen contraste y legibilidad para personas con baja visión.
- El diseño responsive y el uso de bloques grandes y centrados se adapta dispositivos móviles y la navegación táctil.

## Cómo ver la página

1. Descarga el proyecto (o clónalo desde GitHub).
2. Abre el archivo `index.html` con tu navegador.
3. Navega entre las páginas usando los enlaces disponibles.

## Autor

Valeria Hernández Vargas  
Clase: Diseño Web – Universidad  
Año: 2025

---

**Este proyecto no representa ningún sistema real ni utiliza información verídica.**
