---
title: "DENUE 05/2026: arquitectura del Registro Estadístico de Negocios de México y la vigésima quinta edición del directorio empresarial del INEGI"
description: "Análisis del DENUE 05/2026 del INEGI: 6.14 millones de unidades económicas, marco legal en la LSNIEG, RENEM, CLEE y la actualización semestral del directorio empresarial de México."
date: 2026-07-25
category: datos
tags:
  - INEGI
  - DENUE
  - RENEM
  - SNIEG
  - Datos abiertos
  - Censos Económicos
author: Estructura
draft: false
sources:
  - "INEGI — Comunicado de Prensa 27/26, Directorio Estadístico Nacional de Unidades Económicas (DENUE) 05/2026, 20 de mayo de 2026"
  - "INEGI — Directorio Estadístico Nacional de Unidades Económicas. DENUE 05/2026. Documento metodológico, 2026"
  - "Diario Oficial de la Federación — Ley del Sistema Nacional de Información Estadística y Geográfica, publicada el 16 de abril de 2008 y sus reformas vigentes"
  - "Diario Oficial de la Federación — Norma Técnica para la incorporación y actualización de información en el Registro Estadístico de Negocios de México, 27 de agosto de 2019"
  - "INEGI — Reporte de Resultados 22/25, Censos Económicos 2024, resultados definitivos, 24 de julio de 2025"
  - "SNIEG — Norma Técnica para la incorporación y actualización de información en el Registro Estadístico de Negocios de México (RENEM), edición vigente"
  - "INEGI — API del DENUE, portal de servicios y micrositio del directorio, consulta de julio de 2026"
  - "Banco de México — Aplicación UbiCajeros, servicio de localización de cajeros automáticos, consulta de julio de 2026"
---

## Contexto

El 20 de mayo de 2026, el Instituto Nacional de Estadística y Geografía (INEGI) publicó el Comunicado de Prensa 27/26 con la vigésima quinta edición del Directorio Estadístico Nacional de Unidades Económicas (DENUE 05/2026). Con datos referidos a 2025, el directorio reporta 6 138 075 unidades económicas activas distribuidas en las 32 entidades federativas y 2 478 municipios del país. La entrega mantiene el ritmo semestral de publicación —la siguiente edición está prevista para el 25 de noviembre de 2026— y confirma la posición del DENUE como uno de los productos con mayor consulta del INEGI: 1 089 068 visitas durante 2025 y un promedio mensual de 92 641 visitas entre enero de 2025 y abril de 2026.

Más allá de la actualización numérica, el DENUE constituye la ventana pública del Registro Estadístico de Negocios de México (RENEM), infraestructura sobre la que se edifica el Subsistema Nacional de Información Económica. Comprender su arquitectura legal, conceptual y operativa permite dimensionar la magnitud del padrón empresarial, sus fronteras metodológicas y la distancia que lo separa —por diseño— del universo censal levantado cada cinco años.

## Antecedentes y fundamento legal

El DENUE se sustenta en la Ley del Sistema Nacional de Información Estadística y Geográfica (LSNIEG), que entró en vigor el 16 de abril de 2008 tras la reforma constitucional de 2006 que elevó a rango constitucional la creación del Sistema Nacional de Información Estadística y Geográfica (SNIEG) y otorgó autonomía técnica al INEGI. Los artículos 3, 4, 5 y 23 de la LSNIEG determinan que el Subsistema Nacional de Información Económica debe contar, como mínimo, con un marco geoestadístico y un Directorio Nacional de Unidades Económicas. Los artículos 94 y 95 establecen la obligación de las personas físicas con actividad empresarial y de las personas morales de inscribirse en el registro y mantener actualizados sus datos, así como el deber de las Unidades del Estado de proporcionar al INEGI la información requerida.

En cumplimiento del Primer Transitorio de la LSNIEG, el 27 de julio de 2010 se publicó en el Diario Oficial de la Federación (DOF) la primera Norma Técnica para la incorporación y actualización de información en el registro. Esa norma fue reemplazada por la vigente, publicada en el DOF el 27 de agosto de 2019, que regula tanto el ingreso al RENEM como los criterios para diferenciar la información publicable de aquella con carácter confidencial.

