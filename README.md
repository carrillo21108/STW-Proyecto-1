# STW-Proyecto-1
Replica de la página principal del sitio Web de [Riot Games](https://www.riotgames.com/es)
## Tecnologías utilizadas
- Webpack: herramienta de construcción de módulos en JavaScript que se utiliza para empacar y transformar los assets de un proyecto.
- React: biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y reutilizables.
- Babel: herramienta de transpilación de JavaScript que permite escribir código en la última versión del lenguaje y convertirlo en una versión compatible con navegadores y entornos más antiguos.
- npm: administrador de paquetes por defecto para entornos de desarrollo basados en Node.js
- scss: preprocesador de CSS que extiende la funcionalidad del lenguaje permitiendo el uso de variables, anidamiento de selectores, mixins, etc.
## Comandos
Instalar las dependencias del proyecto
```sh
npm install
```
Al momento de desarrollar, generar un servidor de desarrollo en el entorno webpack
```sh
npm run start
```
Generar la carpeta dist_react publicada en el siguiente [enlace](https://stw-proyecto-1.web.app)
```sh
npm run start-webpack
```
## Estructura
### src
- App.js
- App.scss
- index.js
- index.scss
- [components](#components)

### public
- index.html
- [img](#img)
- [video](#video)

## components
### Careers
Componente sobre la sección de trabajo
- Careers.js
- Careers.scss
### Entertaiment
Componente sobre la sección de productos de entretenimiento
- Entertaiment.js
- Entertaiment.scss
### Esports
Componente sobre la sección de noticias de esports
- Esports.js
- Esports.scss
### GameCard
Componente tipo carta utilizado en todas las secciones
- GameCard.js
- GameCard.scss
### Games
Componente sobre la sección de videojuegos
- Games.js
- Games.scss
### MiniTarget
Componente tipo carta utilizado en la seccion de Temas
- MiniTarget.js
- MiniTarget.scss
### News
Componente sobre la sección de noticias inicial
- News.js
- News.scss
### RiotForge
Componente sobre la sección de Riot Forge
- RiotForge.js
- RiotForge.scss
### Topicality
Componente sobre la sección de Temas
- Topicality.js
- Topicality.scss
## img
Carpeta de imagenes
## video
Carpeta de video
