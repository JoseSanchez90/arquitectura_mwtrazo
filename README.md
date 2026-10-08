# MW Trazo

Sitio de arquitectura y formalización predial desarrollado con Next.js 16, React 19 y Tailwind CSS 4.

## Desarrollo

```sh
pnpm install
pnpm dev
```

Abrir http://localhost:3000.

## Producción y comprobación

```sh
pnpm build
pnpm start
node scripts/check-routes.mjs
```

La comprobación de rutas requiere el servidor local iniciado. `CHECK_BASE_URL` permite indicar otro puerto.

## Contenido

- `src/lib/content.ts`: servicios, contacto, proyectos, preguntas frecuentes y cifras de empresa.
- `src/components`: interfaz compartida, carrusel, menú, filtros y formulario.
- `src/app`: páginas, metadatos y rutas de detalle.
- `public/images`: recursos visuales locales.
- `docs/design-and-content.md`: referencias, decisiones de adaptación y discrepancias del sitio original.

El formulario prepara un mensaje para el WhatsApp oficial. No requiere credenciales ni backend y no envía correos. Las fotografías de proyectos están identificadas como referenciales.

Todos los estilos de interfaz se implementan con utilidades Tailwind. Montserrat se sirve localmente.