## Arquitectura del RENEM y del DENUE

El RENEM es la infraestructura estadística sobre la que se generan las cifras económicas coyunturales y estructurales del país. El DENUE constituye su capa pública: mientras el RENEM contiene información básica, actual e histórica de todas las unidades económicas —con datos administrativos y confidenciales—, el DENUE solo difunde las variables no reservadas, con acceso libre y gratuito.

### Unidades de observación

El directorio distingue dos tipos de unidad. El establecimiento se define como la unidad económica que, en una ubicación física permanente y delimitada, combina acciones y recursos bajo el control de una sola entidad propietaria para realizar una actividad económica con o sin fines de lucro. La empresa es la organización con una sola entidad jurídica que realiza actividades económicas con autonomía de mercadeo, financiamiento e inversión y puede operar en varios domicilios. Quedan excluidas las actividades ambulantes y aquellas en que los locales son desmontables y se remueven diariamente.

### Cobertura sectorial

El DENUE captura unidades económicas clasificadas conforme al Sistema de Clasificación Industrial de América del Norte (SCIAN México). Desde la edición 05/2025 se utiliza la versión SCIAN 2023, en sustitución del SCIAN 2018 vigente entre 2019 y 05/2024. Las actividades agropecuarias, atendidas por el Censo Agropecuario, están excluidas; del sector 11 solo se incluyen la acuicultura (rama 1125), la pesca (rama 1141) y los servicios relacionados con actividades agropecuarias y forestales (subsector 115).

Adicionalmente, el directorio no publica cinco categorías por razones operativas o por su naturaleza extraterritorial:

| Actividad excluida | Clase o subrama SCIAN |
|---|---|
| Transporte colectivo urbano y suburbano de pasajeros en automóviles de ruta fija | 485112 |
| Transporte de pasajeros en taxis de sitio | 485311 |
| Transporte de pasajeros en taxis de ruleteo | 485312 |
| Asociaciones y organizaciones políticas | 81322 |
| Hogares con empleados domésticos | Subsector 814 |
| Sedes diplomáticas y otras unidades extraterritoriales | 93212 |

### Marco geoestadístico

La edición 05/2026 utiliza el Marco Geoestadístico Nacional 2024, con tres niveles de desagregación: Área Geoestadística Estatal (AGEE), Municipal (AGEM) y Básica (AGEB) urbana o rural. La cobertura urbana comprende localidades geoestadísticas de 2 500 habitantes o más, cabeceras municipales sin importar su tamaño y "localidades económicas" —parques o corredores industriales, o establecimientos importantes ubicados fuera de las urbanas—. Para las actividades de pesca y acuicultura, minería, electricidad, agua y gas, construcción, transportes, correos y almacenamiento, y servicios financieros y de seguros, la cobertura es nacional sin filtro poblacional.

### La CLEE como identificador único

Desde la edición 05/2021, cada registro incorpora la Clave Estadística Empresarial (CLEE), un identificador único de 17 dígitos asignado en exclusiva por el INEGI. Su parte estática permite ubicar la unidad por actividad económica y tamaño hasta el nivel municipal, y es obligatorio para todos los registros administrativos vinculados a unidades económicas. La CLEE acompaña al establecimiento durante todo su ciclo de vida y no se reutiliza tras el cierre, lo que blinda la trazabilidad estadística frente a duplicidades. En paralelo, el DENUE conserva la clave ID original como factor vinculante entre versiones y como llave de acceso a la interfaz de programación de aplicaciones (API) del directorio.

## Metodología de actualización

La actualización combina cuatro estrategias con periodicidades distintas:

1. **Anual, para negocios grandes y ciertos sectores prioritarios**, mediante registros administrativos de las Unidades del Estado y las Encuestas Económicas Nacionales (EEN) del INEGI.
2. **Parcial, para el segmento micro, pequeño y mediano**, con base en registros administrativos.
3. **Continua**, a través de la herramienta en línea que permite a los propios informantes actualizar la información —funcionalidad incorporada en la edición DENUE Interactivo 10/2013 y regulada por el artículo 11 de la Norma Técnica vigente—.
4. **Quinquenal total**, con el levantamiento de los Censos Económicos.

