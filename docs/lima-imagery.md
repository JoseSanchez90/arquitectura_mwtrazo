# Imágenes referenciales de Lima

## Estado final: imágenes únicas por contenido y encuadres

La web utiliza 12 viviendas para 12 casos, 4 imágenes exclusivas para los 4 servicios, 4 imágenes de portada y otras 4 para las secciones institucionales y contacto. Cada asignación principal tiene un archivo distinto. Las tarjetas y las páginas de detalle del mismo contenido comparten su imagen intencionalmente; también se comparte el fondo del componente global de contacto.

Los archivos nuevos están en public/images/lima/, optimizados a WebP calidad 84. Se usó image_gen integrado. Las imágenes de servicios se generaron de nuevo en vertical (1024×1536), con cámara más alejada, cielo y calle alrededor; no se hizo outpainting de las anteriores. Inicio mantiene las tres columnas verticales en escritorio; los servicios usan un encuadre cuadrado para conservar las fachadas completas.

Prompt base de servicios: Use case: photorealistic-natural. Original referential editorial photograph for MWTRAZO property formalization services in Lima Peru. Portrait 1024x1536, camera far away across the street, whole building occupies only central 65% width and central 45% image height. Plenty of realistic overcast sky above and paved street sidewalk below. Facade must fit both portrait and central landscape crops. Natural muted daylight, ordinary lived-in construction, straight vertical lines, complete roof and entrance visible. No text, logos, people, cars, watermarks. Not luxurious, not a render.

- servicio-declaratoria.webp: Three-story terracotta and white house, teal entrance, recessed windows, flat rooftop.
- servicio-independizacion.webp: Four-story cream and green apartments with right balconies, brown stairwell door and green garage.
- servicio-subdivision.webp: Two adjacent one-story beige and blue urban homes, separate doors and masonry boundary pillar.
- servicio-cargas.webp: Two-story white house, burgundy windows, stone-clad ground floor, narrow gate.

Prompt base de imágenes institucionales: Use case: photorealistic-natural. Create an original fictional referential photograph for MWTRAZO legal property services website in Lima Peru. Documentary architectural realism, natural textures, neutral soft cloudy daylight. No text, logos, watermarks, people, legible plates or addresses. No luxury render aesthetics. Clearly different architecture from previous images.

- portada-lima.webp: Landscape 1536x1024. Wide street view of an ordinary Lima San Isidro residential neighborhood: an ivory two-story 1960s house with horizontal wooden gate and deep front garden, street trees, long sidewalk. Main house on right half, sky and street on left for white heading overlay.
- portada-departamentos.webp: Landscape 1536x1024. Wide view of a Lima Jesus Maria street with a narrow seven-story muted taupe apartment building, asymmetric charcoal vertical facade strip, recessed balconies, street and neighbors. Building right of center, ample environment.
- portada-patrimonio.webp: Landscape 1536x1024. A quiet historic Lima Pueblo Libre street corner with a pale dusty rose one-story corner home, old tall dark green wooden double door, decorative white cornice, barred windows, view along two streets. Entire building, wide environment.
- portada-verificacion.webp: Landscape 1536x1024. Wide view of a modest two-story light gray Lima San Miguel residence with blue metal fence, offset sloping shallow roof and external brick stair tower, small front yard, leafy street. Entire building to right with generous surroundings.
- nosotros-ciudad.webp: Portrait 1024x1536. Distant street view of a slender eight-story Lima residential building with white facade, alternating narrow ochre balconies and dark vertical stairwell, trees on sidewalk. Whole building centered, generous sky and street, facade only middle 60% width.
- nosotros-barrio.webp: Portrait 1024x1536. Quiet Barranco Lima residential lane viewed lengthwise, a small white one-story house with pastel turquoise wooden shutters, two potted plants, ochre neighboring facade and cobbled sidewalk. Distant view, full house, ample surroundings.
- equipo-oficina.webp: Landscape 1536x1024. Interior of a modest professional Peruvian architecture and property regularization office, wooden meeting table with unlettered rolled floor plans, laptop, shelves and large window facing blurred Lima rooftops. No people. Natural daylight, realistic small office.
- contacto-lima.webp: Landscape 1536x1024. Wide elevated neighborhood panorama of ordinary Lima low-rise flat-roof homes interspersed with mid-rise apartment buildings, muted cream and terracotta, hazy coastal overcast sky. No identifiable landmark or single featured house. Realistic city fabric.

## Alcance

Ocho imágenes originales generadas con la herramienta integrada imagegen. No son fotografías de propiedades reales, capturas retocadas de Google Maps ni obras o inmuebles de clientes de MW Trazo. Los nombres de distrito identifican la inspiración del prompt, no una ubicación verificada. Las ubicaciones de los casos publicados se conservaron.

Se abrió Google Maps en Surquillo y se inspeccionó la ficha Casa - Surquillo (La Calera de la Merced 210). Maps mostró una vista limitada. No se descargaron ni reutilizaron sus imágenes. Se consultaron referencias visuales generales en búsqueda web, incluyendo fachadas de Barranco y edificios de Surquillo. No se realizó una inspección de Street View de los ocho distritos.

Referencias consultadas:
- https://www.google.com/maps/search/casas+Surquillo+Lima+Peru/
- https://shootperu.pe/location/casa-rosell-rios/
- https://www.civitatis.com/es/lima/visita-guiada-chorrillos-barranco/

## Archivos

public/images/lima/: san-isidro.webp, surquillo.webp, jesus-maria.webp, miraflores.webp, barranco.webp, lince.webp, san-miguel.webp, los-olivos.webp. WebP 1536 × 1024, calidad 84. Los originales anteriores permanecen disponibles pero ya no se referencian en la interfaz (excepto plans.jpg, fotografía técnica de planos).

