---
title: "Pobreza multidimensional 2024: la primera medición del INEGI tras la extinción del CONEVAL"
description: "Análisis del primer ejercicio de medición de la pobreza multidimensional realizado por el INEGI tras la extinción del CONEVAL, con datos de la ENIGH 2024."
date: 2026-05-16
category: datos
tags:
  - Pobreza
  - INEGI
  - CONEVAL
  - ENIGH
  - Desarrollo social
author: Estructura
draft: false
sources:
  - "INEGI — Comunicado de prensa 118/25: Pobreza multidimensional, 13 de agosto de 2025"
  - "INEGI — Nota técnica: Pobreza multidimensional (PM) 2024, 13 de agosto de 2025"
  - "INEGI — Pobreza multidimensional 2024: presentación de resultados, agosto de 2025"
  - "DOF — Decreto de reforma constitucional en materia de simplificación orgánica, 20 de diciembre de 2024"
  - "DOF — Decreto por el que se reforman, adicionan y derogan diversas disposiciones de la Ley General de Desarrollo Social y de leyes secundarias, en vigor desde el 17 de julio de 2025"
  - "CONEVAL — Metodología para la Medición Multidimensional de la Pobreza en México, tercera edición"
  - "INEGI — Encuesta Nacional de Ingresos y Gastos de los Hogares (ENIGH) 2024, comunicado de prensa, 30 de julio de 2025"
  - "INEGI — Boletín de indicador 522/25: Líneas de pobreza por ingresos, 11 de septiembre de 2025"
  - "BBVA Research — México: notable avance en la reducción de la pobreza, 20 de agosto de 2025"
  - "México ¿Cómo Vamos? — Medición de pobreza 2024 baja a 29.6 % de la población, agosto de 2025"
---

## Contexto

El 13 de agosto de 2025, el Instituto Nacional de Estadística y Geografía (INEGI) dio a conocer la medición de la pobreza multidimensional correspondiente a 2024. El comunicado 118/25 fue el primer ejercicio de esta naturaleza emitido por el Instituto tras la extinción del Consejo Nacional de Evaluación de la Política de Desarrollo Social (CONEVAL), órgano que entre 2008 y 2022 había realizado la medición oficial con periodicidad bienal. La nueva responsabilidad institucional derivó de la reforma constitucional publicada en el Diario Oficial de la Federación (DOF) el 20 de diciembre de 2024 y de las reformas a leyes secundarias que entraron en vigor el 17 de julio de 2025.

Más allá del cambio de adscripción, la publicación de los resultados de 2024 ofreció una lectura de continuidad estadística poco habitual en transiciones institucionales. La serie comparable de cinco puntos —2016, 2018, 2020, 2022 y 2024— quedó preservada, y el INEGI agregó instrumentos de transparencia que la medición no incluía antes: errores estándar para todos los indicadores y programas de cálculo replicables en Stata, R y Python. El presente análisis examina la arquitectura institucional del traslado, las adecuaciones técnicas que requirió, los resultados nacionales y por entidad, y los aspectos del bienestar económico que determinaron el descenso observado.

## La arquitectura institucional de la transición

### Reforma constitucional y leyes secundarias

La reforma de diciembre de 2024 al artículo 26, apartado B, de la Constitución Política de los Estados Unidos Mexicanos incorporó la atribución de medir la pobreza multidimensional y de realizar la evaluación integral de la política de desarrollo social al sistema nacional de información estadística y geográfica. La reglamentación secundaria modificó, entre otras, la Ley General de Desarrollo Social (LGDS), la Ley Federal de Presupuesto y Responsabilidad Hacendaria y la Ley General de Contabilidad Gubernamental. El paquete legislativo fue aprobado por la Cámara de Diputados con 353 votos a favor y 126 en contra, y por el Senado con 73 a favor y 34 en contra, y mandató la extinción del CONEVAL y la transferencia de sus recursos materiales, créditos, derechos y obligaciones al INEGI en un plazo de 90 días para la armonización normativa.

