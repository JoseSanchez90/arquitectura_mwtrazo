# MW Trazo — diseño y contenido

## Referencias inspeccionadas

- Diseño: https://demo.hotjoomlatemplates.com/architecture/
- Páginas de referencia: About, Portfolio, Meet the Team, Pricing, FAQ, Contact y artículo de Blog.
- Contenido: inicio, nosotros, proyectos, servicios, declaratoria de fábrica, independización, subdivisión, verificador SUNARP y contáctanos de https://mwtrazo.vercel.app/.

## Criterios de adaptación

- Montserrat local, fotografía a todo el ancho, menú lateral negro en escritorio y móvil, títulos en mayúsculas, botones rectangulares de contorno.
- Inicio: carrusel de cuatro diapositivas, dos fotografías verticales desfasadas, servicios en fondo negro, tres enlaces fotográficos, casos de éxito en el formato de tarjetas del blog, preguntas frecuentes y cierre fotográfico.
- Portfolio: cuadrícula de tres columnas con fichas individuales para los doce casos originales. Se agregó filtro accesible por categoría.
- Servicios: estructura editorial de los artículos con columna lateral. Independización incorpora la estructura de Pricing con los precios de MW Trazo.
- FAQ: acordeón inspirado en la página de referencia. Contacto: columna informativa y formulario como en la referencia.
- Todos los estilos de interfaz usan clases Tailwind; globals.css solo importa Tailwind y conecta la fuente.

## Contenido y discrepancias resueltas

- Se usa el teléfono real enlazado en el sitio: +51 947 224 879.
- El footer original muestra contacto@mwtrazo.com pero enlaza a contacto@hotmail.com. La página de contacto publica contacto@hotmail.com, que se utiliza de forma consistente.
- La página original de levantamiento-de-cargas devuelve 404. La nueva ficha conserva únicamente la información disponible en el listado de servicios y verificador SUNARP; no se inventaron requisitos ni tarifas.
- El portfolio original incluye doce casos con cliente, localidad, categoría, servicio y año, pero no presenta fotografías. Las fotografías locales son referenciales y se identifican como tales. Cuatro provienen de las imágenes usadas en la portada de MW Trazo.
- Los importes S/. 5, 6 y 8 por m² son los publicados en la página original de independización. No se inventan prestaciones diferentes por plan.
- Las garantías, plazos y cifras se trasladan del contenido proporcionado; no constituyen una verificación independiente.
- Se omiten redes sociales que originalmente enlazaban a páginas genéricas sin perfiles de la empresa.

## Formulario

No existe backend de correo configurado. El formulario valida los datos localmente, prepara una vista previa y ofrece continuar en el WhatsApp oficial. No muestra un envío exitoso ficticio. Ninguna consulta se envía hasta que el visitante la confirma en WhatsApp.

## Recursos

Los recursos visuales de referencia y las fotos de Unsplash utilizadas por la portada original están descargados en public/images. La fuente está alojada localmente en src/app/fonts. scripts/download-assets.mjs documenta las URLs de procedencia y permite volver a descargarlos.

## Validación

- `pnpm build`: compilación de producción y TypeScript correctos.
- `node scripts/check-routes.mjs`: 23 rutas públicas, 18 recursos de imagen y respuesta 404 verificados.
- Revisión visual en escritorio (1280 px) y móvil (375 px), sin desbordamiento horizontal en las páginas comprobadas.
- Navegación del menú, cierre con Escape y restauración del desplazamiento comprobados.
- Carrusel manual, filtro de proyectos (dos casos técnicos), acordeón exclusivo y formulario comprobados en navegador.
- Teléfono inválido rechazado; formato internacional con espacios aceptado. Vista previa y enlace de WhatsApp verificados sin enviar ninguna consulta.
