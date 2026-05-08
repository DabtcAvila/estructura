---
title: "Microdatos del INEGI: arquitectura de acceso y exigencias analíticas"
description: "Cómo se publican y consumen los microdatos del INEGI: vías de acceso, encuestas centrales, requisitos de diseño muestral y limitaciones del ecosistema."
date: 2026-05-08
category: datos
tags:
  - INEGI
  - Microdatos
  - ENOE
  - ENIGH
  - Datos abiertos
author: Estructura
draft: false
sources:
  - "INEGI — Red Nacional de Metadatos, catálogo público de proyectos estadísticos, 2025"
  - "INEGI — Encuesta Nacional de Ocupación y Empleo, diseño muestral, 2021"
  - "INEGI — Encuesta Nacional de Ingresos y Gastos de los Hogares 2024, presentación de resultados, julio 2025"
  - "INEGI — Norma Técnica para la Elaboración de Metadatos, Diario Oficial de la Federación, 3 de septiembre de 2015"
  - "INEGI — API del Banco de Indicadores, documentación para desarrolladores, 2025"
  - "INEGI — Boletín especial: Laboratorio de Microdatos en El Colegio de México, enero 2025"
  - "INEGI — Censo de Población y Vivienda 2020, Diseño de la muestra censal"
  - "CONEVAL — Medición multidimensional de la pobreza en México, documento metodológico"
  - "IMCO — Datos clave sobre la Encuesta Nacional de Ingresos y Gastos de los Hogares 2024, agosto 2025"
---

## Contexto

El Instituto Nacional de Estadística y Geografía (INEGI) administra el Sistema Nacional de Información Estadística y Geográfica (SNIEG) y produce las series cuantitativas que sostienen el debate público mexicano sobre empleo, ingreso, vivienda y dinámica demográfica. Detrás de los tabulados ejecutivos que suelen replicarse en prensa existe una capa más profunda: los microdatos, es decir, los registros individuales —debidamente anonimizados— que cada encuesta o censo levanta. Trabajar con esos archivos permite responder preguntas que los tabulados predefinidos no contestan: descomposiciones por tramos finos de edad, cruces sectoriales no publicados, regresiones controladas por variables de hogar. También exige rigor metodológico, porque ignorar el diseño muestral conduce a estimaciones sesgadas y a una subestimación sistemática de la varianza.

Este artículo describe la arquitectura institucional con la que el INEGI publica microdatos, las encuestas centrales para el análisis socioeconómico, los requisitos técnicos imprescindibles y las limitaciones que persisten en el ecosistema.

## Tres puertas de acceso a la microinformación

### Descarga pública directa

La vía principal es el portal de descarga masiva del INEGI, donde los archivos de cada operación se ofrecen en formatos estadísticos estándar: DTA (Stata), SAV (SPSS) y CSV en la mayor parte de los casos. La política institucional, alineada con prácticas internacionales, hace públicos los microdatos de las encuestas y de las muestras representativas de los censos respetando los principios de confidencialidad establecidos en el marco legal del SNIEG. La granularidad disponible es elevada: en encuestas de hogares cada vivienda y cada persona aparecen como registros separables, con identificadores que permiten reconstruir la jerarquía vivienda-hogar-persona y, cuando aplica, vivienda-hogar-persona-trabajo.

### Red Nacional de Metadatos

La Red Nacional de Metadatos (RNM) es el catálogo de proyectos estadísticos del Instituto. Cada proyecto cuenta con metadatos completos elaborados bajo el estándar internacional Data Documentation Initiative (DDI) versión 2.0, lo que permite navegar la encuesta a nivel de variable: localizar dónde se registró un atributo específico, qué cuestionario lo levantó, qué codificación se utilizó y cómo se relaciona con variables análogas en ediciones previas. De acuerdo con la documentación pública del Instituto, en la RNM puede consultarse el 100% de los proyectos estadísticos básicos decretados como Información de Interés Nacional. Para el analista esto convierte a la RNM en el punto de entrada natural antes de descargar archivos: la ficha del proyecto explicita el marco muestral, los cuestionarios, el período de levantamiento y los archivos disponibles.

### Laboratorio de Microdatos y procesamiento remoto