En el ciclo censal en curso, la edición 05/2026 se nutre de la verificación de registros administrativos en los operativos del RENEM y de los datos generados por las EEN y por los Censos Económicos 2024. Frente a la edición inmediatamente previa, se incorporaron 100 758 unidades económicas y se desincorporaron 60 358 registros. De estos últimos, 51 223 corresponden a cajeros automáticos, cuya información está ahora disponible en la aplicación UbiCajeros del Banco de México; el traspaso ilustra la coordinación interinstitucional prevista por la LSNIEG para evitar duplicidad y concentrar cada dato en la institución con mayor competencia.

## Trayectoria: quince años y veinticinco ediciones

La primera edición del DENUE, publicada en julio de 2010, reportó 4 331 202 negocios con base en los Censos Económicos 2009 y bajo el SCIAN 2007. La segunda edición (03/2011) incorporó el Marco Geoestadístico del Censo de Población y Vivienda 2010, y la tercera (06/2012) migró la plataforma de consulta del Mapa Digital de México a Google Earth Enterprise, sumando imágenes satelitales y de vista de calle.

En 2014 se consolidó una segunda etapa: los Censos Económicos permitieron la primera actualización total del directorio con datos oportunos (DENUE Interactivo 01/2015, 4 926 061 negocios) y definitivos (01/2016, 5 004 986). En ese mismo año se formalizó el RENEM como columna vertebral de la producción estadística económica y el DENUE quedó definido explícitamente como su segmento público. La cifra publicada entonces incorporó una depuración de 1 584 927 negocios inactivos detectados por el personal censor de 2014.

Un tercer ciclo comenzó con los Censos Económicos 2019, que actualizaron las ediciones 11/2019 (5 447 591), 04/2020 (5 487 061) y 11/2020 (5 546 665). El cuarto ciclo, vinculado a los Censos Económicos 2024, ha marcado los mayores incrementos absolutos en la historia del directorio.

| Edición | Fecha | Unidades económicas | Insumo principal |
|---|---|---:|---|
| 1 | Jul 2010 | 4 331 202 | Censos Económicos 2009, SCIAN 2007 |
| 6 | Ene 2015 | 4 926 061 | Censos Económicos 2014 preliminares |
| 7 | Ene 2016 | 5 004 986 | Censos Económicos 2014 definitivos |
| 14 | Nov 2019 | 5 447 591 | Censos Económicos 2019 preliminares |
| 16 | Nov 2020 | 5 546 665 | Censos Económicos 2019 definitivos |
| 21 | Nov 2023 | 5 541 076 | Verificación censal, marco 2023 |
| 22 | May 2024 | 5 564 613 | Registros administrativos, RENEM |
| 23 | Nov 2024 | 6 058 548 | Censos Económicos 2024 preliminares |
| 24 | May 2025 | 6 097 675 | Base censal 2024 a marzo de 2025 |
| 25 | May 2026 | 6 138 075 | RENEM, EEN y CE 2024 |

Fuente: INEGI, Documento metodológico DENUE 05/2026, anexo A.

Entre la edición 22 (05/2024) y la 23 (11/2024) se registró el salto más significativo del último ciclo, con la incorporación de casi medio millón de unidades captadas por los Censos Económicos 2024. Las tres ediciones siguientes muestran incrementos moderados: 39 127 unidades entre 11/2024 y 05/2025, y 40 400 entre 05/2025 y 05/2026, coherentes con la fase de mantenimiento posterior al operativo censal.

## Relación con los Censos Económicos 2024 y con otras infraestructuras

