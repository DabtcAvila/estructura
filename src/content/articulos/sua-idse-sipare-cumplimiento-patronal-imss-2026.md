---
title: "SUA, IDSE y SIPARE: arquitectura del cumplimiento patronal IMSS — balance 2026"
description: "Análisis de la plataforma de cumplimiento patronal del IMSS: SUA, IDSE, SIPARE, transición a e.firma y la incorporación de EMA y EBA al Buzón IMSS."
date: 2026-11-23
category: laboral
tags:
  - IMSS
  - SUA
  - IDSE
  - SIPARE
  - Buzon IMSS
  - Cumplimiento patronal
author: Estructura
draft: false
sources:
  - "IMSS — Portal del Sistema Único de Autodeterminación (SUA)"
  - "IMSS — Boletín 380/2026, transición a e.firma en IDSE"
  - "IMSS — Boletín 522/2026, consulta de EMA y EBA en Buzón IMSS, 30 de septiembre de 2026"
  - "IMSS — Portal del Sistema de Pago Referenciado (SIPARE)"
  - "Cámara de Diputados — Ley del Seguro Social, última reforma DOF 15-01-2026"
  - "Diario Oficial de la Federación — Reglamento de la LSS en materia de Afiliación, Clasificación de Empresas, Recaudación y Fiscalización, 1 de noviembre de 2002"
  - "IMSS — Boletín de afiliación al IMSS, octubre de 2026"
  - "KPMG México — Flash IMSS: actualización del SUA versión 3.6.7, agosto de 2025"
  - "IDC Online — SUA versión 3.7.0: ajustes por reforma Infonavit, diciembre de 2025"
---

## Contexto

El cumplimiento mensual de las obligaciones patronales en materia de seguridad social descansa sobre una arquitectura informática cuya infraestructura fue construida de forma incremental desde finales de los años noventa. Tres sistemas administrados por el Instituto Mexicano del Seguro Social (IMSS) articulan el flujo operativo: el Sistema Único de Autodeterminación (SUA) calcula las cuotas obrero-patronales y las aportaciones habitacionales; IMSS Desde Su Empresa (IDSE) opera los movimientos afiliatorios en línea; y el Sistema de Pago Referenciado (SIPARE) genera la línea de captura con la que se realiza el entero bancario. Durante 2025 y 2026 estos tres pilares experimentaron cambios normativos y operativos relevantes, entre ellos el cierre definitivo del Número Patronal de Identificación Electrónica (NPIE) y la incorporación de las propuestas de cédulas de determinación al Buzón IMSS.

El universo de usuarios de esta arquitectura es amplio. Según el Boletín de Afiliación al IMSS correspondiente a octubre de 2026, el Instituto registró 23,088,353 puestos de trabajo asociados a 1,015,999 registros patronales reportados en meses previos del mismo año. El IMSS advierte que los registros patronales no equivalen a número de empresas, sino a unidades administrativas asociadas a establecimientos y actividades. La diferencia es relevante para la lectura estadística, pero no altera el hecho de que la plataforma SUA–IDSE–SIPARE constituye la interfaz obligatoria para la mayor parte del empleo formal en México.

## El SUA como núcleo de cálculo

### Base normativa y obligatoriedad

El SUA es un programa gratuito distribuido por el IMSS que determina importes y conceptos para el pago de las cuotas obrero-patronales de los seguros a cargo del Instituto, así como de las aportaciones al Seguro de Retiro, Cesantía en Edad Avanzada y Vejez (RCV) y al Instituto del Fondo Nacional de la Vivienda para los Trabajadores (Infonavit). Además, genera la información que alimenta las cuentas individuales de las trabajadoras y trabajadores en el Sistema de Ahorro para el Retiro.

Su uso se encuentra alineado con el artículo 39 de la Ley del Seguro Social, que impone al patrón la obligación de determinar y enterar las cuotas obrero-patronales por mensualidades vencidas a más tardar el día 17 de cada mes, y con los artículos 39 A y 39 C, que regulan las propuestas de cédulas de determinación y la posibilidad de rectificaciones. El Reglamento de la LSS en materia de Afiliación, Clasificación de Empresas, Recaudación y Fiscalización (RACERF), publicado en el Diario Oficial de la Federación el 1 de noviembre de 2002, complementa este marco en lo relativo a inscripción patronal, clasificación en el Seguro de Riesgos de Trabajo y procedimientos de fiscalización.

En términos operativos, el IMSS considera obligatorio el uso del SUA para patrones con cinco o más personas trabajadoras, mientras que para quienes tienen entre uno y cuatro trabajadores su utilización es opcional. En este último caso puede optarse por la propuesta de cédula que entrega el Instituto, prevista en el artículo 39 A de la LSS.

### Versiones recientes y reforma Infonavit

Durante 2025 el SUA atravesó un ciclo inusualmente intenso de actualizaciones, derivado en buena parte de los ajustes al esquema de amortización de créditos Infonavit y de las modificaciones al cálculo de ingresos integrados. De acuerdo con el portal del IMSS y boletines de firmas consultoras, se liberaron cuatro versiones relevantes:

