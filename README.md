# Film Palace
Este proyecto es mi entrada al Hackathon 2025 de la IEEE ESTl.  
Consiste en una página web que nos permite buscar y ver detalles sobre películas y series, obtenidas de la [OMDb](https://www.omdbapi.com/).  
Film Palace fue construida principalmente con React, Tailwind CSS y React Query.

## Instalación
> Es indispensable tener instalado [Node.js](https://nodejs.org/es) (versión 22.12+), un gestor de paquetes (de preferencia [npm](https://www.npmjs.com/)) y [Vite](https://vite.dev/)

Ejecutar lo siguiente en consola:
```
git clone https://github.com/bolilloAguado/film-palace/
cd film-palace
npm install
```
> [!IMPORTANT]
Antes de ejecutar el proyecto de manera local, es necesario ya sea, crear un archivo `.env` en la carpeta raíz del proyecto, o modificar el archivo `.env.example`, con la `VITE_API_KEY` obtenida previamente en https://www.omdbapi.com/.

Posteriormente, para su ejecución local:
```
npm run dev
```
## Tecnologías utilizadas
- HTML 5 y CSS 3
- npm
- Vite 7
- Node.js 24
- React 19, React Paginate y React Query
- Tailwind CSS 4
- Fetch API
- BoxIcons
- Google Fonts
- Vercel (para la demo)

## Funcionalidades
- Búsqueda por título
- Paginación sincronizada con la URL
- Manejo de errores con React Query
- Animaciones con Tailwind CSS
- Vista detallada de películas por ID
  
Los componentes pertenecientes a filtros sólo son placeholders para implementación futura de la función de filtros.
## Vista previa
<img alt="preview" src="./docs/preview.gif" />

## Demo en vivo  
Puedes ver una demo de Film Palace aquí: https://film-palace.vercel.app/


