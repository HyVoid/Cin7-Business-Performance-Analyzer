[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Analizador de rendimiento empresarial Cin7

## Convierte las exportaciones de Cin7 en decisiones de inventario, rentabilidad y gestión — con una versión de navegador gratuita o un libro de Excel reutilizable.

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange.svg)

**Una capa analítica operativa reutilizable que transforma las exportaciones brutas de Cin7 en conocimientos sobre inventario, margen y rendimiento empresarial — sin instalar software, sin construir una pila de BI y sin rediseñar los flujos de trabajo existentes.**

**Sin registro. Sin instalación. Gratis en tu navegador.**

Prueba la versión de navegador gratis. Si necesitas la versión Excel, puedes comprarla con garantía de devolución de 30 días, sin preguntas.
>
> 🌐 **Abrir en el navegador** → [*demostración HTML en vivo*](https://hyvoid.github.io/Cin7-Business-Performance-Analyzer/)
> 📥 **Descargar Excel** → *versión del libro de Excel*
>
> Disponible en dos formatos:
>
> * Versión de navegador (HTML)
> * Versión Excel (.xlsx)

---

## Qué te ayuda a rastrear

* Qué SKU generan ganancia y cuáles consumen capital de trabajo.
* El valor del inventario, el desempeño de rotación y el riesgo de antigüedad en una vista operativa única.
* Ingresos, costes y contribución a la rentabilidad a nivel de canal.
* Productos que se acercan al desabastecimiento frente a productos que acumulan exceso de inventario.
* El desempeño del margen bruto por SKU, categoría y canal de venta.
* Excepciones operativas que requieren intervención de la dirección.

---

## Flujo de trabajo de inicio rápido

### 1. Configura los supuestos operativos una sola vez

Abre la hoja **Parameters** y define los supuestos clave del negocio tales como:

* método de valoración de inventario,
* umbrales de antigüedad,
* parámetros de clasificación ABC,
* umbrales de rentabilidad,
* reglas de alerta de excepciones.

Esta configuración se realiza típicamente una sola vez y se reutiliza.

---

### 2. Importa las exportaciones de Cin7 existentes

Exporta los informes estándar directamente desde Cin7 y pégalos en:

* `Import_Sales`
* `Import_Inventory`
* `Import_Purchases`

No se requiere ninguna conexión a base de datos.

No se requiere ninguna reestructuración de datos.

Los datos también pueden copiarse desde sistemas contables, exportaciones de ERP u hojas de cálculo existentes.

---

### 3. Revisa los resultados de gestión de inmediato

Navega a:

* Análisis de inventario
* Análisis de ventas
* Informes de excepciones
* Panel ejecutivo

Todos los cálculos, clasificaciones, categorizaciones y alertas se actualizan automáticamente.

Sin fórmulas manuales.

Sin reconstruir tablas dinámicas.

Sin mantenimiento de informes.

---

### 4. Actualiza periódicamente

Repite el proceso de exportar y pegar semanalmente, mensualmente o cuando se realicen revisiones de gestión.

El marco analítico permanece sin cambios.

Los datos del negocio se actualizan.

---

**Configura unos pocos parámetros clave. Suelta los datos existentes. Obtén el análisis. Actualiza cuando sea necesario.**

---

## Por qué construí esto

La mayoría de los problemas de implementación de ERP en realidad no son problemas de ERP.

En muchas empresas que usan sistemas como Cin7, las transacciones de inventario, las transacciones de compra, las transacciones de venta y las transacciones de costes ya existen. El problema es que la dirección no puede convertir fácilmente esas transacciones en decisiones de negocio.

Las preguntas típicas de gestión se vuelven sorprendentemente difíciles:

* ¿Qué SKU genera realmente ganancia?
* ¿Qué inventario consume el flujo de caja?
* ¿Qué canal de venta aporta el margen más alto?
* ¿Qué productos crean riesgo de desabastecimiento?
* ¿Está mejorando o deteriorándose la rotación de inventario?

La solución habitual es:

```text
Export report
    ↓
Copy data
    ↓
Merge spreadsheets
    ↓
Calculate manually
    ↓
Build presentation
    ↓
Repeat next month
```

Esto crea un fracaso analítico oculto:

> los datos operativos existen, pero la visibilidad de la dirección no existe.

Por ejemplo:

| Antes                                                              | Después                                                                     |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| El SKU A generó 250.000 $ de ingresos y parecía el de mejor desempeño | El SKU A generó solo un 8 % de margen bruto e inmovilizó el 28 % del capital de inventario |
| El canal B mostró el mayor volumen de ventas                           | El canal C produjo el mayor margen de contribución                        |
| El inventario parecía saludable                                          | El 41 % del valor del inventario no se había movido en 180 días                          |

El propósito de este proyecto no era construir otro panel.

El propósito era productizar el proceso de razonamiento que usan los operadores experimentados al convertir transacciones de ERP en decisiones de negocio, y hacer ese proceso repetible.

---

## Problemas de análisis de ERP que resuelve

| Problema                           | Sin esta herramienta                            | Con esta herramienta                                  |
| --------------------------------- | -------------------------------------------- | ----------------------------------------------- |
| Rentabilidad de SKU poco clara         | Se confunden los ingresos con la rentabilidad        | La verdadera contribución de margen del SKU se hace visible    |
| Exposición al capital de inventario oculta | El exceso de inventario se acumula sin notarse       | El valor y la antigüedad del inventario se vuelven medibles     |
| Desempeño de canal mal entendido | Las clasificaciones de ingresos impulsan las decisiones             | Las clasificaciones de ganancia impulsan las decisiones                 |
| Rotación de inventario desconocida        | El desabastecimiento y el exceso ocurren simultáneamente | La rotación y la salud del inventario se vuelven medibles |
| Los informes de gestión son manuales    | Se requieren múltiples exportaciones y hojas de cálculo   | Informes de gestión automatizados                  |
| Excepciones operativas perdidas     | Problemas descubiertos tras el cierre financiero    | Excepciones identificadas de inmediato               |

---

## Para quién es esto

Esta herramienta está diseñada para:

* Operadores y administradores de Cin7.
* Gerentes de inventario y cadena de suministro.
* Gerentes de operaciones.
* Gerentes financieros.
* Propietarios de negocios y directores generales.
* Mayoristas, distribuidores y negocios de comercio electrónico con mucho inventario.

Esta herramienta es especialmente útil cuando:

* existen datos de ERP,
* existen informes,
* pero la visibilidad de la dirección sigue siendo pobre.

Esta herramienta **no está diseñada para**:

* reemplazar sistemas ERP,
* implementaciones de BI empresarial,
* proyectos de almacén de datos,
* ejecución de flujos de trabajo transaccionales.

**No se requiere experiencia en hojas de cálculo. Abre la versión de navegador o usa el libro de Excel y comienza a analizar de inmediato.**

---

## Acerca de

Construyo rastreadores operativos ligeros y herramientas de apoyo a la decisión para situaciones donde simplemente hay demasiadas piezas en movimiento para mantenerlas todas en la cabeza de forma fiable.

La pregunta con la que suelo empezar es:

> *¿Qué información debe existir en un solo lugar para que la próxima decisión de negocio pueda tomarse con confianza?*

El **Analizador de rendimiento empresarial Cin7** es un ejemplo de ese enfoque: transformar las transacciones operativas en razonamiento de gestión reutilizable.

---

## Detalles técnicos

<details>
<summary>Para revisores técnicos, practicantes de Excel y colaboradores</summary>

---

### Arquitectura del libro

```text
Cin7 Export Files
        ↓
Import Layer
        ↓
Data Cleaning Layer
        ↓
Calculation Engines
        ↓
Business Analytics
        ↓
Executive Dashboard
```

| Hoja           | Función             |
| ------------------- | -------------------- |
| Instructions        | Guía del usuario        |
| Parameters          | Configuración        |
| Import_Sales        | Importaciones de ventas        |
| Import_Inventory    | Importaciones de inventario    |
| Import_Purchases    | Importaciones de compra     |
| Data_Cleaning       | Estandarización      |
| Cost_Engine         | Coste de inventario    |
| Margin_Engine       | Motor de rentabilidad |
| Inventory_Analytics | Análisis de inventario   |
| Sales_Analytics     | Análisis de ingresos     |
| Exception_Report    | Detección de excepciones  |
| Executive_Dashboard | Informes ejecutivos  |

---

### Tres trampas que atrapan incluso a gerentes de inventario experimentados

---

#### Trampa 1 — Se confunden los ingresos con la rentabilidad

Se tomó una decisión de compra.

La decisión se basó en las clasificaciones de ingresos por ventas.

| SKU | Ingresos  | Margen bruto |
| --- | -------- | ------------ |
| A   | 500.000 $ | 8 %           |
| B   | 300.000 $ | 42 %          |

La dirección aumentó las compras del SKU A.

El razonamiento era incorrecto porque los ingresos no equivalen a la contribución de ganancia.

El enfoque corregido evalúa:

```text
Revenue
− Product Cost
− Channel Cost
− Inventory Carrying Cost
```

Resultado:

El SKU B se convierte en el objetivo de inversión preferido.

<details>
<summary>Lógica de la fórmula</summary>

```excel
Gross Profit = Revenue - COGS

Gross Margin % =
Gross Profit / Revenue

Contribution Rank =
RANK(Gross Profit)
```

</details>

---

#### Trampa 2 — Se confunde la cantidad de inventario con el riesgo de inventario

Se tomó una decisión de reabastecimiento.

La decisión se basó en la cantidad de stock.

Sin embargo:

| SKU | Unidades | Valor    | Días en inventario |
| --- | ----- | -------- | ----------------- |
| A   | 500   | 8.000 $   | 20                |
| B   | 500   | 125.000 $ | 280               |

El razonamiento falló porque la exposición al capital depende del valor y la antigüedad del inventario.

Enfoque correcto:

```text
Inventory Risk
=
Inventory Value
× Aging Factor
× Turnover Factor
```

Resultado:

El SKU B se convierte en la prioridad operativa.

<details>
<summary>Lógica de la fórmula</summary>

```excel
Inventory Value =
Quantity * Unit Cost

Inventory Days =
Inventory Value /
Average Daily COGS

ABC Classification =
PERCENTRANK()
```

</details>

---

#### Trampa 3 — Se confunden los ingresos del canal con el desempeño del canal

Se tomó una decisión de asignación de marketing.

| Canal   | Ingresos  | Margen |
| --------- | -------- | ------ |
| Amazon    | 500.000 $ | 12 %    |
| Mayorista | 350.000 $ | 33 %    |

La recomendación favoreció a Amazon.

El razonamiento falló porque las clasificaciones de ingresos ignoraban la economía de contribución.

Enfoque correcto:

```text
Net Contribution
=
Revenue
− Product Cost
− Channel Cost
− Operational Cost
```

Resultado:

El canal mayorista se convirtió en el canal de crecimiento preferido.

<details>
<summary>Lógica de la fórmula</summary>

```excel
Channel Profit =
Revenue
- COGS
- Channel Expenses

Profit Rank =
RANK(Channel Profit)
```

</details>

---

### Escenario de ejemplo

Un distribuidor opera:

* 2.300 SKU activos
* 5 canales de venta
* 4,2 millones $ de valor de inventario
* ingresos mensuales de 1,1 millones $

Tras importar las exportaciones de Cin7:

| Métrica                    | Resultado      |
| ------------------------- | ----------- |
| Valor del inventario           | 4,18 millones $      |
| Inventario de más de 180 días   | 1,36 millones $      |
| SKU de margen negativo      | 74          |
| SKU en riesgo de desabastecimiento        | 128         |
| Canal más rentable        | Mayorista   |
| Canal de menor desempeño | Marketplace |

El análisis identificó:

* que el 32 % del capital de inventario estaba atrapado en stock de lenta rotación.
* que el 18 % de los ingresos provenían de productos de margen negativo.
* que un canal de venta generaba altos ingresos pero márgenes de contribución por debajo del objetivo.

Acciones de la dirección:

* reducir las compras de SKU de bajo margen,
* liquidar el exceso de inventario,
* priorizar los canales rentables,
* revisar las políticas de reabastecimiento.

Impacto de la decisión:

* mayor rotación de inventario,
* menor exposición al capital de trabajo,
* mayor visibilidad de la rentabilidad operativa.

---

### Referencia de fórmulas

<details>
<summary>Motor de costes</summary>

```excel
FIFO Cost
Weighted Average Cost
Inventory Valuation
COGS Allocation
```

</details>

<details>
<summary>Motor de márgenes</summary>

```excel
Revenue
COGS
Gross Profit
Gross Margin %
Contribution Analysis
```

</details>

<details>
<summary>Análisis de inventario</summary>

```excel
Inventory Days
Turnover Ratio
ABC Classification
Aging Analysis
Safety Stock Indicators
```

</details>

---

### Reglas de validación

| Campo            | Regla                  | Comportamiento ante error |
| ---------------- | --------------------- | -------------- |
| SKU              | No puede estar vacío       | Marcado       |
| Cantidad         | Debe ser numérica       | Rechazado       |
| Coste             | Debe ser positivo      | Marcado        |
| Fecha de transacción | Se requiere fecha válida   | Rechazado       |
| Canal          | Debe existir en el mapeo | Marcado        |
| Valor de inventario  | No puede ser negativo    | Excepción      |
| Margen           | Fuera del umbral     | Alerta          |
| Días de inventario   | Excede el límite     | Excepción      |

</details>

---

## Otras herramientas de esta serie

* **Motor de planificación de inventario DTC** — decisiones de reabastecimiento y stock de seguridad.
* **Simulador de asignación de presupuesto de marketing** — optimización de la asignación de presupuesto.
* **Sistema de estimación de costes de construcción** — estimación de costes y análisis de ofertas.
* **Libro de control de operaciones financieras** — visibilidad financiera operativa.

Más herramientas disponibles a través de las versiones de GitHub y nuestro [sitio web](https://www.theseusworkshop.com/).

---

## Licencia

Este proyecto está licenciado bajo la **Apache License 2.0**.

Consulta el archivo LICENSE para más detalles.