| Versión | Disponibilidad | Motivo principal |
|---------|---------------|------------------|
| 3.6.6 | 25 de junio de 2025 | Ajustes operativos y mejoras |
| 3.6.7 | 22 de agosto de 2025 | Adecuaciones Infonavit |
| 3.6.8 | 12 de septiembre de 2025 | Correcciones técnicas |
| 3.7.0 | 22 de diciembre de 2025 | Reforma de descuentos Infonavit |

La versión 3.7.0, liberada hacia el cierre de 2025, incorporó modificaciones derivadas de la reforma al esquema de amortización del Infonavit, en particular los ajustes al cálculo del descuento aplicable a créditos y al tratamiento de licencias e incapacidades. Las firmas KPMG e IDC Online documentaron la secuencia de cambios y los efectos sobre el procesamiento mensual.

### Cuotas que determina el SUA

El SUA no fija porcentajes: los aplica. Los parámetros se encuentran en la LSS y en las disposiciones del Infonavit. La Unidad de Medida y Actualización (UMA) funciona como referencia para los topes del salario base de cotización (SBC) y para la cuota fija del Seguro de Enfermedades y Maternidad. Para 2026 la UMA diaria se ubica en 113.14 pesos, de acuerdo con la publicación del INEGI.

En el conjunto de ramos que gestiona el IMSS conviven cuotas con bases distintas. Enfermedades y Maternidad combina una cuota fija a cargo exclusivo del patrón —calculada sobre la UMA— con cuotas adicionales sobre el excedente de tres UMA y sobre prestaciones en dinero; Invalidez y Vida, Cesantía en Edad Avanzada y Vejez, Guarderías y Prestaciones Sociales, y Retiro operan con porcentajes sobre el SBC completo. El Seguro de Riesgos de Trabajo aplica la prima resultante de la autodeterminación anual regulada por el RACERF. El SUA integra esta heterogeneidad en una sola cédula de liquidación mensual o bimestral.

## IDSE y el cierre del NPIE

IMSS Desde Su Empresa (IDSE) es la plataforma que permite a los patrones presentar movimientos afiliatorios —altas, bajas, modificaciones de salario— y consultar información de sus trabajadores. Durante dos décadas, el acceso a IDSE se realizó mediante el NPIE acompañado de un certificado digital emitido por el propio Instituto. Esta dualidad de certificados —NPIE del IMSS y e.firma del SAT— generó costos administrativos para los patrones, que debían gestionar renovaciones en ventanillas distintas, y multiplicó los puntos de falla en la operación.

El Consejo Técnico del IMSS aprobó, mediante acuerdo difundido en el Boletín 380/2026, implementar la Firma Electrónica Avanzada del SAT (e.firma) como el único certificado digital válido para patrones y sujetos obligados que presenten movimientos afiliatorios en IDSE. El periodo de transición cerró el 13 de octubre de 2026. A partir del día 14, el NPIE y el certificado digital emitido por el IMSS quedaron fuera de uso operativo para efectos de autenticación en el portal.

La migración tiene tres implicaciones prácticas. Primero, elimina un trámite paralelo que ya no se justificaba frente a la madurez de la e.firma del SAT. Segundo, habilita de manera formal el acceso del representante legal con su propia e.firma en representación del patrón, modalidad que las notas de IDC Online describieron como muy demandada por despachos y áreas de nómina. Tercero, concentra la responsabilidad del ciclo de vida del certificado —vigencia, revocación, renovación— en una sola autoridad certificadora, el SAT, lo que simplifica el cumplimiento para empresas con operaciones ante ambas instituciones.

## SIPARE y el flujo de pago

Una vez calculada la cédula de determinación en el SUA, el pago se realiza a través del Sistema de Pago Referenciado (SIPARE), administrado por el IMSS. SIPARE valida el archivo generado por el SUA, asigna una línea de captura y permite enterar las cuotas en bancos autorizados, ya sea mediante ventanilla o portales de banca electrónica. El Instituto ha definido a SIPARE como el medio mediante el cual los patrones o sujetos obligados pueden determinar y enterar sus cuotas conforme al artículo 39 de la LSS, en correlación con el artículo 113 del RACERF.

El flujo estándar del cumplimiento mensual sigue cuatro pasos: incorporación o actualización de movimientos afiliatorios en IDSE; descarga o uso de la propuesta EMA; cálculo definitivo en el SUA y generación del archivo de pago; validación en SIPARE y entero bancario. Las cuotas mensuales de Enfermedades y Maternidad, Gastos Médicos de Pensionados, Invalidez y Vida, Riesgos de Trabajo y Guarderías y Prestaciones Sociales se pagan a más tardar el día 17 de cada mes. Las aportaciones bimestrales de RCV e Infonavit se cubren el día 17 de los meses impares.

## EMA, EBA y el Buzón IMSS

