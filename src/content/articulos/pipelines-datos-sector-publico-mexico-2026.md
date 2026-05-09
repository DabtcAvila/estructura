---
title: "Pipelines de datos en el sector público mexicano: arquitectura, gobernanza y retos"
description: "Estado de la infraestructura de datos del sector público en México: marcos institucionales, interoperabilidad, estándares y mejores prácticas con referencias OCDE y BID."
date: 2026-05-09
category: datos
tags:
  - Datos
  - Gobierno digital
  - Interoperabilidad
  - ATDT
  - Gobernanza
author: Estructura
draft: false
sources:
  - "OCDE y BID — Panorama de las Administraciones Públicas: América Latina y el Caribe 2024"
  - "OCDE y BID — Índice de Gobierno Digital de América Latina y el Caribe 2023, publicado en noviembre de 2024"
  - "BID — Guía para el Autodiagnóstico y Preparación de Estrategias de Datos en el Sector Público de América Latina y el Caribe"
  - "Diario Oficial de la Federación — Acuerdo por el que se expide la Estrategia Digital Nacional 2021-2024, 6 de septiembre de 2021"
  - "Diario Oficial de la Federación — Programa Sectorial de la Agencia de Transformación Digital y Telecomunicaciones 2025-2030"
  - "Agencia de Transformación Digital y Telecomunicaciones — Identidad digital Llave MX, lanzamiento 1 de enero de 2025"
  - "SHCP — Portal de Transparencia Presupuestaria y adopción del Open Fiscal Data Package"
  - "INAI — Política Nacional de Datos Abiertos (ConDATOS), noviembre de 2023"
  - "Banco Mundial — Índice GovTech 2024"
  - "Centro México Digital — Índice de Desarrollo Digital Estatal (IDDE) 2024 y 2025"
---

## Contexto

El sector público mexicano produce, custodia e intercambia volúmenes crecientes de datos a través de centenares de dependencias federales, estatales y municipales. La adecuada construcción de los procesos que mueven esa información —los pipelines de datos— condiciona desde la operación de programas sociales hasta la calidad de la estadística nacional, la transparencia fiscal y la prestación de trámites en línea. La conversación pública suele centrarse en el catálogo de portales abiertos disponibles, pero la solidez efectiva del sistema depende de variables menos visibles: la gobernanza de los datos, la interoperabilidad entre sistemas, la calidad de los registros administrativos y la sostenibilidad operativa de las cargas, transformaciones y exposiciones.

El presente análisis sintetiza el estado actual de la infraestructura de datos del sector público en México con referencias internacionales del Banco Interamericano de Desarrollo (BID) y de la Organización para la Cooperación y el Desarrollo Económicos (OCDE), y describe los componentes mínimos de un pipeline robusto, los ejemplos relevantes en operación, los principales retos institucionales y la posición que ocupa el país en los índices de comparación regional.

## Marco institucional reciente

La gobernanza federal de los datos cambió de manera significativa en el bienio 2024-2025. La Estrategia Digital Nacional 2021-2024, publicada en el Diario Oficial de la Federación el 6 de septiembre de 2021, había establecido cinco habilitadores: conectividad, inclusión digital, interoperabilidad, marco jurídico y datos abiertos. La política se complementaba con el Programa para la Transparencia, Gobierno Abierto y Datos Abiertos de la Administración Pública Federal (PTGAyDA) y, desde noviembre de 2023, con la Política Nacional de Datos Abiertos (ConDATOS), coordinada por el Instituto Nacional de Transparencia (INAI) y el Sistema Nacional de Transparencia.

A partir del 1 de enero de 2025 entró en operación la Agencia de Transformación Digital y Telecomunicaciones (ATDT) como dependencia del gabinete legal del Ejecutivo Federal, con la atribución explícita de unificar las capacidades tecnológicas del gobierno y conducir su transformación digital. Su Programa Sectorial 2025-2030 organiza esa función alrededor de la conectividad universal, la identidad digital y la sustitución de plataformas dispersas por servicios consolidados. Esa reorganización coincidió con la extinción del INAI y la reabsorción de sus funciones en otras instancias, lo que reabrió la discusión sobre el liderazgo institucional en materia de datos abiertos y gobernanza.

El cambio normativo más relevante a 2025 fue la aprobación, por el Senado de la República el 24 de junio, de la Ley Nacional para Eliminar Trámites Burocráticos. La reforma impone el uso obligatorio de la identidad digital Llave MX en los trámites de los tres órdenes de gobierno y articula la adopción progresiva de un expediente digital ciudadano. La medida obliga a un esfuerzo de homologación de catálogos, validación cruzada y exposición de servicios entre dependencias que, hasta hace pocos años, operaban con identificadores propios y formatos heterogéneos.

## Componentes mínimos de un pipeline público

La literatura del BID, en particular su Guía para el Autodiagnóstico y Preparación de Estrategias de Datos en el Sector Público de América Latina y el Caribe, organiza la cadena de valor de los datos en cinco etapas: captura, integración, transformación, almacenamiento y exposición. Cada una requiere capacidades técnicas, organizativas y normativas distintas, y la calidad del producto final depende de la más débil.

