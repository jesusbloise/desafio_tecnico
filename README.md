# Dashboard con Next.js 12 + React 18 + Material UI + React Query# 📊 Desafío Frontend - Dashboard Interactivo

Este proyecto es una implementación completa del dashboard solicitado en el [Desafío Frontend](https://www.figma.com/file/DYVhRceKMd5TiSSXveLhxw/Desaf%C3%ADo-Frontend?type=design&node-id=0%3A1&mode=design&t=k5zi6Eub663yqRJC-1), desarrollado usando **Next.js 12**, **React 18**, **Material UI**, **React Query**, **Jest**, y **Cypress**.

---

## 🚀 Tecnologías utilizadas

- ⚛️ React JS 18
- 🔥 Next.js 12
- 🎨 Material UI 5
- ⚙️ React Query para manejo de datos
- 📈 Google Analytics para trackeo de eventos
- 🧪 Jest para tests unitarios
- 🌐 Cypress para pruebas E2E

---

## 💡 Características principales

- Reproducción fiel del diseño en Figma
- Componentes reutilizables y responsivos
- Filtros interactivos y gráficos dinámicos
- Exportación de tabla a CSV
- Alternancia entre modo **Gráfico** y modo **Pulso**
- Accesibilidad y semántica HTML mediante Material UI

---

## 🔍 Trackeo con Google Analytics

Se implementó Google Analytics para registrar actividad del usuario:

- Cambio de modo (Gráfico / Pulso)
- Cambio de filtros de fecha
- Click en Exportar tabla

Puedes modificar el ID de seguimiento en el archivo: `pages/_document.js`

```js
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" />
```

---

## 🧱 Estructura del proyecto

```
components/        // Todos los componentes del dashboard
pages/api/         // Datos locales simulando una API
pages/             // Rutas y páginas de Next.js
__tests__/         // Pruebas unitarias con Jest
cypress/           // Tests end-to-end
```

---

## 🛠 Instalación y ejecución local

```bash
# 1. Instala dependencias
npm install

# 2. Inicia el servidor
npm run dev

# Accede en: http://localhost:3000
```

---

## 🧪 Ejecutar pruebas

### Unitarias con Jest
```bash
npm run test
```

### End-to-End con Cypress
```bash
npm run dev  # en una terminal
npm run cypress  # en otra terminal
```

---

## 📁 Datos locales generados

Los datos fueron creados manualmente y cubren todos los casos diseñados en el dashboard:
- `/api/chart.js`
- `/api/weeklySummary.js`

---

## ✅ Requisitos cumplidos

- [x] Figma replicado fielmente
- [x] Responsivo para escritorio, tablet y móvil
- [x] Trackeo con Google Analytics
- [x] Data local fija integrada con React Query
- [x] Accesible y semántico (Material UI)
- [x] Testeado con Jest y Cypress

---

## ✨ Autor

Diseñado y desarrollado por **Jesus Bloise** ✨

> Desarrollador Frontend: Desafío Técnico puntospoint
#   d e s a f i o _ t e c n i c o  
 