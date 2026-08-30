# Ancho completo para los párrafos introductorios

## Objetivo

En las secciones de la homepage **Áreas del Derecho**, **Derecho Penal** y **Empresas**, los títulos quedan alineados a la izquierda (se conserva esa alineación), pero el párrafo introductorio debe extenderse a lo ancho del div de la sección, en lugar de quedar limitado al ancho del título.

Según la respuesta del usuario, el cambio aplica únicamente al **párrafo introductorio** (no a los textos de las tarjetas).

## Cambios

Actualmente el bloque de encabezado de cada sección envuelve etiqueta, título y párrafo en un contenedor `max-w-2xl` (~672 px), lo que limita el párrafo a poco más de la mitad del ancho de la sección en desktop.

### 1. `src/components/home/AreasDerecho.tsx` (sección "Áreas de práctica")

- Mantener la etiqueta "Áreas de práctica", la regla y el título `Asesoramiento en distintas áreas del Derecho` dentro de un bloque `max-w-2xl` (izquierda, como hoy).
- Sacar el párrafo introductorio ("Brindamos asesoramiento legal a personas y familias...") de ese bloque, para que ocupe el ancho completo del contenedor de la sección.

### 2. `src/components/home/Empresas.tsx` (sección "Empresas")

- Mismo tratamiento: etiqueta, regla y título `Asesoramiento legal para empresas y organizaciones` permanecen en el bloque `max-w-2xl`; el párrafo ("Acompañamos a empresas, comercios y organizaciones...") pasa a ancho completo.

### 3. `src/components/home/Areas.tsx` (sección "Derecho Penal")

- Sin cambios: esta sección no tiene párrafo introductorio (solo etiqueta y título), por lo que no hay nada que expandir. Se conserva tal cual.

## Detalle técnico

- En ambos archivos, estructura resultante:

```text
<div>
  <div className="max-w-2xl">   <!-- etiqueta, regla, título: quedan como están -->
    ...
  </div>
  <p ...>                        <!-- párrafo: sin límite de ancho -->
    ...
  </p>
</div>
```

- Sin cambios de estilos globales, tipografía, colores ni espaciados; solo se libera el ancho del párrafo.
- No se modifican tarjetas, botones, la landing `/derecho-penal` ni otras secciones.

## Verificación

- Revisar en preview desktop que el párrafo introductorio de "Áreas de práctica" y "Empresas" ocupe todo el ancho del contenedor, manteniendo títulos a la izquierda.
- Confirmar que "Derecho Penal" no cambió y que la landing `/derecho-penal` sigue intacta.
- Chequeo responsive: en mobile el ancho completo no altera la lectura (el contenedor ya es angosto).