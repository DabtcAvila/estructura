---
title: "Encuesta Mensual de Servicios (EMS): arquitectura estadística del sector terciario y lectura 2024-2026"
description: "La EMS del INEGI mide los servicios privados no financieros en México: 61 dominios nacionales, 11,909 empresas en muestra y una serie 2018 que registra desaceleración en 2026."
date: 2026-11-08
category: datos
tags:
  - INEGI
  - EMS
  - Sector servicios
  - SCNM
  - Indicadores de coyuntura
author: Estructura
draft: false
sources:
  - "INEGI — Encuesta Mensual de Servicios, boletín de indicador 631/26, agosto de 2026, 21 de octubre de 2026"
  - "INEGI — Encuesta Mensual de Servicios, boletín de indicador 88/26, diciembre de 2025, 20 de febrero de 2026"
  - "INEGI — Encuesta Mensual de Servicios, boletines mensuales enero a agosto de 2026"
  - "INEGI — Ficha metodológica de la EMS, serie base 2018=100, rediseño 2023"
  - "INEGI — Sistema de Clasificación Industrial de América del Norte (SCIAN) 2018"
  - "INEGI — Censos Económicos 2019, Resultados Definitivos"
  - "INEGI — Sistema de Cuentas Nacionales de México, Producto Interno Bruto trimestral, cuarto trimestre de 2025"
  - "SNIEG — Acuerdo por el que se determina la EMS como Información de Interés Nacional, 2016"
  - "INEGI — Banco de Información Económica (BIE), indicadores económicos de coyuntura"
---

## Contexto

El sector servicios concentra la mayor parte del Producto Interno Bruto de México. Con datos del Sistema de Cuentas Nacionales (SCNM) correspondientes al cuarto trimestre de 2025, el comercio al por menor aportó 10.7% del PIB a precios básicos, seguido por el comercio al por mayor con 9.5%, los servicios inmobiliarios con 9.1% y el transporte, correos y almacenamiento con 8.2 por ciento. Sumadas todas las ramas terciarias, la actividad de servicios supera dos terceras partes del valor agregado nacional.

Medir este agregado con oportunidad es, por tanto, condición necesaria para diagnosticar la coyuntura económica. El Instituto Nacional de Estadística y Geografía (INEGI) publica con tal fin la Encuesta Mensual de Servicios (EMS), que genera indicadores de ingresos, personal ocupado, remuneraciones y gastos para los servicios privados no financieros. Su resultado más reciente, correspondiente a agosto de 2026, apareció el 21 de octubre y permite documentar un enfriamiento gradual del segmento en lo que va del año.

## Qué mide la EMS

La EMS integra indicadores de coyuntura sobre los servicios privados no financieros. Esta delimitación es relevante: excluye por diseño al sector 52 (servicios financieros y de seguros) y al sector 93 (actividades legislativas, gubernamentales, de impartición de justicia y de organismos internacionales y extraterritoriales), y acota su cobertura a empresas y establecimientos clasificados en los sectores 48 a 81 del SCIAN, con la salvedad del sector 52.

La cobertura temática comprende seis variables: días trabajados, personal ocupado, horas trabajadas, remuneraciones, consumo de bienes y servicios, e ingresos por suministro de bienes y servicios. De estas, el INEGI publica mensualmente cuatro indicadores sintéticos: ingresos totales, personal ocupado total, gastos totales y remuneraciones totales. Los cuatro se reportan en términos reales cuando corresponde, con cifras originales y desestacionalizadas.

Los dominios de estudio de la serie vigente son 61 a nivel nacional y 88 por entidad federativa. En el plano nacional, 48 dominios cuentan con diseño probabilístico y 13 con diseño no probabilístico; en el plano estatal, la proporción es 52 probabilísticos frente a 36 no probabilísticos. El marco muestral nacional se compone de 1,810,775 unidades económicas, de las cuales se encuestan 11,909 cada mes. El marco estatal lo integran 767,947 unidades, con muestra de 5,407 unidades.

## Trayectoria histórica

La EMS inició operaciones en 1993 con cobertura de 79 clases de actividad económica. La reformulación de 2004 redujo esa cobertura a 57 ramas y modificó la unidad de análisis. En 2011 el rediseño amplió el alcance a 105 dominios de estudio. En 2016, en línea con la Ley del Sistema Nacional de Información Estadística y Geográfica, la EMS fue determinada como Información de Interés Nacional (IIN), lo que implica obligaciones de calidad, difusión y continuidad reforzadas.

El salto siguiente ocurrió en 2021, cuando el programa estadístico incorporó la desagregación por entidad federativa manteniendo los cuatro indicadores nacionales. En 2023 se publicó la serie base 2018=100 con un diseño muestral renovado: la cobertura nacional pasó a 61 dominios y la estatal a 88, y los ponderadores se recalcularon a partir de la estructura porcentual de ingresos, personal ocupado y remuneraciones de los Censos Económicos 2019.