| Etapa | Actividad típica | Riesgos frecuentes |
|-------|------------------|--------------------|
| Captura | Registros operativos, formularios, sensores, encuestas | Duplicidad, ausencia de validaciones, sesgo de cobertura |
| Integración | Conexión entre sistemas, identificadores comunes | Falta de claves únicas, incompatibilidades de esquema |
| Transformación | Limpieza, enriquecimiento, anonimización | Pérdida de trazabilidad, errores no documentados |
| Almacenamiento | Bases relacionales, lagos, repositorios analíticos | Dependencia de proveedores, costos operativos opacos |
| Exposición | Portales, APIs, datasets descargables | Formatos cerrados, baja frecuencia de actualización |

La discusión arquitectónica contemporánea —*data warehouse*, *data lake*, *data lakehouse* y *data mesh*— se traslada a la administración pública con matices propios. La fragmentación institucional del Estado mexicano hace que el modelo descentralizado de *data mesh* —con dominios especializados que producen y consumen datos según estándares comunes— sea más realista que un repositorio único, siempre que existan reglas vinculantes de calidad, semántica e interoperabilidad. La ATDT ha planteado en su programa sectorial una lógica congruente con ese enfoque, en la que cada dependencia conserva su responsabilidad sobre los datos de su dominio pero queda obligada a interoperar mediante estándares definidos centralmente.

## Interoperabilidad: el cuello de botella regional

El Panorama de las Administraciones Públicas: América Latina y el Caribe 2024, elaborado conjuntamente por OCDE y BID, ofrece la base comparativa más actualizada. La publicación documenta que 86 % de los países de la región cuenta con al menos un método de autenticación de identidad digital, 61 % cuenta con un marco formal de interoperabilidad, 57 % opera redes compartidas, 48 % cuenta con herramientas comunes de pagos digitales y centros de datos compartidos, y 43 % dispone de un marco común para software de código abierto. La puntuación regional en la dimensión de "implementación" del Índice de Gobierno Digital alcanzó 38 %, frente a 65 % en el promedio OCDE.

México se ubicó en la décima posición de los diecinueve países evaluados en el Índice GovTech 2024 del Banco Mundial, con 62.5 puntos sobre 100, según los resúmenes técnicos disponibles. Las áreas de mejor desempeño son la disponibilidad de servicios en línea y la transparencia en compras públicas; las brechas más visibles, la ausencia de una estrategia nacional de inteligencia artificial y la fragmentación de la innovación pública en laboratorios y vehículos de financiamiento.

La interoperabilidad entre los identificadores administrativos es un caso ilustrativo. La CURP, gestionada por la Secretaría de Gobernación, y el Registro Federal de Contribuyentes (RFC), gestionado por el Servicio de Administración Tributaria (SAT), pueden cruzarse mediante consultas electrónicas, lo que reduce la fricción para servicios fiscales y de bienestar. Llave MX se apoya precisamente en esa cadena: para personas físicas la cuenta única se vincula a la CURP, mientras que para personas morales se ata al RFC. La operatividad real del mecanismo, sin embargo, depende de la calidad y consistencia de ambos catálogos, así como de la capacidad de los sistemas estatales y municipales para consumirlos.

## Estándares de exposición: del descargable al servicio

La política de datos abiertos del sector público mexicano alcanzó visibilidad internacional desde la primera mitad de la década de 2010. México fue uno de los primeros países en adherirse a la Carta Internacional de Datos Abiertos y mantiene presencia destacada en mediciones especializadas como el Open Data Barometer. ConDATOS, vigente desde 2023, definió principios de publicación proactiva, formatos estructurados y reusables, y un enfoque de valor público para priorizar conjuntos de datos.

La adopción de estándares técnicos verificables ha sido más selectiva. La Secretaría de Hacienda y Crédito Público integró el Open Fiscal Data Package en su Portal de Transparencia Presupuestaria, lo que facilita la comparación internacional del gasto y permite a periodistas e investigadores reutilizar datos sin reformatear. INEGI mantiene catálogos de datos abiertos de sus principales encuestas y censos, con metadatos consistentes y formatos no propietarios. IMSS publica datos abiertos a través de un portal específico que sirve de base, entre otros usos, a los seguimientos sectoriales del empleo formal.

La heterogeneidad subsiste en niveles intermedios. Los gobiernos estatales presentan diferencias amplias en frecuencia de actualización, granularidad y calidad de metadatos, conforme a las mediciones del Índice de Desarrollo Digital Estatal (IDDE) producido por Centro México Digital. El IDDE 2025 incorpora 75 indicadores agrupados en doce subpilares y reporta que aproximadamente 80 % de la población mexicana usa Internet con regularidad, pero sólo 37 % lo emplea para realizar trámites gubernamentales. La cobertura 5G alcanza 52.6 % de la población. Las cifras señalan que la barrera no es de conectividad sino de servicio: los pipelines no terminan de traducir disponibilidad de datos en uso ciudadano.

## Gobernanza: calidad, ciclo de vida y seguridad