La discusión legislativa concentró las objeciones en la preservación de la independencia técnica. Legisladores de oposición plantearon que una institución del Ejecutivo —aun con autonomía constitucional— absorbiera funciones de evaluación de su propia política social. La defensa del proyecto, encabezada por el oficialismo, argumentó que el INEGI cuenta con un marco de autonomía técnica y de gestión, con la fortaleza estadística necesaria para producir las mediciones y con el respaldo del Sistema Nacional de Información Estadística y Geográfica (SNIEG) para auditar el proceso.

### Continuidad metodológica como principio rector

Para asegurar la comparabilidad de la serie, el INEGI mantuvo los Lineamientos y criterios generales para la definición, identificación y medición de la pobreza que había emitido el CONEVAL, junto con la Metodología para la Medición Multidimensional de la Pobreza en México en su tercera edición. La medición conservó los tres espacios analíticos —derechos sociales, bienestar económico y contexto territorial— y los seis indicadores de carencia social: rezago educativo, acceso a los servicios de salud, acceso a la seguridad social, calidad y espacios de la vivienda, acceso a los servicios básicos en la vivienda y acceso a la alimentación nutritiva y de calidad.

El criterio de identificación de la pobreza no cambió: una persona se encuentra en situación de pobreza multidimensional cuando presenta al menos una carencia social y un ingreso inferior a la Línea de Pobreza por Ingresos (LPI) que corresponde a su ámbito de residencia. La pobreza extrema requiere tres carencias o más e ingresos por debajo de la Línea de Pobreza Extrema por Ingresos (LPEI), equivalente al valor monetario de la canasta alimentaria por persona al mes.

## Adecuaciones técnicas para la ENIGH 2024

La Encuesta Nacional de Ingresos y Gastos de los Hogares 2024, publicada el 30 de julio de 2025, fue la fuente principal de la medición. El instrumento de captación fue rediseñado desde 2023 en tres frentes: actualización de las preguntas sobre acceso a servicios de salud ante los cambios institucionales del sector, alineación con el Censo de Población y Vivienda 2020 y con encuestas como la ENADID, la ENVI y la ENDUTIH, y adopción de la Clasificación del Consumo Individual por Finalidades (CCIF) en línea con las recomendaciones del Grupo de Canberra y de la CEPAL. Las modificaciones se sometieron a consulta pública del 19 de julio al 15 de agosto de 2023, con 266 aportaciones de 38 instituciones, y a una prueba piloto realizada en 4 523 viviendas entre noviembre y diciembre del mismo año. El levantamiento definitivo ocurrió entre el 11 de agosto y el 18 de noviembre de 2024 sobre una muestra de 105 718 viviendas.

La principal adecuación procedimental se centró en la pregunta de acceso a servicios de salud, sobre la que el INEGI aplicó pruebas cognitivas y estadísticas para garantizar la equivalencia con las series previas. Esta decisión resulta crítica porque el sector salud concentra la mayor parte de la volatilidad del indicador entre 2018 y 2022.

## Resultados nacionales: la caída más pronunciada desde 2016

En 2024, 29.6 % de la población —38.5 millones de personas— se encontraba en situación de pobreza multidimensional. La caída respecto a 2022 fue de 6.8 puntos porcentuales y de 8.3 millones de personas en términos absolutos, la mayor reducción registrada en la serie iniciada en 2016. La pobreza extrema descendió de 7.1 a 5.3 % en el mismo lapso: 7.0 millones de personas frente a 9.1 millones en 2022.

| Indicador | 2016 | 2018 | 2020 | 2022 | 2024 |
|----------|------|------|------|------|------|
| Pobreza (%) | 43.2 | 41.9 | 43.9 | 36.3 | 29.6 |
| Pobreza extrema (%) | 7.2 | 7.0 | 8.5 | 7.1 | 5.3 |
| Pobreza (millones) | 52.2 | 51.9 | 55.7 | 46.8 | 38.5 |
| Pobreza extrema (millones) | 8.7 | 8.7 | 10.8 | 9.1 | 7.0 |
| Vulnerable por carencias (%) | 25.3 | 26.4 | 23.7 | 29.4 | 32.2 |
| Vulnerable por ingresos (%) | 7.6 | 8.0 | 8.9 | 7.2 | 5.8 |
| No pobre y no vulnerable (%) | 24.0 | 23.7 | 23.5 | 27.1 | 32.5 |