Cuando el análisis requiere variables identificables o niveles de desagregación que comprometerían la confidencialidad, el INEGI ofrece dos modalidades restringidas: el Laboratorio de Microdatos —instalaciones físicas con seguridad lógica donde no es posible extraer información del enclave— y el procesamiento remoto, en el cual el investigador envía sintaxis y recibe únicamente resultados que el Instituto ha revisado para validar que no se viola la confidencialidad. El acceso está reservado a estudiantes de posgrado, investigadores afiliados a una institución académica o de investigación y servidores públicos. La solicitud requiere justificación del objetivo, currículum e identificación oficial; los resultados son entregados sólo si pasan la revisión institucional de divulgación. En enero de 2025 el Instituto inauguró un laboratorio en El Colegio de México, que se sumó a los espacios ya operativos en sede central y en el CIDE.

## Encuestas centrales y la estructura de sus bases

### Encuesta Nacional de Ocupación y Empleo

La ENOE es la principal fuente estadística sobre ocupación, desocupación, informalidad y condiciones laborales. Su diseño es probabilístico, polietápico, estratificado y por conglomerados; la unidad última de observación es la persona de 15 años o más. Las Unidades Primarias de Muestreo son agrupaciones de viviendas con un mínimo de 80 y un máximo de 160 viviendas habitadas, formadas por una manzana o por la unión de manzanas contiguas dentro de una misma AGEB. La base trimestral se compone de hasta cinco tablas que el usuario debe vincular mediante claves identificadoras compartidas: vivienda, hogar, sociodemográfico (CS) y dos partes del cuestionario de ocupación y empleo (COE I y COE II). El ciclo de la ENOE distingue además un cuestionario básico (mayor frecuencia, menor extensión) de un cuestionario ampliado, lo que afecta la disponibilidad de variables específicas según el trimestre.

### Encuesta Nacional de Ingresos y Gastos de los Hogares

La ENIGH es el referente para el análisis de ingreso, gasto y desigualdad. La edición 2024, levantada entre el 21 de agosto y el 28 de noviembre de ese año y publicada en julio de 2025, reportó un ingreso corriente total promedio trimestral por hogar de 77,864 pesos, con un crecimiento real de 10.6% respecto a 2022 según los resultados oficiales. La distribución sigue siendo profundamente concentrada: el décimo decil capta 30.3% del ingreso nacional, mientras que los cinco deciles inferiores —la mitad de la población— suman 23.3%. La base de microdatos se distribuye en múltiples tablas, cada una con su unidad de análisis específica, entre ellas viviendas, hogares, concentrado, ingresos, gastohogar, gastopersona, erogaciones, trabajos, población, agro y no agro. La construcción correcta de deciles, gasto per cápita o líneas de bienestar exige conocer cuál tabla contiene la variable y cuál es su factor de expansión asociado.

### Censo y muestra censal

El Censo de Población y Vivienda 2020 publicó dos universos de información: el cuestionario básico, aplicado a la totalidad de las viviendas, y el cuestionario ampliado, aplicado a una muestra probabilística de aproximadamente 4 millones de viviendas a nivel nacional. La muestra ampliada permite estimaciones temáticas más finas —migración, pertenencia a pueblos indígenas, niveles detallados de escolaridad, condiciones de discapacidad— a costa de una varianza muestral que el analista debe modelar explícitamente, cosa que no ocurre con el cuestionario básico al ser un levantamiento universal.

## El reto técnico: factores de expansión y diseño complejo

Las encuestas del INEGI no son muestras aleatorias simples. Asumir lo contrario es el error más frecuente —y consecuente— al trabajar con microdatos. Cada registro individual representa a un número variable de personas en la población, encapsulado en el factor de expansión: en la ENOE, los campos `FAC_TRI` y `FAC_MEN` para el ponderador trimestral y mensual; en otras encuestas, `FAC_ELE` o nomenclaturas equivalentes. Para producir estimaciones puntuales válidas y errores estándar correctos, el análisis debe incorporar tres elementos: el estrato (variable `EST_DIS`), la unidad primaria de muestreo (`UPM_DIS`) y el ponderador.

En STATA esto se especifica una sola vez con `svyset` y los comandos analíticos se anteceden con `svy:`. En R existen los paquetes `survey` y `srvyr`, equivalentes funcionales para diseños complejos. La estrategia que el INEGI utiliza para estimar varianza es el método de últimos conglomerados, basado en que la mayor contribución a la varianza en un diseño polietápico proviene de las UPM. Omitir esta especificación produce intervalos de confianza artificialmente estrechos y, cuando los efectos de diseño son grandes —como en encuestas de hogares con conglomeración geográfica fuerte—, conclusiones falsamente significativas. Los factores de expansión, por su parte, son el resultado de tres ajustes encadenados: probabilidad de selección, no respuesta y proyección poblacional, este último para conciliar las estimaciones con las proyecciones del CONAPO.