El DENUE y los Censos Económicos son productos distintos, aunque comparten insumos. Los Censos Económicos 2024, cuyos resultados definitivos publicó el INEGI el 24 de julio de 2025 en el Reporte de Resultados 22/25, contabilizan 7 093 631 establecimientos y 5 468 180 unidades económicas con año de referencia 2023, ocupadas por 36 592 279 personas. La brecha entre las cifras censales y el DENUE 05/2026 se explica por diferencias metodológicas: los censos capturan actividad económica en un momento fijo, integran variables económicas exhaustivas y contienen datos confidenciales; el DENUE es una cartografía dinámica del subuniverso público que excluye ciertas actividades y depura continuamente registros inactivos, y sus periodos de referencia varían por fecha de incorporación —las unidades registradas entre julio 2010 y mayo de 2025 remiten a 2024, mientras que las de la edición 05/2026 remiten a 2025—.

La complementariedad también se manifiesta en el flujo estadístico. Los grandes hallazgos de los Censos Económicos 2024 —crecimiento de la informalidad de las unidades del sector privado y paraestatal de 62.6% en 2018 a 64.3% en 2023, y presencia laboral de 43.2% mujeres y 56.8% hombres— dependen del RENEM como marco muestral y de la georreferenciación con la que opera el DENUE. En sentido inverso, cada ciclo censal renueva el marco de unidades sobre el que el directorio publica en las cinco ediciones semestrales subsecuentes.

## Difusión, datos abiertos y usos

El DENUE se difunde por múltiples canales. El sistema de consulta principal, en el sitio del Instituto, permite descarga masiva total o filtrada; las apps móviles ofrecen consultas geolocalizadas; y las plataformas Mapa Digital de México, Espacio y Datos de México y Malla Geoestadística integran el directorio como capa adicional. La API del DENUE, orientada a desarrolladores, expone consultas por entidad federativa, municipio, actividad económica y tamaño, y se actualiza en el mismo momento en que se refresca la base subyacente.

El uso reportado por el propio INEGI —1 089 068 visitas en 2025— sitúa al DENUE en la franja alta de sus productos digitales. La utilidad documentada abarca estudios de mercado, identificación de proveedores y competidores, planeación de expansión, políticas públicas de fomento económico y análisis de siniestros y desastres. En la edición 05/2026, el propio comunicado destaca aplicaciones para identificar potenciales proveedores de autopartes: el directorio reporta 2 229 establecimientos manufactureros dedicados a esa actividad, insumo estratégico dado que las autopartes figuran entre los principales rubros de importación en el primer trimestre de 2026.

## Conclusiones

1. **El DENUE 05/2026 confirma la maduración de la infraestructura estadística empresarial mexicana.** Quince años y veinticinco ediciones después de la primera publicación, el directorio cubre 6 138 075 unidades económicas en 32 entidades y 2 478 municipios, con un padrón que casi se ha duplicado respecto a las 4.33 millones de la edición inaugural de julio de 2010.
2. **La arquitectura RENEM-DENUE ordena la producción estadística económica del país.** El RENEM funciona como registro maestro y marco muestral de las Encuestas Económicas Nacionales y los Censos Económicos, y el DENUE difunde la parte no confidencial, con la CLEE como identificador único blindado por el DOF del 27 de agosto de 2019.
3. **La actualización semestral combina cuatro estrategias.** El operativo anual de grandes establecimientos, la depuración parcial de micro, pequeñas y medianas empresas, la actualización continua a cargo de los informantes y el levantamiento quinquenal de los Censos Económicos sostienen la comparabilidad y frescura del padrón.
4. **La coordinación con Banxico ilustra el diseño no redundante del SNIEG.** El traslado de 51 223 cajeros automáticos a la aplicación UbiCajeros del Banco de México muestra cómo el RENEM cede fuentes específicas a la institución con mayor competencia, sin sacrificar accesibilidad al usuario.
5. **La divergencia entre las cifras del DENUE y las de los Censos Económicos 2024 no denota inconsistencia sino diseño.** Los 7.09 millones de establecimientos censales y los 6.14 millones del directorio responden a periodos de referencia, coberturas sectoriales y momentos de captación distintos. El próximo hito de la serie será la edición 11/2026, prevista para el 25 de noviembre.