scripts/prepare-lima-images.cjs convierte los PNG generados a WebP sin alterar la composición. Las proporciones de los contenedores y object-cover realizan los recortes responsive. No se instalaron dependencias adicionales.

## Prompts usados

Base:
> Create ONE photorealistic original architectural photograph for a Peruvian property regularization services website. Landscape 3:2 composition, entire facade clearly visible with modest sky and sidewalk, central subject suitable for center crop into portrait cards as well as landscape. Authentic ordinary Lima Peru residential streetscape, overcast coastal daylight, realistic cement stucco, aluminum windows, iron security gates, flat roofs. Documentary realism, tasteful neutral colors, no glamorous mansion, no swimming pool, no computer-render look, no watermark, no text, no readable addresses, no people, no brands. This is a fictional representative property, not a real client's building. 

### surquillo

> A modest THREE-STORY family multifamily house in Surquillo, pale warm gray facade, separate ground-level pedestrian entrances and dark metal garage gate, simple projecting small balconies with iron railings, flat rooftop parapet, neighboring attached buildings partially visible. Street-level slightly angled view, central complete facade.

### san-isidro

> A TWO-STORY established residential house in San Isidro, Lima, restrained cream painted masonry, dark wood entrance, low boundary wall and black iron gate, mature small street trees and planted verge. Flat roof, no luxury resort styling. Whole house central, quiet paved street, natural soft morning light.

### jesus-maria

> A narrow SIX-STORY apartment building in Jesus Maria Lima, central facade in warm white with muted brick-red vertical panels, compact balconies, ground-floor black security gate, adjoining older low-rise houses, typical concrete pavement, a young street tree at left. Frame the entire building from opposite side of street with realistic perspective and breathing room.

### miraflores

> A FIVE-STORY residential apartment building in Miraflores Lima, understated pale gray facade with warm brick accents, recessed balconies with glass and metal handrails, modest entrance garden, iron gate, small sidewalk trees. Full building visible, no high-rise skyscraper or luxury real estate fantasy, quiet ordinary urban street.

### barranco

> A ONE-STORY traditional ordinary townhouse inspired by Barranco Lima, muted ochre plaster facade, tall dark wooden double door, two tall windows with wrought iron bars, restrained white cornice, flat parapet roof, adjacent low houses, small bougainvillea at far right. A modest inhabited home, not a hotel or landmark. Entire facade central, slightly angled eye-level composition, weathered but well cared for.

### lince

> A THREE-STORY older attached urban family house in Lince Lima, muted dusty sage green and cream facade, rectangular aluminum windows with modest metal security bars, an inset upper-floor balcony, separate pedestrian doorway beside a metal garage gate, flat parapet with small finished rooftop laundry enclosure. Neighboring concrete homes at edges, little vegetation, clean narrow pavement, some authentic light surface weathering. Front three-quarter street view, believable everyday family property.

### san-miguel

> A FOUR-STORY modest multifamily apartment building in San Miguel Lima, off-white facade with narrow muted blue-gray accent strips, small projecting balconies with black metal rails, ground-level metal garage and two separate entry doors. Flat roof with parapet, complete facade centered and generous breathing room, ordinary attached homes at either side, overcast coastal sky, utilitarian tidy sidewalk. Plausible mid-income housing, no luxury architecture.

### los-olivos

> A THREE-STORY self-built but well maintained attached family home in Los Olivos Lima Peru, warm terracotta and sand painted lower floors, narrow facade, aluminum framed windows with iron bars, simple tiled ground-floor plinth, two metal pedestrian doors and a roller garage shutter, upper floor with small balcony, exposed red clay brick side party wall and black rooftop water tank behind a flat parapet. Everyday urban northern Lima, slightly worn concrete sidewalk and asphalt, no large trees in front, no dramatic poverty, no luxury. Entire complete house centered in a wider quiet street scene, 3:2 landscape.

# Corrección de duplicados — 15 octubre 2026

Los 12 casos tienen 12 archivos distintos, verificados por ruta y SHA-256.
Nuevas asignaciones: Quintana → surco.webp; Ramirez → ancon.webp; Silva → carabayllo.webp; Esteban → lurigancho.webp.
Archivos guardados en public/images/lima/, WebP calidad 84, 1536×1024.
Se consultó Google Maps para casas de Ancón; mostró una vista limitada. No se descargaron fotografías. Estas cuatro imágenes se crearon con la herramienta integrada image_gen como imágenes referenciales originales, no como fotos de los clientes.

Prompt común: Use case: photorealistic-natural. Generate an original referential architectural photograph for a Peruvian property regularization service website, NOT a real client property. Landscape 1536x1024. Eye-level front view from opposite sidewalk, realistic Lima overcast daylight, natural lived-in materials, entire house centered in middle 65 percent so square crop keeps its identity, generous breathing room. No people, cars, text, addresses, logos or watermarks. Not a luxury render.

- ancon: A modest ONE-story pale sky-blue coastal Peruvian house inspired by Ancon Lima, white wooden front door, two barred rectangular windows, flat roof with white cornice, sidewalk, no garden. Clearly one story and blue.
- surco: A THREE-story narrow residential building inspired by Surco Lima, exposed dark red brick facade, asymmetric white concrete balconies on left, black gate at ground, flat roof. Entire facade visible.
- carabayllo: A TWO-story modest house inspired by Carabayllo Lima, ochre yellow plaster, dark brown metal garage on right, external concrete staircase visible on left behind gate, unfinished brick parapet, no balconies.
- lurigancho: A ONE-story detached suburban house inspired by Lurigancho Lima, muted pale pink stucco, red clay tiled pitched roof, low stone boundary wall and green metal gate, small shrubs, dry hill faintly behind.