| Año  | Hito                                             | Cobertura                          |
|------|--------------------------------------------------|------------------------------------|
| 1993 | Inicio de la EMS                                 | 79 clases de actividad             |
| 2004 | Reformulación                                    | 57 ramas de actividad              |
| 2011 | Rediseño                                         | 105 dominios                       |
| 2016 | Declaración de Información de Interés Nacional   | Igual                              |
| 2021 | Oferta por entidad federativa                    | 105 dominios nacional; preliminar estatal |
| 2023 | Nueva serie base 2018=100                        | 61 dominios nacional; 88 estatal   |

La continuidad metodológica se preservó en términos de variables, pero las comparaciones de largo plazo deben respetar el corte 2023, cuando cambió el marco y la estructura de ponderación.

## Cómo se construyen los índices

Para el índice nacional por sector y para el índice agregado de los servicios privados no financieros, el INEGI calcula un índice ponderado tipo Laspeyres de base y ponderación fija. Los ponderadores se derivan de los Censos Económicos 2019: la proporción relativa de cada dominio en las variables objetivo (ingresos, personal ocupado y remuneraciones) determina su peso en el índice agregado. Para los principales sectores por entidad federativa se utiliza el Método de Agregación Simple, que suma directamente las variables en cada periodo.

El ajuste estacional se realiza con el paquete X-13ARIMA-SEATS, estándar internacional para esta operación. Las especificaciones de los modelos están disponibles en el Banco de Información Económica (BIE) del INEGI, lo que permite replicar la desestacionalización desde fuera del Instituto. La ventana de publicación es de aproximadamente 51 días posteriores al mes de referencia, inferior al rezago típico del PIB trimestral y comparable al de otras encuestas de coyuntura como la EMIM (industria manufacturera) o la EMEC (empresas comerciales).

Los dominios con diseño probabilístico cuentan con indicadores de precisión estadística (error estándar, coeficiente de variación e intervalos de confianza); los dominios con diseño no probabilístico reportan nivel de cobertura como indicador de calidad, criterio compatible con lineamientos del propio SNIEG para estimaciones censales dirigidas.

## Lectura sectorial: agosto de 2026

En agosto de 2026, con cifras desestacionalizadas y respecto al mes previo, los ingresos totales reales de los servicios privados no financieros crecieron 0.3%, los gastos totales ascendieron también 0.3%, el personal ocupado se mantuvo sin variación y las remuneraciones totales disminuyeron 0.3 por ciento. En su comparación anual y con la misma base ajustada, los ingresos subieron 0.6% y las remuneraciones 0.5%, mientras que el personal ocupado cayó 1.8% y los gastos retrocedieron 0.9 por ciento.

La heterogeneidad sectorial es marcada. El cuadro siguiente resume las variaciones anuales desestacionalizadas por sector SCIAN.

| Sector SCIAN | Actividad                                              | Ingresos    | Personal ocupado |
|--------------|--------------------------------------------------------|-------------|------------------|
| 48-49        | Transportes, correos y almacenamiento                  | -2.8%       | -2.1%            |
| 51           | Información en medios masivos                          | +6.3%       | -1.9%            |
| 53           | Inmobiliarios y alquiler de bienes muebles e intangibles | -2.8%     | -1.3%            |
| 54           | Profesionales, científicos y técnicos                  | -1.6%       | -1.2%            |
| 56           | Apoyo a los negocios y manejo de residuos              | -2.6%       | -4.5%            |
| 61           | Educativos                                             | +2.5%       | -1.9%            |
| 62           | Salud y asistencia social                              | +1.1%       | +0.2%            |
| 71           | Esparcimiento culturales y deportivos                  | -2.1%       | -0.1%            |
| 72           | Alojamiento temporal y preparación de alimentos        | -5.3%       | -2.6%            |
| 81           | Otros servicios excepto gubernamentales                | +30.4%      | 0.0%             |

Dos lecturas son relevantes. Primero, la caída de 5.3% en ingresos del sector 72 (alojamiento y alimentos) indica un menor dinamismo del gasto discrecional de los hogares y del turismo doméstico, consistente con el ajuste reciente del consumo privado. Segundo, el ascenso de 30.4% en el sector 81 (otros servicios excepto gubernamentales) requiere cautela interpretativa: se trata de un sector heterogéneo que incluye reparación y mantenimiento, servicios personales y organizaciones civiles, con volatilidad alta y peso reducido en el agregado terciario.

## El acumulado enero-agosto 2026

Las cifras originales del periodo enero-agosto de 2026, comparadas con el mismo tramo de 2025, muestran un sector terciario en contracción moderada pero persistente.

| Indicador                                                 | Variación anual acumulada |
|-----------------------------------------------------------|---------------------------|
| Ingresos totales por suministro de bienes y servicios     | -1.5%                     |
| Personal ocupado total                                    | -1.9%                     |
| Gastos totales por consumo de bienes y servicios          | -1.3%                     |
| Remuneraciones totales                                    | +0.4%                     |

