# backend-todos-app
Backend de la todo-app para devactory

Deploy: https://still-springs-69547.herokuapp.com

Es una API abierta, por lo cual cualquiera puede acceder a sus endpoints

Local:

-Clonar el repositorio

-Usar el comando "npm install" para instalar las dependencias necesarias

-Al usar una base de datos en la nube(Mongo DB Atlas), es necesario crear el archivo "vars.env" y como variable de entorno colocar "MONGO_DB = {{link de conexión a la BD}}"

-Finalmente usar "npm start" para correr la app de forma local


//ENDPOINTS

get /api/todos  - obtener todas las to-dos

post /api/todos  - publicar una nueva todo

delete /api/todos  - eliminar todas las to-dos

delete /api/todos/:todoID - eliminar una todo en específico

put /api/todos/:todoID  - modificar una to-do

put /api/todos/toggle-todo/:todoID  - cambiar el estado (terminado/pendiente) de una to-do
