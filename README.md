# Accenture List Task - Ionic To-Do App

Aplicación de tareas (To-Do List) con Ionic y Angular, desarrollada como prueba técnica.

## Características

- **Gestión de tareas**: Crear, editar, eliminar y marcar como completadas
- **Categorías**: Crear, editar y eliminar categorías con colores
- **Filtrado**: Filtrar tareas por categoría
- **Persistencia**: Datos guardados en localStorage

## Requisitos

- Node.js 18+
- Ionic CLI
- Android SDK (para build Android)
- Xcode (para build iOS, solo macOS)

## Instalación

```bash
# Instalar dependencias
npm install
```

## Ejecución

```bash
# Desarrollo (web)
ionic serve

# Android (emulador)
ionic cordova run android

# iOS (emulador, solo macOS)
ionic cordova run ios
```

## Build

```bash
# Build Android APK
ionic cordova build android --release

# Build iOS IPA (solo macOS)
ionic cordova build ios --release
```

## Estructura del Proyecto

```
src/app/
├── models/          # Modelos de datos (Task, Category)
├── services/        # Servicios (TaskService, CategoryService)
├── home/            # Página principal
```

## Firebase

La aplicación está configurada para usar Firebase Remote Config como feature flag. Para configurar:

1. Crear proyecto en [Firebase Console](https://console.firebase.google.com)
2. Agregar app web
3. Habilitar Remote Config
4. Configurar credenciales en `src/environments/`

## Licencia

MIT
