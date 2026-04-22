# Accenture List Task - Ionic To-Do App

Aplicación de tareas (To-Do List) con Ionic y Angular, desarrollada como prueba técnica para Accenture.

## Características

- **Gestión de tareas**: Crear, editar, eliminar y marcar como completadas
- **Categorías**: Crear, editar y eliminar categorías con colores personalizados
- **Filtrado**: Filtrar tareas por categoría (modal scrolleable para 100+ categorías)
- **Diseño mobile-first**: Optimizado para dispositivos móviles
- **Persistencia**: Datos guardados en localStorage

## Requisitos del Entorno

| Herramienta | Versión Mínima | Versión Recomendada |
| ----------- | -------------- | ------------------- |
| Node.js     | 18+            | **22.x**            |
| npm         | 9+             | **11.x**            |
| Java JDK    | 17             | **17**              |
| Gradle      | 8.7+           | **8.7**             |
| Android SDK | 35             | **36**              |

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/alez2312p/accenture-list-task
cd accenture-list-task

# Instalar dependencias
npm install

# Instalar plataforma Android
ionic cordova platform add android@14
```

## Ejecución

```bash
# Desarrollo (web)
ionic serve

# Ejecutar en Android (emulador/dispositivo)
ionic cordova run android
```

## Build

```bash
# Build Android (debug)
ionic cordova build android

# Build Android (release)
ionic cordova build android --release

# Generar APK firmado
# Ubicación: platforms/android/app/build/outputs/apk/
```

## Estructura del Proyecto

```
src/app/
├── models/                    # Modelos de datos
│   ├── task.model.ts
│   └── category.model.ts
├── services/                  # Servicios
│   ├── task.service.ts
│   └── category.service.ts
├── components/              # Componentes reutilizables
│   ├── confirm-modal/       # Modal de confirmación
│   ├── form-modal/       # Modal de formulario
│   └── task-form/       # Formulario de tarea
├── home/                  # Página de tareas
├── categories/            # Página de categorías
└── tabs/                # Navegación por tabs

platforms/
└── android/            # Plataforma Android
    └── app/build/outputs/apk/  # APKs generados
```

## Arquitectura

- **Angular 20 + Ionic 8** con Signals para estado reactivo
- **Components reutilizables** para modales y formularios
- **Diseño mobile-first** optimizado para listas con 100+ items
- **Lazy loading** de rutas para mejor rendimiento

## Firebase (Pendiente)

La aplicación está preparada para Firebase Remote Config. Para configurar:

1. Crear proyecto en [Firebase Console](https://console.firebase.google.com)
2. Agregar app web
3. Habilitar Remote Config
4. Configurar credenciales en `src/environments/`

## Troubleshooting

### Build Gradle falla

```bash
# Limpiar caché de Gradle
rm -rf ~/.gradle/caches ~/.gradle/daemon
rm -rf platforms/android/.gradle platforms/android/build

# Regenerar plataforma
ionic cordova platform remove android
ionic cordova platform add android@14
ionic cordova build android
```

### Error: Gradle 4.4.1 no es compatible

```bash
# Verificar que Gradle 8.7 esté en el PATH
export PATH=~/Descargas/gradle-8.7/bin:$PATH
gradle --version  # Debe mostrar Gradle 8.7.x
```

## Licencia

MIT