## Estándares de documentación

La documentación de los microdatos en México sigue una norma técnica formal. La Norma Técnica para la Elaboración de Metadatos para proyectos de generación de Información Estadística Básica fue publicada en el Diario Oficial de la Federación el 3 de septiembre de 2015 y obliga a las Unidades del Estado del SNIEG a documentar sus proyectos estadísticos bajo el estándar DDI 2.0. La consecuencia práctica es que cada operación documentada por el INEGI contiene fichas de variables, descripciones del marco de muestreo, instrumentos de captación y diccionarios de códigos directamente comparables con los publicados por institutos estadísticos europeos y por consorcios internacionales adheridos a la DDI Alliance. Esto facilita estudios comparativos —por ejemplo, equivalencias entre la ENOE y la European Labour Force Survey— y reduce el riesgo de errores de interpretación de variables.

## API del Banco de Indicadores

Para series ya agregadas —no microdatos en sentido estricto, pero útiles para complementar análisis—, el INEGI mantiene la API del Banco de Indicadores, un servicio REST que devuelve respuestas en JSON, JSONP o XML. El acceso requiere un token gratuito asociado al correo del solicitante. La estructura de la URL identifica el indicador, el idioma, el área geográfica con códigos diferenciados para nacional (00), estatal (99) y municipal (999), y la fuente, lo que permite construir flujos automatizados de descarga. Paquetes comunitarios como `inegiR` para R encapsulan estas peticiones y reducen la curva de aprendizaje. Una práctica analítica robusta combina la API para series oficiales agregadas con los microdatos descargados para descomposiciones específicas que la API no entrega.

## Limitaciones persistentes

A pesar del avance institucional, el ecosistema presenta puntos débiles. Primero, la heterogeneidad en la disponibilidad: no todas las encuestas históricas tienen sus microdatos cargados con el mismo nivel de documentación, y cambios metodológicos —como la actualización del marco muestral con base en nuevos censos— rompen la comparabilidad estricta de series largas. Segundo, la fricción de acceso en operaciones sensibles: el Laboratorio de Microdatos es una solución para datos confidenciales, pero el procedimiento de solicitud, la espera y la dependencia de presencia física —o de procesamiento remoto pautado— limitan su uso intensivo, particularmente para investigadores fuera de las grandes ciudades. Tercero, la curva técnica: usar correctamente factores de expansión y diseño complejo requiere formación que no está distribuida uniformemente entre los usuarios potenciales —servidores públicos estatales y municipales, periodistas de datos, organizaciones de la sociedad civil—, lo que puede generar cifras erróneas de buena fe. La oferta formativa de instituciones como El Colegio de México, el CIDE y la UNAM mitiga parcialmente esta brecha, pero su alcance es limitado.

Un debate adicional, sostenido en la metodología de medición multidimensional de la pobreza desarrollada por CONEVAL, ilustra la importancia de los microdatos: los indicadores de carencias sociales se construyen combinando variables específicas de la ENIGH y de los módulos asociados, y esa construcción sólo es replicable —por terceros, con fines de auditoría académica o de política pública— si se trabaja con los registros individuales. Sin acceso a microdatos no hay verificación independiente de las estadísticas oficiales, y sin verificación independiente la confianza pública en las cifras descansa sólo en la reputación del organismo emisor.

## Conclusiones

1. **El INEGI ofrece tres niveles complementarios de acceso a microdatos**: descarga pública directa, catálogo documentado con estándar DDI en la Red Nacional de Metadatos y modalidad restringida vía Laboratorio de Microdatos para datos confidenciales.
2. **El uso correcto exige incorporar el diseño muestral**: estrato, conglomerado y factor de expansión son condición necesaria para estimaciones puntuales y de varianza válidas; los paquetes `survey` en R y la suite `svy:` en STATA son las herramientas estándar.
3. **La documentación bajo norma técnica formal** —vigente desde 2015 y alineada con DDI 2.0— eleva la trazabilidad y la comparabilidad internacional del acervo mexicano de microdatos.
4. **Las limitaciones operativas y de capacidad técnica** entre los usuarios públicos siguen siendo el principal obstáculo para que el potencial analítico de los microdatos se traduzca en mejores diagnósticos y políticas. Cerrar esa brecha es, en buena medida, una agenda de capacitación tanto como de infraestructura.
