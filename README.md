# Práctica Ionic + Angular

## Objetivo General
Desarrollar una aplicación móvil basada en Ionic Framework y Angular que implemente un menú lateral (Side Menu) funcional con tres opciones de navegación ("Inicio", "Información personal" y "Contacto"), aplicando el patrón de diseño Lazy Loading (Carga Perezosa) mediante la arquitectura moderna de Standalone Components.

---

## Flujo de Construcción (Paso a Paso)

### Paso 1: Creación del Proyecto Base
Se inicializó el proyecto utilizando la interfaz de línea de comandos (CLI) de Ionic, seleccionando la plantilla `sidemenu` para tener la estructura del menú lateral preconfigurada.
* **Comando ejecutado:** `ionic start evaluacionIonic sidemenu --type=angular`

### Paso 2: Generación de las Vistas (Páginas)
Se generaron las tres pantallas solicitadas en la evaluación. Al usar la CLI, Ionic crea automáticamente los archivos estructurales (.html, .scss, .page.ts) para cada vista.
* **Comandos ejecutados:** * `ionic g page pages/inicio`
  * `ionic g page pages/informacion-personal`
  * `ionic g page pages/contacto`

### Paso 3: Migración de Rutas (Implementación de Lazy Loading)
Dado que las versiones recientes de Angular utilizan Standalone Components (eliminando la necesidad de archivos `.module.ts`), se reestructuró el archivo principal de rutas.
* **Archivo modificado:** `src/app/app.routes.ts`
* **Acción:** Se eliminaron las rutas generadas por defecto y se configuró un arreglo `routes` exportable. Se utilizó la función `loadComponent` apuntando directamente a los archivos `.page.ts` para garantizar que cada vista solo se cargue en la memoria del dispositivo cuando el usuario haga clic en ella.

### Paso 4: Configuración del Menú Lateral (TypeScript)
Se adaptó el controlador principal de la aplicación para registrar las nuevas rutas y los íconos del menú.
* **Archivo modificado:** `src/app/app.component.ts`
* **Acciones:**
  1. Se importaron explícitamente todos los módulos de interfaz de Ionic (`IonApp`, `IonMenu`, `IonItem`, etc.) en la directiva `imports` del componente Standalone, solucionando los errores de compilación (`NG8001`).
  2. Se actualizó el arreglo `appPages` con los títulos ('Inicio', 'Información personal', 'Contacto'), sus respectivas URLs y los nombres de los íconos.
  3. Se importaron y registraron manualmente los íconos vectoriales mediante `addIcons()` en el constructor para optimizar el peso final de la aplicación.

### Paso 5: Construcción de la Interfaz del Menú (HTML)
Se limpió la plantilla visual generada por el framework para que coincidiera exactamente con los requerimientos visuales del docente.
* **Archivo modificado:** `src/app/app.component.html`
* **Acciones:** Se eliminaron las secciones extra (como la lista de "Labels") y se configuró un ciclo `@for` que itera sobre el arreglo `appPages` para imprimir dinámicamente cada botón del menú (`<ion-item>`) junto con su ícono (`<ion-icon>`) y etiqueta (`<ion-label>`).

### Paso 6: Documentación del Código Fuente (Fase Final)
Para cumplir con los criterios de evaluación (8 puntos de la rúbrica), se procedió a comentar manualmente la lógica de negocio y la estructura HTML en todos los archivos modificados, utilizando terminología propia para demostrar dominio sobre el framework.


## Estructura de Directorios del Proyecto

La aplicación sigue el estándar de organización de Ionic Framework basado en Angular. A continuación, se detalla la estructura principal dentro de la carpeta `src/` (código fuente), que es donde reside toda la lógica de negocio y presentación de nuestra evaluación:

```text
evaluacionIonic/
├── src/
│   ├── app/                        # Directorio principal de la aplicación
│   │   ├── pages/                  # Vistas o pantallas generadas
│   │   │   ├── contacto/           # Carpeta de la vista "Contacto"
│   │   │   │   ├── contacto.page.html   # Estructura visual (Formulario, botones)
│   │   │   │   ├── contacto.page.scss   # Estilos CSS específicos de esta página
│   │   │   │   └── contacto.page.ts     # Controlador lógico (TypeScript)
│   │   │   ├── informacion-personal/
│   │   │   └── inicio/             
│   │   │
│   │   ├── app.component.html      # Plantilla principal (Aquí reside el Menú Lateral / Side Menu)
│   │   ├── app.component.ts        # Controlador principal (Configuración de ítems del menú y registro de íconos)
│   │   └── app.routes.ts           # Archivo de enrutamiento (Implementación de Lazy Loading)
│   │
│   ├── assets/                     # Directorio para recursos estáticos (imágenes, logos, fuentes locales)
│   ├── theme/                      
│   │   └── variables.scss          # Variables CSS globales (colores primarios, secundarios, modo oscuro)
│   ├── global.scss                 # Estilos globales que aplican a toda la aplicación
│   └── main.ts                     # Archivo de arranque (Bootstrap) de la aplicación
│
├── angular.json                    # Archivo de configuración del compilador de Angular
├── ionic.config.json               # Archivo de configuración de Ionic CLI
└── package.json                    # Dependencias del proyecto (librerías instaladas vía npm)
```

### Descripción de los Componentes Clave:

* La carpeta `pages/`: Contiene los módulos independientes de nuestra interfaz. Ionic separa inteligentemente la estructura (.html), el diseño (.scss) y el comportamiento (.ts) para mantener un código escalable y ordenado.

* `app.component (HTML y TS)`: Actúa como el "esqueleto" de la aplicación. Al utilizar la plantilla sidemenu, este componente alberga el <ion-menu> que envuelve y controla el acceso al resto de las páginas.

* `app.routes.ts`: Es el "mapa" de la aplicación. Gracias a la directiva loadComponent, este archivo gestiona la carga perezosa (Lazy Loading), asegurando que la aplicación no descargue el código de la vista "Contacto" si el usuario solo está navegando en la vista "Inicio". Esto optimiza drásticamente el rendimiento de la memoria.