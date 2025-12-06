# Movie Palace
Este proyecto es mi entrada al Hackathon 2025 de la IEEE ESTl.  
Consiste en una página web que nos permite buscar y ver detalles sobre películas y series, obtenidas de la OMDb.  
Movie Palace fue construida principalmente con React, Tailwind CSS y React Query.

## Instalación
> Es indispensable tener instalado [Node.js](https://nodejs.org/es) (versión 22.12+), un gestor de paquetes (de preferencia [npm](https://www.npmjs.com/)) y [Vite](https://vite.dev/)

Ejecutar lo siguiente en consola:
```
git clone https://github.com/bolilloAguado/movie-palace/
cd movie-palace
npm install
```
> [!IMPORTANT]
Antes de ejecutar el proyecto, es necesario crear antes un archivo `.env` que contenga la `VITE_API_KEY`, la llave a la API de OMDb, en la carpeta raíz.
  
Posteriormente, para su ejecución local:
```
npm run dev
```
## Tecnologías utilizadas
- JavaScript
- HTML 5 y CSS 3
- npm
- Vite 7
- Node.js 24
- React 19, React Paginate y React Query
- Tailwind CSS 4
- Fetch API

## Funcionalidades
- Búsqueda por título
- Paginación sincronizada con la URL
- Manejo de errores con React Query
- Animaciones con Tailwind CSS
- Vista detallada de películas por ID
  
Los componentes pertenecientes a filtros sólo son placeholders para implementación futura de la función de filtros.
## Vista previa
  <img alt="preview" src="./docs/preview.gif" />
