# Entrega de camisetas · Copa Integración 2026

Aplicación preparada para Vercel. Incluye los 98 pedidos originales y 201 camisetas, el diseño actualizado, buscador, filtros, verificación, entrega en verde, fecha/hora, deshacer y reinicio a cero.

## Qué debes configurar

Vercel muestra la aplicación. Una planilla de Google guarda las verificaciones y entregas. Google Apps Script conecta ambas partes. Todos los dispositivos que usen la misma implementación ven los mismos datos.

**Este paquete comienza con las entregas en cero. No importa las pruebas o entregas guardadas en la aplicación de ChatGPT Sites.**

## 1. Crear el guardado en Google

1. Abre https://script.google.com y crea un proyecto nuevo.
2. Ponle de nombre `Entregas Copa Integración 2026`.
3. Reemplaza el contenido del archivo `Código.gs` por TODO el contenido de `backend/Code.gs` de este paquete.
4. Guarda el proyecto.
5. En el selector de funciones de arriba, selecciona `configurarAplicacion` y pulsa **Ejecutar**.
6. Autoriza el acceso a tu cuenta y a las planillas cuando Google lo solicite. El código creará la planilla automáticamente con los 98 pedidos.
7. En el registro de ejecución aparecen la URL de la planilla y la **CLAVE DE ACCESO**. Copia ambos. La clave se introduce al abrir la aplicación; no debes publicarla en GitHub.
8. Pulsa **Implementar → Nueva implementación**. Selecciona el tipo **Aplicación web**.
9. En **Ejecutar como**, selecciona tu cuenta. En **Quién tiene acceso**, selecciona **Cualquier usuario** (también puede aparecer como **Cualquiera**). La aplicación comprueba su propia clave antes de leer o modificar datos. Si tu cuenta institucional no permite esta opción, usa una cuenta autorizada que permita aplicaciones web externas.
10. Pulsa **Implementar** y copia la URL que termina en `/exec`.

Si modificas el código del servidor después, abre **Implementar → Gestionar implementaciones → Editar**, selecciona una versión nueva y vuelve a implementar. Conserva la misma URL.

## 2. Conectar la aplicación

Abre `configuracion.js` con un editor de texto y pega la URL de Apps Script:

```js
window.ENTREGAS_CONFIG = {
  apiUrl: "https://script.google.com/macros/s/TU_IMPLEMENTACION/exec"
};
```

No pegues aquí la clave de acceso. La clave permanece en las propiedades privadas del proyecto de Apps Script y se introduce en la pantalla de acceso.

## 3. Publicar en Vercel

1. Descomprime este ZIP.
2. Crea un repositorio en GitHub, por ejemplo `EntregasCopa2026`.
3. Sube el CONTENIDO del paquete directamente a la raíz del repositorio. `package.json`, `vercel.json` e `index.html` deben quedar en la raíz.
4. Abre https://vercel.com y entra con tu cuenta.
5. Selecciona **Add New → Project** e importa el repositorio de GitHub.
6. La configuración incluida utiliza **Framework Preset: Other**, **Build Command: npm run build**, **Output Directory: dist** y **Install Command: npm install**. Si Vercel te pide elegir el framework, selecciona **Other**.
7. Pulsa **Deploy**.
8. Abre el enlace que te entrega Vercel e introduce la clave generada por Apps Script.

No necesitas activar GitHub Pages. GitHub contiene los archivos y Vercel publica la aplicación. Los siguientes cambios que subas a la rama conectada se publicarán automáticamente.

El servidor de Google del paso 1 sigue siendo necesario. Hasta que configures su URL en `configuracion.js`, la aplicación mostrará un aviso y no permitirá cargar ni guardar entregas.

## Uso

- Busca por nombre o número del listado y comprueba cantidad y talles.
- Los 10 pedidos que estaban PENDIENTES en el PDF deben verificarse primero.
- Pulsa **Entregar → Confirmar entrega**. La fila solo queda verde tras confirmar el guardado en Google.
- El icono de deshacer vuelve ese pedido a pendiente.
- **Reiniciar entregas → Sí, reiniciar a 0** borra todas las entregas y fechas. Conserva pedidos, talles y verificaciones. Afecta todo el listado aunque estés usando un filtro.
- Los cambios de otros dispositivos se consultan cada 20 segundos. También puedes pulsar **Actualizar listado**.
- Se necesita conexión para ingresar y guardar. Este paquete no incluye un modo sin conexión.
- Si una conexión falla después de enviar un cambio, actualiza el listado para comprobarlo antes de repetirlo.

## Planilla y clave

No ordenes ni elimines filas directamente en la planilla: la aplicación conserva el orden original del listado. Usa la web para cambiar verificación y entrega.

Para volver a consultar la clave o la URL de la planilla, ejecuta nuevamente `configurarAplicacion`: no borra ni reinicia las entregas. Para cambiar la clave, edita `ACCESS_KEY` en **Configuración del proyecto → Propiedades de la secuencia de comandos**.

La clave da acceso al listado y a las entregas, incluido su reinicio. Compártela solo con quienes deban gestionar la entrega. Los archivos de un repositorio público, incluido el listado original que contiene el código del servidor, son visibles públicamente.

## Archivos

- `index.html`, `aplicacion.js`, `estilos.css`, `favicon.svg`: aplicación lista para publicar.
- `configuracion.js`: URL del servidor.
- `backend/Code.gs`: servidor para Apps Script y listado original.
- `src/`: código fuente de la interfaz.
- `vercel.json`: configuración de publicación en Vercel.
- `package.json` y `build.mjs`: permiten recompilar si posteriormente modificas `src/`.

Para recompilar: instala Node 22 o superior, ejecuta `npm install` y luego `npm run build`. Vercel recompila automáticamente al recibir cambios desde GitHub. El código del servidor y el listado original no se incluyen en la carpeta pública `dist`.

## Verificación del paquete

Se comprobó la compilación estática y se probaron el listado, clave inválida, entrega, verificación, deshacer, rechazo de una revisión antigua, reinicio a cero y repetición de solicitudes con el mismo identificador usando una simulación local de los servicios de Google. La conexión real se podrá comprobar cuando implementes el servidor en tu cuenta.

Documentación de referencia:
- Vercel: https://vercel.com/docs/deployments
- Apps Script: https://developers.google.com/apps-script/guides/web
- Servicio de contenido: https://developers.google.com/apps-script/guides/content
