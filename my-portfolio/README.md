# Portafolio Interactivo Estilo Windows 11

¡Bienvenido a mi portafolio interactivo, diseñado para simular la experiencia de usuario de Windows 11! Este proyecto no es solo una colección de mis trabajos, sino una inmersión en un entorno familiar y dinámico, donde cada elemento interactúa como en un sistema operativo real.

## Características Principales

*   **Interfaz de Usuario de Windows 11:** Escritorio, barra de tareas, menú de inicio, ventanas, íconos y animaciones que replican fielmente el diseño de Windows 11.
*   **Fondo de Pantalla Dinámico:** El fondo de pantalla cambia automáticamente cada 30 segundos, ofreciendo una experiencia visual fresca y atractiva.
*   **Íconos del Escritorio Interactivos:**
    *   📂 **"Este equipo / Mi PC"**: Abre una ventana con "Discos" (C:, D:, E:), donde cada disco organiza diferentes categorías de proyectos.
    *   🗑️ **"Papelera de reciclaje"**: Funcionalidad para "eliminar" proyectos y gestionarlos desde aquí.
    *   ⚙️ **"Configuración"**: Un acceso directo a futuras configuraciones o información del portafolio.
    *   **Accesos Directos a Proyectos/Apps**: Íconos personalizables para lanzar directamente tus proyectos o aplicaciones destacadas.
*   **Explorador de Archivos Funcional:** Navega por tus proyectos organizados en discos virtuales (C:, D:, E:). Cada carpeta de proyecto abre una ventana con su descripción, imágenes y enlaces a GitHub/Demo.
*   **Barra de Tareas Realista:**
    *   **Botón de Inicio:** Con animación de apertura y cierre del menú de inicio.
    *   **Barra de Búsqueda:** Un campo interactivo para buscar proyectos o aplicaciones.
    *   **Íconos Anclados:** Acceso rápido a aplicaciones clave como Edge/Chrome, VSCode, Explorador y Configuración.
    *   **Bandeja del Sistema:** Muestra la red, batería, volumen y un reloj en tiempo real.
*   **Menú de Inicio Interactivo:** Similar al de Windows 11, con secciones de "Fijado" y "Recomendado" que muestran tus proyectos como aplicaciones instaladas.
*   **Ventanas Completamente Interactivas:**
    *   Abrir, cerrar, minimizar y maximizar con animaciones suaves.
    *   Soporte de **Drag & Drop** para mover ventanas por el escritorio.
    *   Mantenimiento del estado de cada ventana (abierta, minimizada, maximizada).
    *   **Soporte Multiventana:** Abre varias ventanas a la vez, que se superponen como en un sistema operativo real.

## Tecnologías Utilizadas

*   **Next.js:** Framework de React para el desarrollo de aplicaciones web con renderizado del lado del servidor y generación de sitios estáticos.
*   **React:** Librería de JavaScript para construir interfaces de usuario interactivas.
*   **Tailwind CSS:** Framework CSS de utilidad para un estilizado rápido y personalizable.
*   **Framer Motion:** Librería para animaciones fluidas y de alto rendimiento.
*   **Zustand:** Una solución de gestión de estado ligera y rápida para React.
*   **react-rnd / react-draggable:** Librerías para la funcionalidad de arrastrar y redimensionar ventanas.

## Cómo Ejecutar el Proyecto Localmente

Sigue estos pasos para tener una copia local del proyecto en funcionamiento:

1.  **Clonar el repositorio:**
    ```bash
    git clone [URL_DE_TU_REPOSITORIO]
    cd my-portfolio
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

4.  **Compilar para producción:**
    ```bash
    npm run build
    ```
    Los archivos compilados se encontrarán en la carpeta `.next`.

## Despliegue

Este proyecto está configurado para ser desplegado fácilmente en plataformas como [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/), que ofrecen integración directa con repositorios de GitHub.

---

¡Espero que disfrutes explorando este portafolio interactivo!
