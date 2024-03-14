# Bootcamp JS - Laboratorio Módulo 11

Pasos:

- Clónate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).



# Laboratorio - Expresiones Regulares

En este laboratorio se abordan dos aplicaciones que hacen uso de expresiones regulares para realizar tareas específicas.

## Apartado A: Validación y extracción de información de IBAN

Esta parte del laboratorio se centra en la validación de los números de cuenta IBAN (International Bank Account Number) de bancos españoles. Se utilizan expresiones regulares para verificar que el formato del IBAN sea correcto, se valida su autenticidad utilizando la librería ibantools y se extrae información relevante como el código de sucursal y el banco al que pertenece.

## Apartado B: Extracción de enlaces a imágenes de un contenido HTML

En esta sección se desarrolla una aplicación que extrae enlaces a imágenes de un contenido HTML proporcionado. Se utiliza una expresión regular para buscar etiquetas `<img>` y extraer los atributos `src`, que contienen las URL de las imágenes. Posteriormente, estas URL se muestran en pantalla.