La gobernanza de los datos en el sector público combina tres dimensiones: política, técnica y operativa. La política define quién tiene autoridad sobre qué dominios; la técnica establece estándares de calidad, seguridad y trazabilidad; la operativa asegura que los procesos funcionen de forma sostenida. El BID identifica como riesgos recurrentes la rotación del personal especializado, la dependencia de contratos de servicios con proveedores únicos y la falta de presupuesto recurrente para mantenimiento, distintos a los proyectos de implementación inicial.

La SHCP utiliza un Índice de Calidad en la Información (ICI) para evaluar los reportes que las entidades federativas y municipios presentan trimestralmente sobre el ejercicio de recursos federales transferidos a través del Sistema de Recursos Federales Transferidos (SRFT). El ICI penaliza inconsistencias, omisiones y formatos inadecuados, y opera como mecanismo público de incentivo a la calidad documental. El instrumento, en uso desde hace varios años, ofrece una plantilla replicable para otros dominios donde los reportes provienen de cientos de fuentes con capacidades técnicas heterogéneas.

La seguridad y la protección de datos personales constituyen el otro frente de la gobernanza. La extinción del INAI redistribuyó las funciones de protección de datos personales y reabrió el debate sobre el órgano garante. Para el sector público, la pregunta operativa es cómo articular las responsabilidades de oficiales de protección de datos, equipos de seguridad informática y áreas jurídicas dentro de cada dependencia, en un entorno donde la centralización tecnológica de la ATDT cambia el reparto previo de responsabilidades.

## Casos representativos en operación

Tres casos ilustran el estado actual y los retos típicos.

El Sistema de Información Económica del Banco de México, que publica miles de series con periodicidad consistente y metadatos completos, es un referente nacional en exposición de datos. La calidad técnica se sostiene sobre un equipo especializado, presupuesto recurrente y autonomía institucional, condiciones difíciles de replicar en dependencias con menor masa crítica.

INEGI cumple un papel similar para los datos sociodemográficos. La publicación de microdatos, factores de expansión y documentación metodológica acompaña las encuestas y censos, lo que permite reutilización académica y empresarial verificable. El reto identificado por evaluaciones independientes es la modernización de los formatos hacia APIs estandarizadas que faciliten la integración programática a gran escala.

El Portal de Transparencia Presupuestaria de la SHCP combina visualizaciones de alto nivel con descargas en formatos abiertos. La adopción del Open Fiscal Data Package y el reconocimiento internacional asociado al portal son evidencia de que un pipeline público puede alinearse con estándares globales sin sacrificar utilidad doméstica. La frecuencia de actualización y la granularidad por programa presupuestario, sin embargo, siguen siendo objeto de mejora continua.

## Brechas pendientes

El balance comparativo apunta a cuatro brechas estructurales. La primera es la ausencia de un catálogo maestro vinculante para identificadores y dominios clave (personas, empresas, predios, programas), que permita resolver con claridad las consultas cruzadas entre sistemas. La segunda es la sostenibilidad operativa: muchos pipelines viven en ciclos de proyecto, con financiamiento fragmentado y sin indicadores estables de servicio. La tercera es la gobernanza efectiva de datos personales en ausencia de un órgano garante autónomo robusto. La cuarta es la oferta de capital humano especializado, identificada por OCDE y BID como restricción central para la región.

## Conclusiones

1. **El sector público mexicano cuenta con activos relevantes en datos abiertos y exposición técnica**, encabezados por INEGI, Banxico y SHCP, pero opera con un nivel de interoperabilidad inferior al promedio OCDE y comparable al regional.
2. **La creación de la ATDT y la introducción de Llave MX desplazaron el centro de gravedad institucional**, con efectos potencialmente positivos sobre la integración de servicios pero con preguntas abiertas sobre la gobernanza de datos personales tras la extinción del INAI.
3. **La interoperabilidad real depende de catálogos maestros consistentes** —CURP, RFC y similares— y de la capacidad de los gobiernos subnacionales para consumirlos sin duplicación de información.
4. **La adopción de estándares internacionales es selectiva**: el Open Fiscal Data Package en SHCP es ejemplo positivo, pero el resto del aparato público avanza con velocidades diferenciadas, conforme al Índice de Gobierno Digital OCDE-BID 2023.
5. **Los pipelines públicos enfrentan riesgos de sostenibilidad operativa** asociados a financiamiento por proyecto, rotación de personal especializado y dependencia de proveedores únicos, según el diagnóstico del BID.
6. **La barrera ciudadana ya no es la conectividad sino el uso**: 80 % de la población utiliza Internet con regularidad, pero sólo 37 % lo emplea para trámites con el gobierno, brecha que requiere intervenciones del lado del servicio y no únicamente de la infraestructura.

La consolidación de un sistema nacional de datos en México exige tratar la materia como infraestructura crítica, con financiamiento recurrente, estándares vinculantes y mecanismos de medición pública de la calidad y la frecuencia de actualización. Las piezas técnicas existen y los referentes regionales son alcanzables; la condición es estabilidad institucional y capacidades organizativas para operar pipelines de manera sostenida más allá del ciclo de cada administración.
