# API Tienda 2026 DPS Guia9

![API Tienda](https://miro.medium.com/v2/resize:fit:760/1*0dsEjVQIgGGyvhoUtiqx-g.png)

## Descripción
Este proyecto es una API RESTful para la gestión de usuarios en una tienda, desarrollada como parte de la Guía 9 de la materia Desarrollo de Proyectos de Software (DPS) 2026. Permite realizar operaciones CRUD sobre usuarios y está pensada para integrarse con una base de datos MySQL.

## Tecnologías utilizadas
- **Node.js** y **Express.js**
- **XAMPP** (para el entorno de servidor y base de datos)
- **MySQL** (gestión de base de datos)
- **Postman** (para pruebas de endpoints)
- **npm packages:**
  - express
  - mysql2
  - nodemon
  - dotenv

## Instalación y ejecución
1. **Clona el repositorio o descarga el código fuente.**
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Configura la base de datos MySQL:**
   - Usa XAMPP para iniciar el servidor MySQL.
   - Crea la base de datos y las tablas necesarias según el modelo.
   - Configura los datos de conexión en `src/config/database.config.js`.
4. **Ejecuta el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## Autor
**Emerson Fabricio Arévalo González**  
**Carnet: AG250495**