Fuente: INEGI, ENIGH 2016-2024.

Un dato relevante atraviesa la lectura del descenso: la población vulnerable por carencias sociales, definida como aquella con ingresos suficientes pero con al menos una carencia social, creció 2.7 puntos porcentuales para ubicarse en 32.2 % (41.9 millones de personas). Este desplazamiento sugiere que una parte del descenso de la pobreza está asociada al cruce de la línea de ingresos, no a la cobertura efectiva de derechos sociales. La población no pobre y no vulnerable —el segmento sin carencias y con ingresos por encima de la LPI— pasó de 27.1 a 32.5 % de la población. La distribución entre estos compartimentos define la naturaleza estructural del avance.

## Desempeño por carencia social

Las seis carencias sociales se redujeron entre 2022 y 2024. La de mayor descenso fue la carencia por acceso a servicios de salud, que pasó de 39.1 a 34.2 % de la población (de 50.4 a 44.5 millones de personas). El indicador sigue, sin embargo, muy por encima del 16.2 % registrado en 2018, antes de la sustitución del Seguro Popular por el modelo IMSS-Bienestar. La carencia por acceso a la seguridad social, históricamente la más alta del sistema, descendió dos puntos porcentuales: de 50.2 a 48.2 %, y abarcó a 62.7 millones de personas en 2024.

| Carencia | 2018 | 2022 | 2024 | Variación 2022-2024 |
|---------|------|------|------|---------------------|
| Rezago educativo (%) | 19.0 | 19.4 | 18.6 | -0.8 pp |
| Servicios de salud (%) | 16.2 | 39.1 | 34.2 | -4.9 pp |
| Seguridad social (%) | 53.5 | 50.2 | 48.2 | -2.0 pp |
| Calidad y espacios de vivienda (%) | 11.0 | 9.1 | 7.9 | -1.2 pp |
| Servicios básicos en vivienda (%) | 19.6 | 17.8 | 14.1 | -3.7 pp |
| Alimentación nutritiva y de calidad (%) | 22.2 | 18.2 | 14.4 | -3.8 pp |

Fuente: INEGI, ENIGH 2018-2024.

El rezago educativo —18.6 % de la población, 24.2 millones de personas— mostró la disminución más modesta. La carencia por acceso a la alimentación nutritiva y de calidad cayó 3.8 puntos porcentuales y se ubicó en 14.4 %, su nivel más bajo en la serie. La carencia por servicios básicos en la vivienda descendió de 17.8 a 14.1 %, con una reducción casi generalizada: solo Colima registró un aumento entre las 32 entidades federativas. La interpretación de la dinámica de salud requiere prudencia: el INEGI subraya en su nota técnica que el rediseño del cuestionario sobre acceso a servicios de salud se sometió a pruebas estadísticas y cognitivas para mantener la comparabilidad, lo que reduce —sin eliminar— el riesgo de que parte del descenso responda a cambios en el instrumento. Diversas organizaciones de la sociedad civil solicitaron al INEGI documentación adicional sobre el ajuste, en agosto de 2025.

## Heterogeneidad geográfica

La distribución estatal preservó el patrón observado durante toda la serie. Las cinco entidades con mayores porcentajes de pobreza multidimensional fueron Chiapas (66.0 %), Guerrero (58.1 %), Oaxaca (51.6 %), Veracruz (44.5 %) y Puebla (43.4 %). En el extremo opuesto, Baja California (9.9 %), Baja California Sur (10.2 %), Nuevo León (10.6 %), Coahuila (12.4 %) y Sonora (14.1 %) registraron los niveles más bajos. La brecha entre la entidad con mayor pobreza y la entidad con menor pobreza ascendió a 56.1 puntos porcentuales, una distancia consistente con la heterogeneidad histórica del país.

