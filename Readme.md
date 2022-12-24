## Como compilar 

1.- Clonar el repositorio.
2.- Abrir una terminal en la ruta del repositorio.
3.- Instalar las dependencias con el comando "npm install"
4.- Ejecutar el comando "npm start" para levantar el servicio.

## Rutas
    Se debe hacer un post a la ruta "localhost:400/"  donde en el body se debe ingresar un json con la siguiente estructura:
    {
        "id": 6,
        "fechaCreacion": "1969-03-01",
        "fechaFin": "1970-01-01",
        "fechasFaltantes": [
        "1969-04-01",
        "1969-06-01",
        "1969-07-01",
        "1969-08-01",
        "1969-10-01",
        "1969-11-01",
        "1969-12-01"]
    }
## Resultado 
    Finalmente la api retornara la lista de las fechas que faltaron de ese JSON.
