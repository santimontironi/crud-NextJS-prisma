# 📝 CRUD de Tareas con Autenticación

Una aplicación web completa de **gestión de tareas con autenticación**, desarrollada con **Next.js (App Router)**, **Prisma ORM**, **NextAuth.js** y **TailwindCSS**.
El proyecto está pensado como una implementación **realista y escalable**, aplicando buenas prácticas del ecosistema moderno de Next.js.

---

## 🎯 Objetivo del Proyecto

El objetivo principal de esta aplicación no fue solo crear un CRUD, sino **aprender y consolidar conceptos clave** del desarrollo Full Stack moderno con Next.js:

* Autenticación robusta y segura
* Manejo de sesiones, cookies y JWT
* Separación correcta entre Server Components y Client Components
* Arquitectura clara y mantenible
* Uso profesional de Prisma como ORM

---

## ✨ Características Principales

### 🔐 Autenticación y Seguridad

* Registro de usuarios con validaciones
* Login con credenciales (email y contraseña)
* Contraseñas hasheadas con **bcrypt**
* Autenticación con **NextAuth.js**
* Uso de **JWT** para manejo de sesión
* Cookies **HTTP-only** para mayor seguridad
* Protección de rutas privadas mediante **middleware**
* Cierre de sesión (logout) con limpieza completa de sesión

---

### 📋 Gestión de Tareas (CRUD)

Cada usuario gestiona **únicamente sus propias tareas**:

* ➕ Crear nuevas tareas
* 📄 Listar tareas asociadas al usuario autenticado
* ✏️ Editar tareas existentes
* 🗑️ Eliminar tareas
* ⚡ Actualizaciones en tiempo real de la UI

---

### 🎨 Interfaz de Usuario

* Diseño moderno con **TailwindCSS**
* Enfoque **mobile-first** y totalmente responsivo
* Feedback visual mediante **Sonner (toasts)**
* Estados de carga (loading) con **React Spinners**
* Formularios controlados con **React Hook Form**
* Animaciones y transiciones suaves para mejor UX

---

## 🧱 Arquitectura del Proyecto

* **App Router (Next.js 15)**
* Server Components para lógica de datos
* Client Components solo cuando es necesario (formularios, interacciones)
* API Routes para endpoints REST
* Prisma como capa de acceso a datos
* Separación clara entre:

  * UI
  * Lógica de negocio
  * Persistencia de datos

---

## 🛠️ Tecnologías Utilizadas

### 🖥️ Frontend

* **Next.js 15** – Framework React con SSR y SSG
* **React 19.2** – Biblioteca de UI
* **TailwindCSS 4.0** – Framework CSS utility-first
* **React Hook Form** – Manejo de formularios
* **Sonner** – Sistema de notificaciones
* **React Spinners** – Indicadores de carga

---

### ⚙️ Backend

* **Next.js API Routes** – Endpoints RESTful
* **Prisma 7.2** – ORM para Node.js
* **PostgreSQL** – Base de datos relacional
* **NextAuth.js** – Autenticación y manejo de sesiones
* **bcrypt** – Hash de contraseñas
* **jwt** – Manejo de JWT

---

### 🧰 Herramientas y Servicios

* **ESLint** – Linter de código
* **Supabase** – Hosting de base de datos PostgreSQL
* **Vercel** – Deployment y hosting

---

## 🚀 Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Ejecutar migraciones de Prisma
npx prisma migrate dev

# Iniciar entorno de desarrollo
npm run dev
```

---

## 🔐 Variables de Entorno

```env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="tu_secret"
NEXTAUTH_URL="http://localhost:3000"
```

---

## 📚 Aprendizajes Clave

* Uso correcto de **NextAuth callbacks**
* Diferencias reales entre Server y Client Components
* Seguridad en autenticación web
* Modelado de datos con Prisma
* Buenas prácticas en proyectos Next.js reales

---

## 📌 Estado del Proyecto

✅ Funcional y completo
🚧 Abierto a mejoras futuras (roles, tags, prioridades, etc.)

---

## 👨‍💻 Autor

Desarrollado por **Santiago Montironi**
💼 Full Stack Developer

---

## ⭐ Feedback

Si te gustó el proyecto o te sirvió como referencia, ¡no olvides dejar una estrella ⭐ en el repositorio!