En pobreza extrema, las entidades con mayor incidencia fueron de nuevo Chiapas (27.1 %), Guerrero (21.3 %), Oaxaca (16.3 %), Veracruz (8.8 %) y Puebla (7.3 %). Las cifras de Baja California (0.4 %), Nuevo León (0.5 %), Aguascalientes (0.6 %), Coahuila (0.8 %) y Colima (1.0 %) corresponden al segmento bajo de la distribución, aunque el INEGI advierte sobre la precisión moderada de algunas estimaciones por su elevado coeficiente de variación. La concentración de la pobreza extrema en el sur-sureste no se modificó respecto a 2022, lo que confirma la persistencia de un patrón regional cuya superación exige instrumentos distintos al ingreso corriente.

## Bienestar económico y papel de las transferencias

El descenso de la pobreza se explica de manera importante por la dinámica del ingreso. La proporción de población con ingreso inferior a la LPI pasó de 43.5 a 35.4 % entre 2022 y 2024, y el número absoluto descendió de 56.1 a 46.0 millones de personas. La población con ingreso inferior a la LPEI —es decir, sin recursos para cubrir la canasta alimentaria— cayó de 12.1 a 9.3 % de la población, de 15.5 a 12.1 millones. Las líneas de pobreza son actualizadas mensualmente por el INEGI con el Índice Nacional de Precios al Consumidor. En agosto de 2024, mes de referencia para la ENIGH, la LPI urbana se ubicó en 4 564.96 pesos por persona al mes y la LPI rural en 3 296.89 pesos.

Ejercicios de descomposición publicados tras la presentación oficial estimaron que las transferencias monetarias del gobierno federal —en particular la Pensión para el Bienestar de las Personas Adultas Mayores, las becas Benito Juárez y los programas productivos— evitaron que aproximadamente 4.2 millones de personas adicionales se ubicaran por debajo de la LPI en 2024. La incidencia de la pobreza, sin transferencias, habría sido de alrededor de 32.8 % en lugar del 29.6 % observado, según los cálculos divulgados por organizaciones especializadas. Análisis paralelos del sector privado, entre ellos los publicados por BBVA Research, señalan que la combinación del incremento real del salario mínimo, la recuperación del ingreso laboral medido por el ITLP y la expansión de las transferencias monetarias explica la mayor parte del descenso.

## Conclusiones

1. La pobreza multidimensional descendió de 36.3 a 29.6 % entre 2022 y 2024, equivalente a una caída de 8.3 millones de personas, y la pobreza extrema bajó de 7.1 a 5.3 %, con 2.1 millones menos en esa condición.
2. El INEGI absorbió la atribución de medir la pobreza tras la reforma constitucional del 20 de diciembre de 2024 y la entrada en vigor de las leyes secundarias el 17 de julio de 2025; conservó la metodología del CONEVAL e incorporó por primera vez errores estándar y programas de cálculo abiertos en Stata, R y Python para todos los indicadores.
3. La carencia por acceso a servicios de salud registró la mayor reducción —de 39.1 a 34.2 % de la población— pero su nivel sigue siendo más del doble del observado en 2018; la carencia por seguridad social, con 48.2 %, continúa como el indicador más alto de la medición.
4. El crecimiento de la población vulnerable por carencias sociales en 2.7 puntos porcentuales advierte que parte del descenso de la pobreza proviene del cruce de la línea de ingresos, no de la ampliación efectiva de la cobertura de derechos sociales.
5. La distribución estatal mantiene un patrón estructural con Chiapas (66.0 %), Guerrero (58.1 %) y Oaxaca (51.6 %) en el extremo alto, y la concentración regional sur-sureste no se altera; la agenda de política pública hacia 2026-2030 enfrentará el reto de traducir la mejora de ingresos en cobertura sostenida de seguridad social, salud y educación.