El contraste entre ingresos y remuneraciones revela un ajuste vía productividad y empleo antes que vía costo laboral unitario. Esto es coherente con la trayectoria observada en la industria manufacturera según la EMIM y con la señal del Indicador Global de la Actividad Económica (IGAE): el enfriamiento del ciclo recae primero sobre el volumen y el personal, mientras los salarios nominales siguen avanzando por indexación y por incrementos del salario mínimo.

En diciembre de 2025, de hecho, el boletín 88/26 reportó caídas mensuales desestacionalizadas de 0.7% en ingresos, 0.2% en personal ocupado y 4.8% en gastos, con remuneraciones a la baja 0.1 por ciento. En comparación anual desestacionalizada, el cierre de 2025 mostró ingresos al alza 1.0%, remuneraciones 3.6% y gastos 3.2%, con personal ocupado en retroceso 0.7 por ciento. El cambio de ritmo entre el cierre de 2025 y los primeros ocho meses de 2026 es documentable mes a mes en el BIE.

## Dimensión federativa

La EMS publica desde 2021 variaciones por entidad para los principales sectores presentes en cada estado. En el boletín correspondiente a agosto de 2026, los sectores destacados son el 51 (información en medios masivos) y el 72 (alojamiento temporal y preparación de alimentos y bebidas).

La dispersión territorial es notable. En el sector 51, Guerrero (+52.8%), Colima (+50.4%), Puebla (+44.7%) y Chiapas (+44.0%) registraron los mayores incrementos anuales en ingresos, mientras Aguascalientes (-7.3%) fue la única entidad con caída. En el sector 72, el panorama se invierte: Baja California Sur (-20.6%), Baja California (-17.5%), Guanajuato (-16.7%) y Quintana Roo (-13.6%) mostraron las contracciones más pronunciadas, en contraste con los avances anuales de Durango (+16.3%), Chiapas (+10.4%) y Tabasco (+7.7%).

Esta heterogeneidad es un recordatorio operativo: el agregado nacional mezcla dinámicas regionales divergentes. Entidades turísticas de alta temporada muestran contracciones significativas en alojamiento y alimentos en agosto de 2026, en tanto que entidades con mayor concentración de servicios digitales y producción de contenidos capturan el repunte del sector 51.

## Lectura metodológica: lo que la EMS no captura

Tres acotaciones son esenciales para no sobreinterpretar los resultados. En primer lugar, la EMS deja fuera los servicios financieros (sector 52), que son medidos por otras fuentes del SCNM y por los indicadores de la Comisión Nacional Bancaria y de Valores. Segundo, el sector 93 (actividades gubernamentales) tampoco forma parte del universo; para gobierno general se utiliza la información del PIB y los censos nacionales de gobierno.

Tercero, la cobertura se limita a empresas y establecimientos con razón social formalmente registrada en los marcos poblacionales del INEGI. Esto significa que el autoempleo informal, los pequeños prestadores de servicios no incorporados y la economía de plataformas digitales sólo son captados parcialmente, y en la medida en que las empresas administradoras aparecen en el marco. Las cifras del sector informal en servicios deben leerse con la ENOE y la cuenta satélite correspondiente.

El complemento obligado de la EMS son la EMEC (empresas comerciales), la EMIM (industria manufacturera), la Encuesta Nacional de Construcción (ENEC) y los Indicadores Globales de la Actividad en los Servicios (IGAS) que integra el INEGI. En conjunto, estos instrumentos permiten triangular la lectura del sector terciario y verificar la consistencia con el agregado del PIB trimestral.

## Conclusiones

1. **La EMS es el indicador de coyuntura más oportuno del sector terciario mexicano**. Con un rezago promedio de 51 días, cubre 61 dominios nacionales y 88 estatales, sobre una muestra nacional de 11,909 unidades económicas.
2. **La serie base 2018=100 refleja una desaceleración del sector en 2026**. El acumulado enero-agosto reporta contracciones de 1.5% en ingresos y 1.9% en personal ocupado, con remuneraciones todavía al alza (+0.4%).
3. **La heterogeneidad sectorial y territorial es elevada**. Información en medios masivos (+6.3% anual desestacionalizado) convive con alojamiento y alimentos (-5.3%), y entidades como Baja California Sur registran caídas de doble dígito en turismo que contrastan con avances en estados interiores.
4. **La EMS no mide el universo completo del terciario**. Sin servicios financieros, sin gobierno y con cobertura parcial del sector informal, su lectura debe complementarse con el PIB trimestral, las encuestas hermanas (EMEC, EMIM, ENEC) y los indicadores laborales de la ENOE.

Los boletines mensuales, tabulados desagregados y especificaciones metodológicas están disponibles en el portal del INEGI y en el Banco de Información Económica, con cobertura actualizada hasta agosto de 2026 en la publicación del 21 de octubre.
