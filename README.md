## Español ✨

Backend de Gestión de Usuarios con JWT  

Este proyecto es un **backend en Node.js con Express y PostgreSQL** que permite gestionar usuarios mediante **autenticación con JWT**. El sistema ofrece funcionalidades de registro, login y obtención de datos de usuarios autenticados, cumpliendo con buenas prácticas de seguridad y manejo de errores.

### Funcionalidades principales

- **Registro de usuarios (`POST /usuarios`)**  
  - Permite crear nuevos usuarios en la base de datos.  
  - Las contraseñas se encriptan con **bcrypt** antes de guardarlas.  
  - Valida que se proporcionen todas las credenciales necesarias (email, contraseña, rol, lenguaje).  

- **Login de usuarios (`POST /login`)**  
  - Permite iniciar sesión con email y contraseña.  
  - Si las credenciales son correctas, se devuelve un **token JWT** firmado, que incluye el email del usuario en su payload.  

- **Obtención de usuario autenticado (`GET /usuarios`)**  
  - Solo accesible mediante **token JWT** válido en la cabecera `Authorization`.  
  - El token se verifica y decodifica para extraer el email del usuario.  
  - Devuelve los datos del usuario **sin incluir la contraseña**.  

### Middlewares implementados

- Verificación de credenciales en rutas que lo requieren.  
- Validación de token JWT para rutas protegidas.  
- Logging de solicitudes HTTP en la terminal para monitoreo de consultas.  

### Seguridad y buenas prácticas

- Contraseñas encriptadas con **bcrypt**.  
- Tokens JWT firmados con llave secreta.  
- Manejo centralizado de errores para capturar y devolver mensajes claros al cliente.  

---

## English ✨

 User Management Backend with JWT

This project is a **backend built with Node.js, Express, and PostgreSQL** that manages users through **JWT authentication**. It provides functionalities for registration, login, and retrieving authenticated user data, following security best practices and error handling.

### Main Features

- **User Registration (`POST /usuarios`)**  
  - Allows creating new users in the database.  
  - Passwords are encrypted with **bcrypt** before being stored.  
  - Validates that all required credentials are provided (email, password, role, language).  

- **User Login (`POST /login`)**  
  - Allows signing in with email and password.  
  - If credentials are correct, returns a **signed JWT token** containing the user's email in its payload.  

- **Get Authenticated User (`GET /usuarios`)**  
  - Only accessible with a valid **JWT token** in the `Authorization` header.  
  - The token is verified and decoded to extract the user's email.  
  - Returns user data **excluding the password**.  

### Implemented Middlewares

- Credential verification in required routes.  
- JWT token validation for protected routes.  
- Logging HTTP requests in the terminal for monitoring.  

### Security and Best Practices

- Passwords encrypted with **bcrypt**.  
- JWT tokens signed with a secret key.  
- Centralized error handling to capture and return clear messages to the client.  
