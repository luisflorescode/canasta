# Canasta App

Ejercicio para frontend de Canasta Rosa.

La aplicación desplegada se puede visitar en el siguiente enlace: [https://canasta-rosa.vercel.app](https://canasta-rosa.vercel.app/)

## Paquetes y bibliotecas utilizadas

- [React](https://es.reactjs.org/) - Utilizado para la creación de las vistas y el manejo de estados mediante hooks.
- [Create React App](https://create-react-app.dev/) - Se utilizó para crear la configuración del ambiente de desarrollo.
- [React Router](https://reactrouter.com/) - Biblioteca utilizada para el manejo de rutas como SPA.
- [PropTypes](https://www.npmjs.com/package/prop-types) Utilizado para comprobar el tipado de las props.
- [Node SASS](https://github.com/sass/node-sass) - Paquete utilizado para soportar SASS como pre-procesador de CSS en la creación de estilos.

## Variables de entorno

Las variable de entorno tendrán que ser declaras en un archivo .env.
Como referencia se puede tomar el archivo .env.example que contiene los nombres de las variables de entorno, las cuales son las siguientes:

- **REACT_APP_API:** Contiene la url del API.
- **REACT_APP_CORS_PROXY:** Es una variable opcional en que se puede agregar un proxy para evitar las restricciones CORS. No es necesaria si la aplicación se despliega desde un origen permitido. En mi caso la url del proxy que utilice es **https://cors-anywhere.herokuapp.com/**

## Instalación

Comando para instalar las dependencias necesarias del proyecto.

```
npm install
```

## Correar aplicación en ambiente de desarrollo

```
npm run start
```

## Construir para aplicación de producción

Crea la aplicación para producción en el directorio "build".

```
npm run build
```

## Autor

Aplicación desarrollada por [Luis Flores Álvarez](https://luisfloresdev.com)
