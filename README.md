# Aplicación de Portafolio Personal

## Descripción General
Esta es una aplicación web moderna construida con Angular que funciona como un sitio web de portafolio personal. La aplicación muestra proyectos, información personal y experiencia profesional de manera interactiva y responsiva.

## Características

### Página de Inicio
- Sección hero con mensaje de bienvenida a pantalla completa
- Sección de características destacando tres capacidades principales:
  - Fácil de Usar
  - Seguridad
  - Alta Velocidad
- Sección de testimonios con carrusel interactivo

### Sección de Portafolio
- Exhibición interactiva de proyectos usando Swiper.js
- Tarjetas de proyectos con:
  - Título del proyecto
  - Descripción
  - Tecnologías utilizadas (lenguajes y frameworks)
  - Enlaces a GitHub
  - Efectos hover con información adicional
- Diseño responsivo para diferentes tamaños de pantalla

## Stack Tecnológico

### Tecnologías Principales
- Angular (Última Versión)
- TypeScript
- HTML5
- CSS3

### Dependencias Principales
- Bootstrap 5.3.3
- Swiper.js para carruseles
- Bootstrap Icons
- Angular Material (tema Indigo-Pink)

### Estructura del Proyecto
  src/
  ├── app/
  │   ├── components/
  │   │   ├── homePage/
  │   │   └── portfolio/
  │   ├── app.component
  │   ├── app.config
  │   └── app.routes
  ├── assets/
  └── styles.css


## Implementación de Características

### Diseño Responsivo
- Enfoque mobile-first
- Puntos de quiebre en:
  - 768px para tablets
  - 480px para dispositivos móviles
- Sistema de rejilla flexible usando Bootstrap

### Elementos Interactivos
- Integración de carrusel Swiper
- Efectos hover en tarjetas de proyectos
- Transiciones y animaciones suaves
- Carga dinámica de contenido

### Renderizado del Lado del Servidor
- Implementa Angular Universal para SSR
- Configuración del servidor Express.js
- Optimizado para rendimiento y SEO

## Proyectos Mostrados
La sección de portafolio muestra varios proyectos incluyendo:
- Access Siska Movil (React Native)
- Access Siska Web (React)
- Cocktail App (Laravel)
- Test Quality Assurance (React, Nx, Jest)
- Kabod Style Ecommerce (React)

## Contenido de la Página de Inicio
La página principal presenta:
- Imagen hero a pantalla completa con mensaje de bienvenida
- Sección de características principales con iconos ilustrativos:
  - Sección "Fácil de Usar" con estrella
  - Sección "Seguridad" con candado
  - Sección "Alta Velocidad" con marca de verificación
- Carrusel de testimonios que incluye:
  - Testimonio de Juan Pérez
  - Testimonio de María López
  - Testimonio de Carlos Gómez

## Comenzando
### Prerrequisitos
- Node.js
- Angular CLI

### Instalación
1. Clonar el repositorio
2. Instalar dependencias:
```bash
npm install
```
3. Ejecutar el servidor de desarrollo (puedes usar cualquiera de estos comandos):
```bash
ng serve
npm run start
```

## Servidor de Desarrollo
El servidor se ejecuta en localhost:4200.
## Autor
Santiago Orjuela Vera

- Portafolio que muestra varios proyectos de desarrollo full-stack
- Pagina de simulacion de pagina de inicio