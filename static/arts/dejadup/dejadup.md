# Copias de seguridad con Déjà Dup en Ubuntu

## Introducción

Déjà Dup es una herramienta de copia de seguridad sencilla pero potente, incluida en muchas distribuciones Linux como Ubuntu. Es ideal para usuarios que desean proteger sus archivos sin complicaciones. En este tutorial aprenderás cómo usarla paso a paso y si es adecuada para entornos empresariales.

## ¿Qué es Déjà Dup?

Déjà Dup es una interfaz gráfica para `duplicity`, diseñada para ser fácil de usar. Permite hacer copias automáticas y cifradas de tus archivos en unidades externas o servicios en la nube como Google Drive.

## Primeros pasos

### 1. Instalar (si no lo tienes)

En terminal:
``` bash
sudo apt install deja-dup
```

### 2. Abrir la aplicación

Búscala como “Copias de seguridad” en el menú de Ubuntu.

## Configurar una copia de seguridad

### 1. Elegir carpetas a incluir

Puedes seleccionar tu carpeta personal o carpetas específicas.

### 2. Excluir archivos innecesarios

Evita hacer copias de cachés o descargas para ahorrar espacio.

### 3. Destino de la copia

Puedes usar:

- Disco externo
- Carpeta local
- Google Drive o Nextcloud

### 4. Programar copias automáticas

Se recomienda hacer una diaria o semanal.

### 5. Cifrado opcional

Puedes proteger tus copias con una contraseña. ¡Guárdala bien!

## Restaurar una copia

1. Abre Déjà Dup y selecciona “Restaurar”.
2. Escoge la ubicación del respaldo.
3. Elige la fecha de la copia y los archivos a recuperar.

## ¿Sirve para empresas?

**Ventajas:**

- Muy fácil de usar.
- Cifrado incorporado.
- Compatible con almacenamiento en red.

**Limitaciones:**

- No permite copias de sistema completo.
- No hay soporte técnico dedicado.
- Pocas opciones avanzadas para múltiples usuarios o automatización compleja.

**Conclusión:** Puede usarse en pequeñas empresas o entornos personales. Para entornos empresariales más exigentes, es mejor usar soluciones como Bacula, Duplicati, o Veeam.

## Conclusión

Déjà Dup es perfecto para usuarios domésticos y pequeños negocios que buscan una solución de copia de seguridad simple y confiable. Su integración con Ubuntu lo convierte en una excelente herramienta para proteger tus archivos más importantes sin complicaciones técnicas.
