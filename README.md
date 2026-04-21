# Evaluación Ionic - Programación III

## Información del Proyecto y Desarrollador

Este proyecto es una evaluación práctica de desarrollo móvil y web utilizando Ionic Framework y Angular.

**Datos del Estudiante:**
- **Universidad:** UNETI
- **Nombre:** Diossmer Villamizar
- **Identificación / Cédula:** 21310567
- **Materia:** PROGRAMACIÓN III MÓDULO II 6Y7

---

## Versiones Utilizadas

El proyecto fue construido utilizando herramientas modernas de desarrollo Frontend:
- **Angular:** Versión 20 (`^20.0.0`)
- **Ionic Framework:** Versión 8 (`@ionic/angular: ^8.0.0`)
- **Capacitor:** Versión 8 (`^8.3.1`)

---

## ¿Por qué usamos Standalone Components?

A partir de Angular 14 (y recomendado fuertemente en versiones recientes como Angular 20), el marco de trabajo introdujo los **Standalone Components**. En este proyecto se utilizan por las siguientes razones:

1. **Simplicidad:** Eliminan la necesidad de declarar componentes, directivas y pipes en archivos `NgModules` (`app.module.ts` o módulos compartidos).
2. **Modularidad:** Cada componente gestiona sus propias importaciones en la propiedad `imports` de su decorador `@Component`. Esto hace que los componentes sean verdaderamente independientes y fáciles de reutilizar.
3. **Rendimiento (Tree Shaking):** Al importar solo lo que el componente necesita de forma directa, el compilador puede optimizar mejor el código final eliminando el código no utilizado.
4. **Curva de aprendizaje:** Reduce la cantidad de conceptos arquitectónicos que un desarrollador debe aprender para empezar a construir aplicaciones.

---

## Flujo de Instalación

Para ejecutar este proyecto en tu entorno local, sigue los pasos a continuación:

1. **Clonar o descargar el repositorio:**
   ```bash
   git clone https://github.com/Diossmer/evaluacionIonic.git
   cd evaluacionIonic
   ```

2. **Instalar dependencias:**
   Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   Para levantar un servidor de prueba y visualizar la app en el navegador:
   ```bash
   ionic serve
   ```

---

## Flujo de Comando

El desarrollo con Ionic y Angular se basa en la CLI (Interfaz de Línea de Comandos). A continuación el flujo general utilizado durante la creación de este proyecto:

1. **Creación del proyecto:**
   ```bash
   ionic start evaluacionIonic blank --type=angular --standalone
   ```
2. **Generación de Páginas:**
   ```bash
   ionic g page pages/inicio
   ionic g page pages/contacto
   ionic g page pages/informacion-personal
   ```
3. **Ejecución y pruebas:**
   ```bash
   ionic serve
   ```
4. **Construcción para producción (Opcional):**
   ```bash
   ionic build
   ```

---

## Flujo de la Aplicación

La aplicación cuenta con una navegación mediante un menú lateral (Sidebar / Menú Hamburguesa) que permite al usuario desplazarse por tres vistas principales:

1. **Inicio:** Es la página de bienvenida donde se introduce al usuario al propósito de la evaluación.
2. **Información Personal (Mi Perfil):** Presenta una biografía del desarrollador (Diossmer Villamizar), destacando habilidades técnicas (Fullstack Angular + Ionic, MongoDB, PostgreSQL) y los datos académicos pertinentes de la UNETI.
3. **Contacto:** Contiene un formulario interactivo que simula el envío de un mensaje. Incluye captura de datos mediante `[(ngModel)]`, un selector de prioridad del mensaje (usando `<ion-range>`) y lógica para visualizar los datos capturados dinámicamente (`<ion-card>` con directiva `*ngIf`).

---

## Flujo de Código dentro del Proyecto (Arquitectura)

Al basarse en componentes Standalone, el flujo del código es directo y centrado en componentes:

- **`src/main.ts`**: Es el punto de entrada principal. Configura los proveedores básicos e inicia la aplicación utilizando `bootstrapApplication`.
- **`src/app/app.component.ts`**: El componente raíz de la aplicación. Aquí es donde suele encontrarse la estructura del menú de navegación (`<ion-menu>`) y el enrutador (`<ion-router-outlet>`).
- **`src/app/app.routes.ts`**: Archivo dedicado al enrutamiento. Define qué componente Standalone cargar en base a la URL ingresada. Soporta *Lazy Loading* (Carga diferida) mediante el uso de `loadComponent`.
- **`src/app/pages/`**: Contiene los componentes de las páginas creadas (`inicio`, `contacto`, `informacion-personal`). Cada página encapsula:
  - **`.html`**: La vista y la maquetación de Ionic.
  - **`.ts`**: La lógica del negocio, las variables de estado y la gestión de importaciones individuales (ej. `IonInput`, `IonButton`, `FormsModule`).
  - **`.scss`**: Estilos específicos del componente.