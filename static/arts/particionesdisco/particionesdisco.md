# Particiones de disco

## Introducción

Las particiones permiten dividir un disco físico en varias unidades lógicas. Esto es útil para instalar más de un sistema operativo, separar archivos del sistema y datos personales, o simplemente organizar mejor el almacenamiento.

En este tutorial veremos cómo crear una nueva partición en Windows, paso a paso, de forma segura.

## ¿Por qué hacer particiones?

- **Organización:** separar datos personales del sistema operativo.
- **Seguridad:** si el sistema falla, los archivos personales están en otra partición.
- **Multiboot:** instalar distintos sistemas operativos en un mismo disco.
- **Rendimiento:** algunas tareas de mantenimiento son más efectivas si hay particiones diferenciadas.

## Requisitos previos

- Sistema Windows 10 u 11.
- Privilegios de administrador.
- Espacio libre en disco.

## Paso a paso: Crear una partición

1. **Abrir el Administrador de discos**
   - Pulsa `Windows + R`, escribe `diskmgmt.msc` y presiona Enter.

2. **Reducir el volumen actual**
   - Haz clic derecho sobre el disco principal (C:) y selecciona *Reducir volumen*.
   - Elige cuánto espacio deseas liberar para la nueva partición (en MB).

3. **Crear una nueva partición**
   - Una vez tengas espacio no asignado, haz clic derecho sobre él y selecciona *Nuevo volumen simple*.
   - Sigue el asistente:
     - Asigna tamaño.
     - Letra de unidad.
     - Formatea como NTFS (o exFAT si lo necesitas compatible con otros SO).

4. **Finalizar**
   - La nueva partición aparecerá como un disco independiente en el explorador.

## Consejos

- Siempre haz una copia de seguridad antes de modificar particiones.
- Evita manipular la partición del sistema si no estás seguro.
- No uses herramientas de terceros si no las conoces bien.

## Conclusión

Hacer particiones en un disco es una manera eficiente de organizar y proteger tus datos. Con las herramientas de Windows es sencillo y no requiere software adicional. Ideal tanto para usuarios domésticos como profesionales.