El 29 de septiembre de 2026, el Consejo Técnico del IMSS aprobó, por medio del acuerdo difundido en el Boletín 522/2026 del 30 de septiembre, la incorporación de las propuestas de cédulas de Emisión Mensual Anticipada (EMA) y Emisión Bimestral Anticipada (EBA) al Buzón IMSS. Los formatos EMI-1 —detalle mensual de personas trabajadoras y movimientos— y EMI-2 —detalle bimestral— quedan disponibles en la sección "Mis documentos" del Buzón, lo que concentra en un solo canal digital información que hasta entonces se distribuía por IDSE, por SIPARE y, para una parte de los patrones, por correspondencia física a través del Servicio Postal Mexicano.

La EMA y la EBA son propuestas: orientan al patrón sobre los importes esperados por el Instituto, pero no sustituyen la obligación legal de determinar y enterar correctamente las cuotas. El Instituto subraya en sus procedimientos que la responsabilidad última de la autodeterminación recae en el patrón, y que cualquier diferencia entre la propuesta y la cédula final debe reflejarse en el SUA antes del pago.

La integración de estas propuestas al Buzón persigue tres objetivos declarados: reducir la impresión, el ensobretado y el envío físico de documentos; ofrecer un punto único de consulta para patrones con múltiples registros patronales; y reforzar la trazabilidad de la relación entre la propuesta institucional y el pago efectivamente realizado. Para las áreas de nómina que operan decenas de registros, la centralización en Buzón IMSS representa una simplificación operativa relevante.

## Universo de usuarios y lectura estructural

La cobertura operativa de esta arquitectura es considerable. Los boletines mensuales de afiliación del IMSS reportan más de un millón de registros patronales activos durante 2026 y un piso de 23 millones de puestos de trabajo en el cuarto trimestre. Esta plataforma determina, mes a mes, el flujo de recursos que alimenta tanto los seguros administrados por el IMSS como las cuentas individuales de retiro y la subcuenta de vivienda en el Infonavit.

La integración entre SUA, IDSE y SIPARE constituye, de hecho, uno de los pocos sistemas administrativos mexicanos que opera en tiempo real con las tres grandes bases de seguridad social: IMSS, SAR e Infonavit. La robustez de la arquitectura explica en parte por qué el cumplimiento formal de cuotas ha sido más estable que otras áreas de la recaudación federal, aunque también evidencia los costos de la fragmentación: tres bases de datos distintas, tres autoridades con potestades propias y, hasta octubre de 2026, dos autoridades certificadoras diferentes para la autenticación digital.

## Limitaciones y agenda abierta

Pese a la consolidación reciente, la arquitectura presenta vulnerabilidades que han sido documentadas por diversas firmas consultoras. Tres merecen énfasis.

Primero, la coexistencia de propuestas (EMA, EBA) y determinaciones definitivas (cédula SUA) sigue generando diferencias que requieren conciliación mensual, particularmente en empresas con alta rotación o con movimientos retroactivos frecuentes. El Buzón IMSS facilita la consulta, pero no resuelve la asimetría informativa entre el patrón y el Instituto cuando los movimientos afiliatorios se registran fuera del plazo.

Segundo, la obligatoriedad del SUA para patrones con cinco o más trabajadores deja un segmento significativo de microempresas en un régimen operativo distinto, basado en la propuesta de cédula del Instituto. Las firmas consultoras han planteado la pregunta sobre una eventual fusión total entre SUA y SIPARE y sobre la extensión del uso obligatorio del sistema a toda la base patronal, sin que haya a la fecha un pronunciamiento oficial sobre su alcance.

Tercero, la transición a e.firma simplifica la autenticación pero traslada al SAT la carga operativa de la vigencia de certificados para efectos de IDSE. Un patrón cuya e.firma caduca enfrenta ahora la interrupción simultánea de sus trámites fiscales y de seguridad social, una concentración de riesgo que no existía bajo el esquema dual.

## Conclusiones

1. **La arquitectura SUA–IDSE–SIPARE constituye la infraestructura de cumplimiento patronal del IMSS** y articula, en una misma cadena operativa, las obligaciones del patrón ante el Instituto, el SAR y el Infonavit.
2. **El ciclo de actualizaciones del SUA en 2025 estuvo dominado por la reforma Infonavit**, con cuatro versiones liberadas entre junio y diciembre, destacando la 3.7.0 por sus ajustes al esquema de amortización de créditos de vivienda.
3. **La transición a e.firma del SAT, que cerró el 13 de octubre de 2026, unificó la autenticación digital** y eliminó el NPIE y el certificado digital del IMSS como mecanismos operativos de acceso a IDSE.
4. **La incorporación de EMA y EBA al Buzón IMSS, aprobada el 29 de septiembre de 2026**, centraliza la consulta de propuestas de cédulas de determinación, especialmente para patrones con múltiples registros, y avanza en la sustitución del envío físico de documentos.
5. **La agenda abierta incluye la conciliación sistemática de propuestas y determinaciones, la eventual extensión del uso obligatorio del SUA** y la mitigación del riesgo derivado de la concentración de la autenticación digital en una sola autoridad certificadora.

Las publicaciones del IMSS, sus boletines institucionales y la Ley del Seguro Social en su versión vigente son la referencia directa para el seguimiento de los cambios posteriores a esta fecha.
