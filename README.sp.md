[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Analizador de rendimiento empresarial Cin7: plantilla de informes de Excel y panel de rentabilidad de inventario para Cin7 Core (DEAR) y Omni
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/2e8d2054-0ff2-46b5-9716-405840fa0be8" />


> **Resumen del producto:** el **Analizador de rendimiento empresarial Cin7** es una **plantilla de informes de Excel** y un **panel de rentabilidad de inventario** ligeros, creados para los usuarios de **Cin7 Core (antes DEAR Inventory)** y **Cin7 Omni**. Convierte las **exportaciones CSV brutas de Cin7** (pedidos de venta, existencias disponibles y recepciones de compra) en una **calculadora de margen bruto por SKU**, un **rastreador de capital de trabajo** y una **auditoría de variación de costes de órdenes de compra (PO)** automatizados, sin tener que implementar software de BI externo.

Las empresas que operan con **Cin7 Core** o **Cin7 Omni** capturan datos de transacciones granulares, pero las exportaciones nativas del ERP mantienen el rendimiento de ventas, los niveles de stock del almacén y los precios de proveedores en compartimentos separados. El **Analizador de rendimiento empresarial Cin7** cubre esa brecha como un **conjunto de herramientas estructurado de soporte a decisiones de ERP**. Al estandarizar los datos CSV brutos en un único **libro de análisis de Excel**, los equipos de operaciones y finanzas pueden conciliar el **coste de bienes vendidos (COGS) landed**, aislar el **inventario disponible para prometer (ATP) no asignado** y marcar excepciones operativas en cuestión de minutos.

La plantilla de informes responde a cinco preguntas comerciales y de gestión de inventario recurrentes:

- **Rentabilidad por SKU y análisis de margen bruto:** ¿qué productos generan un beneficio bruto positivo después de confrontar los ingresos por ventas con los costes de compra de promedio ponderado o con los últimos costes registrados?
- **Contribución neta por canal de venta:** ¿qué mercados de comercio electrónico, portales mayoristas B2B o canales de punto de venta generan un margen neto real después de deducir las asignaciones configurables de comisiones de plataforma?
- **Capital de trabajo y exposición a stock muerto:** ¿cuánto efectivo está atrapado en las existencias disponibles (SOH) del almacén y qué SKU se clasifican como sobreabastecidos, stock muerto de lenta rotación o riesgos de desabastecimiento de alta velocidad?
- **Incremento de precios de proveedores y variación de PO:** ¿qué artículos han experimentado aumentos materiales del coste unitario en recepciones de compra recientes en comparación con los costes históricos de promedio ponderado?
- **Gestión de excepciones priorizada:** ¿qué SKU de margen negativo, cuellos de botella de reabastecimiento y picos de coste exigen una intervención inmediata de precios o de compras?

Las exportaciones brutas de Cin7 entran a través de hojas de entrada dedicadas a pegar valores (`Import_Sales`, `Import_Inventory`, `Import_Purchases`). Las capas de cálculo automatizadas limpian los identificadores de SKU, consolidan el inventario de múltiples almacenes, calculan la rentabilidad por línea de venta y rellenan un **panel de KPI ejecutivo** junto con un **informe de excepciones** accionable. Este flujo de trabajo complementa su entorno Cin7 ERP existente y deja intactos los libros contables subyacentes, los registros fiscales y la ejecución de pedidos en vivo.

> ### Pruebe el conjunto de herramientas analíticas de Cin7: demostración web interactiva o plantilla reutilizable de Excel
>
> Evalúe la estructura de informes de inmediato en su navegador o descargue la plantilla `.xlsx` completa para análisis mensuales recurrentes:
>
> - 🌐 **[Inicie la demostración web interactiva de análisis de Cin7 (vista previa gratuita en el navegador, sin configuración)](https://hyvoid.github.io/cin7-excel-reporting-template/)** — inspeccione tablas de rentabilidad por SKU de ejemplo, clasificaciones ABC de inventario y marcas de excepción directamente en su navegador, sin registrarse.
> - 📥 **[Descargue la plantilla de informes de Excel para Cin7 (libro .xlsx para análisis recurrentes y auditorías sin conexión)](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)** — obtenga el libro de Excel completo de matrices dinámicas para importar sus propios archivos CSV de Cin7, personalizar los umbrales del negocio y mantener registros operativos históricos.
>
> *Garantía comercial: cuando el libro de Excel `.xlsx` descargable se ofrece como licencia de pago, cada compra está respaldada por una garantía de devolución de dinero de 30 días, sin preguntas.*
>

---

## Qué le ayuda a controlar: métricas de margen, valoración de inventario y coste de PO de Cin7

En lugar de unir manualmente hojas de cálculo de ERP desconectadas con fórmulas de búsqueda frágiles, utilice este mapeo estructurado para hacer seguimiento de seis dimensiones operativas principales:

| Dimensión de seguimiento y enfoque de búsqueda | Punto de dolor operativo en las exportaciones nativas de Cin7 | Cómo lo resuelve el analizador (métricas y resultados) |
| :--- | :--- | :--- |
| **Rentabilidad por SKU y análisis de margen bruto** | Las exportaciones de ventas nativas de Cin7 clasifican los productos por ingresos brutos, y a menudo ocultan SKU de alto volumen que se venden con márgenes negativos o muy reducidos una vez aplicados los costes reales de compra. | Confronta los ingresos por línea de venta con el **coste de bienes vendidos (COGS)** estimado para calcular el **beneficio bruto ($)** y el **margen bruto (%)** exactos por SKU frente a su umbral objetivo. |
| **Contribución neta multicanal y modelado de comisiones** | Comparar los ingresos de Shopify DTC, Amazon Marketplace y el canal mayorista B2B a valor nominal ignora las comisiones de referencia, el procesamiento de pagos y las estructuras de comisión. | Aplica una **asignación de comisión de canal (%)** configurable a cada canal de venta y clasifica los canales por **contribución de beneficio neto**, de modo que los equipos vean dónde se genera realmente el efectivo. |
| **Existencias disponibles (SOH) en múltiples almacenes y aislamiento de ATP** | Los informes de instantánea de almacén muestran el total de unidades físicas disponibles, lo que lleva a los equipos de ventas a comprometer en exceso stock que ya está asignado a pedidos abiertos de clientes. | Consolida el inventario de múltiples ubicaciones separando el **stock físico** del **stock asignado**, y expone las verdaderas unidades **disponibles para prometer (ATP) no asignadas** y el capital inmovilizado. |
| **Salud del inventario, rotación y clasificación ABC** | Los artículos de alto valor y lenta rotación y los desabastecimientos inminentes permanecen enterrados entre miles de filas del almacén hasta que el flujo de caja se estrecha o los más vendidos pasan a pedidos pendientes. | Calcula automáticamente los **días de cobertura (DOS)**, los **días de rotación de inventario** y los **niveles de valor ABC (A/B/C)** para categorizar cada SKU como saludable, de lenta rotación, sobreabastecido o en riesgo de desabastecimiento. |
| **Variación de coste de órdenes de compra (PO) e incremento de proveedores** | Los incrementos escalonados de precios de proveedores se esconden dentro de líneas individuales de recepción de compra, erosionando los márgenes del producto semanas antes de que finanzas detecte la variación en los cierres contables mensuales. | Compara el **coste de promedio ponderado (WAC)** de cada SKU con su **precio de compra más reciente registrado**, marcando cualquier pico de coste unitario que supere la tolerancia de variación configurada. |
| **Triaje automatizado de gestión por excepción** | Los analistas de operaciones pasan horas filtrando volcados CSV en tres módulos solo para armar la agenda semanal de las reuniones de compras y precios. | Agrupa los márgenes negativos, los incumplimientos de margen, los picos de coste y las advertencias de stock en un único **informe de excepciones** priorizado, con clasificaciones de severidad y acciones correctivas recomendadas. |

---

## Cómo analizar las exportaciones CSV de Cin7 en Excel: tutorial de inicio rápido en 4 pasos

Siga este ciclo operativo de cuatro pasos para transformar los datos brutos de Cin7 en una revisión ejecutiva. Configure sus reglas financieras una sola vez, pegue sus exportaciones CSV más recientes, audite los paneles automatizados y repita el proceso con cadencia semanal o mensual.

### Paso 1: configure los umbrales financieros, los tipos de cambio y las reglas ABC de inventario
Abra la pestaña `Parameters` para establecer los supuestos comerciales que gobiernan su libro. Defina el símbolo de su moneda base de informes, los **tipos de cambio de USD y EUR**, el rango de fechas de análisis (días), el **umbral mínimo de margen bruto (%)**, los límites de **días de cobertura (DOS)** para desabastecimiento y sobreabastecimiento, los **cortes de clasificación ABC de Pareto**, el **umbral de alerta de variación del coste de compra (%)**, las asignaciones de comisiones de canal y el objetivo presupuestario de beneficio bruto del periodo. Actualice estos parámetros cada vez que cambien los tipos de cambio o las políticas de margen de la empresa.

### Paso 2: importe las exportaciones CSV brutas de ventas, existencias disponibles (SOH) y órdenes de compra de Cin7
Exporte sus informes de transacciones estándar desde **Cin7 Core** o **Cin7 Omni** a formato CSV y, a continuación, utilice **Pegar valores** para cargar los registros en las tres pestañas dedicadas a la entrada de datos brutos:

- `Import_Sales`: pegue el historial de líneas de pedidos de venta (SKU, canal, cantidad vendida, ingresos por línea, moneda).
- `Import_Inventory`: pegue las instantáneas actuales de inventario del almacén (SKU, ubicación del almacén, cantidad física disponible, cantidad asignada).
- `Import_Purchases`: pegue las recepciones de compra históricas y las líneas de factura de proveedores (SKU, fecha de recepción, cantidad recibida, precio unitario de compra, moneda).

Mantener las entradas CSV brutas aisladas de las hojas de fórmulas posteriores evita sobrescrituras accidentales de fórmulas durante las actualizaciones rutinarias de datos de cada semana.

### Paso 3: audite el panel de KPI ejecutivo, los márgenes por canal y las marcas de excepción
Asegúrese de que el modo de cálculo de Excel esté establecido en **Automático** para que el motor de matrices dinámicas actualice todas las tablas analíticas:

1. Abra `Executive_Dashboard` para ver un resumen consolidado de nivel directivo con los ingresos totales, el COGS estimado, el beneficio bruto, el margen bruto %, el cumplimiento del presupuesto, la valoración total del inventario, los días de rotación de inventario, el capital de trabajo inmovilizado y sus **5 SKU principales por contribución al beneficio**.
2. Revise `Exception_Report` para clasificar los SKU marcados que exigen aumentos de precio inmediatos, renegociación con proveedores o liquidación de inventario.
3. Profundice en `Sales_Analytics` para ver los desgloses de contribución por SKU y canal, en `Inventory_Analytics` para las matrices de salud de stock ABC/DOS y en `Data_Cleaning` para resolver anomalías de los datos maestros (como SKU sin mapear o registros de coste faltantes).

### Paso 4: pase de las pruebas en el navegador a las revisiones mensuales recurrentes en Excel
Aunque la **[vista previa interactiva en el navegador](https://hyvoid.github.io/cin7-excel-reporting-template/)** le permite inspeccionar la disposición analítica en una sola sesión, el control continuo del inventario y la conciliación financiera requieren registros locales persistentes.

Para ejecutar este flujo de trabajo con los datos de su propia empresa cada semana o cada mes, **[descargue la plantilla de informes de Excel reutilizable para Cin7 (.xlsx)](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)**. Con el libro de Excel independiente, su equipo puede archivar instantáneas mensuales para el seguimiento del margen mes a mes, personalizar los parámetros de umbral sin conexión y distribuir archivos `.xlsx` listos para auditoría entre compras, almacén y la dirección ejecutiva.

---

## La lógica de negocio y la metodología

Los informes estándar de ERP fallan a quienes toman decisiones porque presentan registros operativos (lo que ocurrió en un único módulo) en lugar de economía unitaria relacional (cómo interactúan los costes de compra, la velocidad del almacén y las comisiones de canal). El **Analizador de rendimiento empresarial Cin7** aplica seis métodos cuantitativos para resolver problemas comerciales específicos:

### 1. Normalización relacional de SKU y coincidencia de datos en tres vías
- **Problema comercial:** en las exportaciones de Cin7, los códigos SKU suelen contener espacios finales, discrepancias de mayúsculas y minúsculas o transacciones huérfanas (por ejemplo, un producto vendido en `Import_Sales` que no tiene una recepción correspondiente en `Import_Purchases` ni un registro de stock en `Import_Inventory`).
- **Método analítico:** la capa `Data_Cleaning` elimina el ruido de formato (normalización `TRIM`/`UPPER`) y realiza una validación relacional en tres vías entre las tablas de ventas, inventario y compras. Marca explícitamente las líneas de venta sin coste y las anomalías de precio cero, de modo que los totales de beneficio bruto nunca se inflen artificialmente por entradas de coste faltantes.

### 2. COGS de doble valoración y variación del precio de compra (WAC frente al coste más reciente)
- **Problema comercial:** depender únicamente del coste histórico de promedio ponderado (WAC) oculta los aumentos recientes de precios de proveedores durante periodos inflacionarios, lo que lleva a los equipos de ventas a fijar precios demasiado bajos en los pedidos de renovación.
- **Método analítico:** el conjunto de herramientas calcula tanto el **coste de compra histórico de promedio ponderado** ($\sum \text{Total PO Spend} / \sum \text{Total Units Received}$) como extrae el **coste unitario de compra cronológicamente más reciente** por SKU, estandarizado en su moneda base de informes. Al medir el diferencial porcentual ($\frac{\text{Latest Cost} - \text{WAC}}{\text{WAC}}$), el modelo aísla la compresión prospectiva del margen antes de que se vendan los lotes de inventario antiguos.

### 3. Modelado de la contribución por canal ajustada por comisiones
- **Problema comercial:** las marcas de comercio electrónico y omnicanal escalan con frecuencia los ingresos brutos en mercados de terceros mientras pierden efectivo neto una vez deducidas las comisiones de plataforma y las tarifas de transacción.
- **Método analítico:** más allá del beneficio bruto ($\text{Revenue} - \text{Estimated COGS}$), el motor `Sales_Analytics` deduce una **asignación de comisión de plataforma** configurable y específica de cada canal de venta. Esto se aproxima al **margen de contribución de nivel 2 (CM2)**, lo que permite a la dirección comparar directamente los pedidos mayoristas B2B de alto margen frente al volumen de los mercados de comisiones elevadas.

### 4. Aislamiento de lo disponible para prometer (ATP) frente al stock físico disponible
- **Problema comercial:** tratar los recuentos físicos del almacén como inventario vendible provoca doble asignación, pedidos pendientes y ratios de capital de trabajo distorsionados. Por ejemplo, si un almacén tiene 100 unidades físicas pero 80 unidades están comprometidas en pedidos de venta abiertos, solo quedan 20 unidades libremente disponibles antes de aplicar las deducciones de stock de seguridad.
- **Método analítico:** los registros de inventario de múltiples almacenes se agregan por SKU y segregan estrictamente el **stock físico** del **stock asignado** ($\text{Unallocated Stock} = \max(0, \text{Physical SOH} - \text{Allocated Units})$). La valoración del capital de trabajo se calcula entonces tanto sobre las existencias físicas totales como sobre el stock de lenta rotación inmovilizado.

### 5. Valoración compuesta ABC de Pareto y matriz de días de cobertura (DOS)
- **Problema comercial:** los responsables de almacén no pueden tratar todos los SKU por igual; recortar el inventario de forma generalizada deja sin stock a los más vendidos de alto margen y deja intacto el stock muerto.
- **Método analítico:** el modelo combina la **clasificación ABC de valor de Pareto** (que ordena los SKU por contribución acumulada al valor del inventario, típicamente A = 70–80 % superior, B = siguiente 15–20 %, C = 5–10 % inferior) con la **velocidad de venta diaria** ($\text{Units Sold} / \text{Analysis Period Days}$) para derivar los **días de cobertura** ($\text{DOS} = \text{Unallocated Stock} / \text{Daily Velocity}$). Al cruzar los niveles ABC con los umbrales de DOS se identifica automáticamente el stock muerto de alto capital (`Clase A + Overstock/Slow-Moving`) frente a las prioridades urgentes de reabastecimiento (`Clase A + DOS bajo`).

### 6. Triaje de gestión por excepción basado en reglas
- **Problema comercial:** revisar manualmente más de 5.000 filas de SKU cada semana provoca fatiga de decisión y riesgos operativos pasados por alto.
- **Método analítico:** el `Exception_Report` utiliza lógica booleana determinista para evaluar cada SKU activo frente a los umbrales de `Parameters`. Solo los SKU que infringen una o más reglas comerciales (margen negativo, margen por debajo del objetivo, riesgo de desabastecimiento, trampa de capital por sobreabastecimiento o pico material de coste) aparecen en la cola de excepciones, acompañados de un nivel de prioridad calculado (`High`, `Medium`, `Low`) y de una acción operativa prescrita.

---

## Por qué construí este marco analítico de Cin7

Un sistema ERP destaca por registrar transacciones, hacer cumplir los flujos de trabajo de pedidos y mantener pistas de auditoría. Sin embargo, los registros operativos de transacciones rara vez se traducen directamente en claridad comercial.

En las operaciones diarias de mayoristas, fabricantes y comercio electrónico, tres puntos ciegos perjudican repetidamente el flujo de caja:
1. Un SKU aparece como el más vendido en los informes de ingresos, pero su coste de compra landed deja un beneficio bruto prácticamente nulo.
2. Un informe de almacén muestra existencias abundantes, pero el 80 % de esas unidades ya están asignadas a pedidos mayoristas abiertos, lo que expone al equipo a desabastecimientos inmediatos ante nuevos compromisos.
3. Un proveedor sube discretamente los precios unitarios un 14 % en la última orden de compra, y el aumento permanece enterrado en los registros de recepción hasta que los márgenes brutos trimestrales caen.

Construí el **Analizador de rendimiento empresarial Cin7** para conectar esos tres conjuntos de datos dentro de un marco de Excel transparente y repetible. Cada fórmula, supuesto de coste y parámetro de umbral permanece visible y auditable para su equipo. Cuando el libro dispara una advertencia de excepción, sirve como un aviso estructurado para que sus compradores, planificadores o responsables de precios investiguen el registro subyacente de Cin7 y actúen con evidencia.

---

## Cuellos de botella habituales de los informes ERP de Cin7 frente al análisis automatizado en Excel

| Cuello de botella en los informes ERP de Cin7 | Limitaciones de la exportación manual de CSV y de los informes nativos (sin esta herramienta) | Plantilla de Excel automatizada y conciliación por SKU (con esta herramienta) |
| :--- | :--- | :--- |
| **Exportaciones desconectadas de ventas, SOH y PO** | Los analistas descargan CSV separados de ventas, existencias disponibles y compras, y pasan horas escribiendo frágiles fórmulas `VLOOKUP` o `XLOOKUP` que se rompen cada mes. | Un flujo de trabajo unificado de pegar valores ingiere las tres exportaciones de Cin7 y concilia automáticamente las métricas sobre una lista maestra estandarizada de SKU. |
| **Ilusión de ingresos y márgenes negativos ocultos** | Los informes de ventas de primera línea celebran los SKU de alto volumen mientras ocultan artículos vendidos por debajo del coste de reposición o por debajo de los umbrales objetivo de margen bruto. | Los ingresos por línea de venta, el COGS unitario estimado, el beneficio bruto ($) y el margen bruto (%) se auditan lado a lado frente a objetivos de rentabilidad configurables. |
| **Disponibilidad de almacén sobreestimada (SOH frente a ATP)** | Los equipos confunden el stock físico total del almacén con el inventario vendible, lo que provoca sobreventa y pedidos pendientes de clientes sobre stock ya comprometido. | El stock físico y las cantidades asignadas a pedidos se consolidan por separado en todos los almacenes, aislando el verdadero **stock no asignado** para nuevos pedidos. |
| **Capital de trabajo atrapado en stock muerto** | Los SKU de alto coste y rotación cero pasan desapercibidos en los listados de múltiples almacenes, drenando el flujo de caja e inflando los costes de mantenimiento. | La **valoración de inventario ($)**, los **días de cobertura (DOS)**, los **días de rotación** y las **clasificaciones ABC** automatizados aíslan las trampas de efectivo de lenta rotación y sobreabastecimiento. |
| **Incremento de precios de proveedores inadvertido (variación de PO)** | Comparar el precio de la última factura de un proveedor con el coste medio histórico exige una inspección manual línea por línea de las recepciones de compra pasadas. | Los cálculos de variación automatizados comparan el **coste de promedio ponderado (WAC)** con el **coste de PO más reciente registrado**, marcando los picos materiales de coste al instante. |
| **Volcados de datos ERP sin filtrar y parálisis por análisis** | Los responsables filtran manualmente miles de filas de hojas de cálculo cada lunes para averiguar qué incendios de precios o de compras apagar primero. | Un **informe de excepciones** consolidado agrupa los déficits de margen, las alertas de desabastecimiento y las variaciones de coste de PO con clasificaciones de prioridad y acciones recomendadas. |

---

## Para quién es esto: flujos de trabajo de informes de Cin7 por rol y casos de uso

Este conjunto de herramientas está diseñado para roles operativos específicos que buscan una **plantilla de informes de Cin7** repetible o una **calculadora de margen de inventario**:

- **Propietarios de pymes, fundadores y CFO fraccionados (`Panel ejecutivo de KPI y capital de trabajo de Cin7`):**
  - *Caso de uso operativo:* realizar revisiones financieras mensuales, supervisar el cumplimiento del presupuesto de beneficio bruto, auditar el efectivo total inmovilizado en inventario de lenta rotación e identificar los 5 SKU que más beneficio aportan sin esperar desarrollos de BI a medida.
- **Planificadores de inventario y responsables de operaciones de almacén (`Plantilla de salud de inventario, ABC y reabastecimiento de Cin7`):**
  - *Caso de uso operativo:* auditar las **existencias disponibles (SOH)** de múltiples almacenes frente al **stock asignado**, calcular los **días de cobertura (DOS)**, evitar desabastecimientos en los más vendidos de clase A y crear listas de liquidación para el sobreabastecimiento antiguo.
- **Responsables de compras y adquisiciones (`Hoja de auditoría de proveedores y variación de coste de órdenes de compra de Cin7`):**
  - *Caso de uso operativo:* hacer seguimiento de recepciones de compra en múltiples monedas (USD, EUR y moneda base), detectar la inflación del coste unitario de proveedores (`Último precio de PO frente a WAC`) y preparar renegociaciones de precios con proveedores basadas en datos.
- **Responsables de ventas de comercio electrónico y multicanal (`Calculadora de rentabilidad por canal y margen por SKU de Cin7`):**
  - *Caso de uso operativo:* comparar la verdadera economía unitaria del producto en Shopify, Amazon, eBay y portales mayoristas B2B tras contabilizar las asignaciones de comisiones de canal, y podar los SKU de margen negativo de los catálogos activos.
- **Analistas de negocio de ERP y consultores de operaciones (`Libro de limpieza y conciliación de datos CSV de Cin7`):**
  - *Caso de uso operativo:* sustituir la manipulación improvisada de hojas de cálculo semanales por una plantilla de Excel estandarizada y con control de errores, que limpia exportaciones de SKU sucias y entrega informes de excepciones listos para la sala de juntas en menos de 15 minutos.

### Para quién NO está diseñado este conjunto de herramientas
Para fijar expectativas precisas antes de descargar, este libro **no** sirve para:
- **Empresas que buscan un reemplazo completo del ERP:** esta es una capa analítica complementaria para los datos existentes de Cin7 Core / Cin7 Omni, no un sistema transaccional de gestión de pedidos ni de ejecución de almacén.
- **Equipos que requieren transmisión en vivo por API:** el flujo de trabajo se basa en exportaciones periódicas CSV/Excel (semanales, quincenales o mensuales) en lugar de la sincronización en tiempo real por webhook.
- **Auditorías de libro mayor GAAP/IFRS estatutarias:** las cifras de beneficio representan estimaciones operativas basadas en recepciones de compra registradas y en asignaciones configurables de comisiones de canal; no reemplazan las conciliaciones contables completas de coste landed que cubren facturas de flete, aranceles aduaneros, devoluciones de impuestos, devoluciones de clientes y asignaciones de gastos generales de almacén.
- **Ejecución automatizada de PO:** el conjunto de herramientas marca riesgos de desabastecimiento y excepciones de coste para revisión humana; no transmite automáticamente órdenes de compra a los proveedores.

---

## Cuándo usar este analizador de Cin7: escenarios operativos de alto impacto

Los equipos suelen desplegar el **Analizador de rendimiento empresarial Cin7** en cuatro flujos de trabajo empresariales recurrentes:

1. **Reuniones semanales de planificación de ventas y operaciones (S&OP):** importe los últimos 30 o 90 días de exportaciones de Cin7 cada lunes por la mañana para alinear a los responsables de compras, almacén y ventas en torno a un único `Exception_Report`.
2. **Auditorías de coste de proveedores y de margen previas al reabastecimiento:** antes de aprobar una gran orden de compra de reabastecimiento en Cin7, compruebe si los aumentos recientes de precios de proveedores han empujado el margen bruto proyectado del SKU por debajo del umbral de su empresa.
3. **Liquidación trimestral de stock muerto y racionalización de SKU:** filtre `Inventory_Analytics` por las marcas `Overstock` y `Slow-Moving` para identificar las cantidades exactas en dólares atrapadas en SKU estancados, liberando capital de trabajo mediante promociones de liquidación específicas.
4. **Restablecimientos anuales de listas de precios y revisiones de comisiones de mercados:** ajuste los parámetros `Channel_Fee_Allowance` y de tipo de cambio para poner a prueba cómo afectan a la rentabilidad final por SKU los aumentos de comisiones de los mercados o las oscilaciones de moneda.

> **Nota sobre requisitos técnicos y calidad de los datos:** no se requieren conocimientos avanzados de macros de Excel ni de VBA. La vista previa en el navegador funciona de inmediato en línea y el libro `.xlsx` solo exige Microsoft Excel estándar (que admita funciones de matrices dinámicas) y familiaridad básica con la exportación de archivos CSV desde Cin7 y el pegado de valores. La precisión de los resultados depende directamente de la integridad de sus exportaciones de origen de Cin7 y de la validez de los tipos de cambio y de los supuestos de umbral configurados.

---

## Acerca del creador

Diseño herramientas analíticas ligeras y centradas en la decisión para operadores de mayoristas, fabricantes y comercio electrónico que están cansados de ahogarse en hojas de cálculo de ERP desconectadas. Cada conjunto de herramientas se construye en torno a una pregunta rectora: **¿qué cifras operativas exactas deben reunirse para que la dirección pueda tomar con confianza la próxima decisión de compras, de precios o de inventario?**

El **Analizador de rendimiento empresarial Cin7** aplica esta metodología a la rentabilidad por SKU, la exposición de capital de trabajo y el control de costes de proveedores, y ofrece a su equipo visibilidad inmediata a partir de los datos de Cin7 que ya posee.

- 🌐 **[Vea el analizador web de Cin7 en su navegador](https://hyvoid.github.io/cin7-excel-reporting-template/)**
- 📥 **[Obtenga el libro de Excel reutilizable completo (.xlsx)](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)**


---

## Detalles técnicos

<details>
<summary>Para revisores técnicos, profesionales de Excel y colaboradores</summary>


### Arquitectura del libro

El libro está diseñado como una canalización de datos unidireccional con cinco capas funcionales y 12 hojas de trabajo. Las entradas brutas se separan de los cálculos, de los resultados analíticos y de los informes de gestión para reducir las sobrescrituras accidentales y facilitar la inspección de la ruta de cálculo.

| Capa | Hoja de trabajo | Responsabilidad principal | Resultados clave |
|---|---|---|---|
| Navegación | `Instructions` | Explicar la estructura del libro, la secuencia de operación y las convenciones de entrada y salida | Guía de uso |
| Configuración | `Parameters` | Centralizar los ajustes de moneda, los tipos de cambio, los periodos de análisis, los umbrales de margen, los umbrales de inventario, los límites de clasificación ABC, los umbrales de variación de coste y los objetivos presupuestarios | Supuestos de negocio compartidos |
| Datos brutos | `Import_Sales` | Contener las líneas de transacciones de venta exportadas | Cantidades, precios, descuentos, monedas, canales e identificadores de SKU de ventas |
| Datos brutos | `Import_Inventory` | Contener una instantánea de inventario | Stock físico, stock reservado, stock entrante, atributos de producto y costes unitarios de referencia |
| Datos brutos | `Import_Purchases` | Contener los detalles de las recepciones de compra | Cantidades recibidas, precios de compra, proveedores, fechas y monedas |
| Preparación de datos | `Data_Cleaning` | Estandarizar los identificadores de SKU y consolidar los registros de inventario entre almacenes | Lista canónica de SKU, cantidades de stock consolidadas, estado de los datos maestros |
| Motor de costes | `Cost_Engine` | Convertir los importes de compra a la moneda base y calcular los referentes de coste de compra | Coste de compra de promedio ponderado, coste unitario estándar aprobado, coste de compra más reciente, variación de coste |
| Motor de márgenes | `Margin_Engine` | Normalizar los registros de ventas, convertir las ventas netas a la moneda base, emparejar costes y calcular la rentabilidad por línea | Ingresos netos, coste de bienes vendidos (COGS), beneficio bruto, margen bruto |
| Análisis de inventario | `Inventory_Analytics` | Evaluar el stock disponible, el valor del inventario, la velocidad de ventas, los días de cobertura, la rotación, la clasificación ABC y la salud del inventario | Exposición de stock y señales de reabastecimiento o de sobreabastecimiento |
| Análisis de ventas | `Sales_Analytics` | Agregar la rentabilidad por SKU y por canal de venta | Clasificaciones de margen por SKU, calificaciones de rentabilidad, contribución por canal |
| Monitoreo de excepciones | `Exception_Report` | Consolidar las excepciones de beneficio, de inventario y de coste de compra | Clasificación de riesgo, estimaciones de exposición, acciones recomendadas |
| Informes de gestión | `Executive_Dashboard` | Resumir el rendimiento a nivel de empresa y los elementos prioritarios | Ingresos, COGS, beneficio bruto, margen bruto, cumplimiento del presupuesto, valor del inventario, exposición al riesgo y los 5 SKU principales por contribución al beneficio |

### Flujo de datos

```text
Parameters
    │
    ├── Currency and exchange-rate settings
    ├── Analysis period and profitability thresholds
    ├── Inventory and ABC thresholds
    └── Purchase-cost variance threshold and gross-profit budget
            │
            ▼
Raw Cin7 Exports
    ├── Import_Sales
    ├── Import_Inventory
    └── Import_Purchases
            │
            ▼
Data Preparation and Cost Calculation
    ├── Data_Cleaning
    ├── Cost_Engine
    └── Margin_Engine
            │
            ▼
Analytical Outputs
    ├── Inventory_Analytics
    ├── Sales_Analytics
    └── Exception_Report
            │
            ▼
Executive_Dashboard
```

La dirección prevista va de los datos de origen a los resultados calculados. Usted mantiene las exportaciones brutas y los parámetros del negocio; las hojas de trabajo posteriores derivan sus resultados de esas entradas.

La especificación del libro utiliza funciones modernas de matrices dinámicas de Excel, entre ellas `UNIQUE`, `FILTER`, `SORT`, `SORTBY`, `XLOOKUP`, `SUMIFS`, `LET`, `SCAN`, `MAP` y `LAMBDA`. Los rangos generados por fórmulas están diseñados para expandirse automáticamente cuando aumentan los registros de origen o los SKU distintos, sujeto a la compatibilidad de Excel y al espacio disponible en la hoja.

### Contrato de entradas y salidas

#### Parámetros globales

La hoja `Parameters` proporciona un área de configuración centralizada. La especificación sitúa 14 parámetros de negocio en `C4:C17`.

| Celda | Parámetro | Ejemplo de valor predeterminado | Propósito |
|---|---|---:|---|
| `C4` | Símbolo de la moneda base | Definido por el usuario | Controla las etiquetas de moneda y las convenciones de visualización |
| `C5` | Tipo de cambio de USD a la moneda base | `1.0000` | Convierte las transacciones denominadas en USD |
| `C6` | Tipo de cambio de EUR a la moneda base | `1.0800` | Convierte las transacciones denominadas en EUR |
| `C7` | Periodo de análisis en días | `90` | Establece el periodo de observación de ventas |
| `C8` | Referente objetivo de margen bruto | `35%` | Define el nivel de rentabilidad objetivo |
| `C9` | Margen bruto mínimo aceptable | `10%` | Identifica los productos de margen bajo |
| `C10` | Tasa de comisión de la plataforma de canal | `5%` | Estima la contribución del canal tras la comisión configurada |
| `C11` | Umbral de advertencia de stock bajo | `15` días | Marca el inventario con días de cobertura limitados |
| `C12` | Umbral de sobreabastecimiento | `90` días | Marca el inventario con días de cobertura excesivos |
| `C13` | Umbral de ventas de inventario de lenta rotación | `0` unidades | Ayuda a identificar SKU en stock con ventas observadas insuficientes |
| `C14` | Umbral de valor acumulado de la clase A de ABC | `70%` | Define el primer límite de clasificación por valor de inventario |
| `C15` | Umbral de valor acumulado de la clase B de ABC | `90%` | Define el segundo límite de clasificación por valor de inventario |
| `C16` | Umbral de variación del coste de compra | `15%` | Marca los cambios materiales en el coste de compra |
| `C17` | Objetivo presupuestario mensual de beneficio bruto | `500,000` | Proporciona el objetivo usado en los informes de cumplimiento del presupuesto |

Estos son valores predeterminados de ejemplo de la especificación de implementación, no referentes operativos universales. Debería revisarlos frente a las políticas comerciales reales de la empresa y a sus requisitos de informes.

**Convención de moneda:** `C4` controla el símbolo de la moneda base mostrado. Los valores de tipo de cambio en `C5` y `C6` deben configurarse de forma coherente con esa moneda base. Los tipos del ejemplo no son cotizaciones de divisas en vivo.

#### Entradas de datos brutos

Las hojas de entrada están pensadas para contener registros de origen, no cálculos mantenidos por el usuario.

| Hoja de trabajo | Campos de negocio requeridos |
|---|---|
| `Import_Sales` | Número de pedido de venta, fecha de venta, canal, cliente, SKU original, cantidad, precio unitario de venta, moneda de la transacción, tasa de descuento por línea |
| `Import_Inventory` | SKU original, nombre del producto, categoría, almacén, cantidad física, cantidad reservada, cantidad de compra entrante, coste unitario de referencia |
| `Import_Purchases` | Número de orden de compra, fecha de recepción, proveedor, SKU original, cantidad recibida, precio unitario de compra, moneda de liquidación |

La especificación de origen define nueve campos de ventas, ocho campos de inventario y siete campos de compra. Las exportaciones reales de Cin7 pueden usar nombres de columna diferentes o incluir campos adicionales. Por tanto, la disposición de importación debe alinearse con la estructura de exportación de origen prevista antes del uso rutinario.

#### Resultados analíticos clave

| Hoja de trabajo | Campos de resultados principales |
|---|---|
| `Data_Cleaning` | SKU estándar, nombre y categoría estándar del producto, cantidades consolidadas físicas/reservadas/entrantes, estado de coherencia de los datos maestros |
| `Cost_Engine` | Cantidad total recibida, importe de compra en moneda base, coste unitario de compra de promedio ponderado, coste unitario de referencia, coste unitario estándar aprobado, coste unitario de compra más reciente, variación del coste de compra |
| `Margin_Engine` | Detalles normalizados del pedido, cantidad de venta válida, tipo de cambio aplicado, ingresos netos por ventas, coste unitario emparejado, COGS, beneficio bruto por línea, margen bruto por línea |
| `Inventory_Analytics` | Inventario disponible, valor del inventario, cantidad vendida en el periodo, ventas diarias medias, días de cobertura, rotación, participación acumulada en el valor del inventario, clase ABC, estado de salud del inventario |
| `Sales_Analytics` | Ingresos por SKU, COGS, beneficio bruto, margen bruto, contribución al beneficio bruto, calificación de rentabilidad, ingresos y costes por canal, contribución del canal tras las comisiones de plataforma configuradas, clasificación de canales |
| `Exception_Report` | Etiquetas de excepción por SKU, marcas de inventario y de coste, exposición estimada al riesgo, clasificación de prioridad, acción de gestión recomendada |
| `Executive_Dashboard` | Ventas netas totales, COGS, beneficio bruto, margen bruto, cumplimiento del presupuesto de beneficio bruto, valor del inventario, días de rotación de inventario, exposición por lenta rotación y por sobreabastecimiento, recuento de excepciones de alta prioridad, los 5 SKU principales por contribución al beneficio |

### Marco de decisión: cinco preguntas analíticas

El libro está diseñado para conectar cinco preguntas operativas en lugar de tratar cada informe como un panel aislado.

1. **¿Son comparables los registros subyacentes?** La normalización de SKU y la consolidación de los datos de inventario ayudan a reducir las inconsistencias causadas por diferencias de formato y por múltiples registros de almacén.
2. **¿Cuál es la contribución estimada al beneficio bruto de cada producto?** Los ingresos por ventas se normalizan a la moneda base y se emparejan con un referente de coste unitario calculado.
3. **¿Dónde está inmovilizado el capital de trabajo?** El valor del inventario, los días de cobertura, la rotación y la clasificación ABC identifican los productos que merecen distintos niveles de atención en compras y en control de stock.
4. **¿Qué excepciones requieren acción primero?** Las señales de rentabilidad, de salud del inventario y de coste de compra se consolidan en una lista de excepciones priorizada.
5. **¿Qué debería revisar primero la dirección?** El panel ejecutivo combina los resultados generales con el cumplimiento del presupuesto, la exposición de inventario y los productos de alta contribución.

Estas preguntas están conectadas, pero sus resultados no son intercambiables. El beneficio bruto no es lo mismo que el beneficio operativo o el flujo de caja; el valor del inventario no es lo mismo que el efectivo recuperable; y una estimación de contribución por canal no es una cuenta de resultados completa a nivel de canal.

### Trampas analíticas y lógica correctiva

Los ejemplos siguientes ilustran los riesgos de decisión que el marco pretende reducir. Son escenarios analíticos, no afirmaciones sobre los resultados reales de ninguna empresa en particular.

#### Trampa 1: tratar los ingresos por ventas como la rentabilidad del producto

**Decisión:** aumentar las compras de un SKU de altos ingresos.

**Fallo oculto:** la decisión se basa en el volumen de ventas o en los ingresos sin comprobar el coste asignado a las unidades vendidas.

Supongamos que un producto genera 100.000 en ventas netas y tiene 85.000 de COGS emparejado. Su beneficio bruto es 15.000 y su margen bruto es del 15 %. Un segundo producto genera 60.000 en ventas netas frente a 30.000 de COGS, lo que produce 30.000 de beneficio bruto y un margen bruto del 50 %.

| Métrica | Producto A | Producto B |
|---|---:|---:|
| Ventas netas | 100.000 | 60.000 |
| COGS | 85.000 | 30.000 |
| Beneficio bruto | 15.000 | 30.000 |
| Margen bruto | 15 % | 50 % |

Los ingresos por sí solos apuntan al producto A. La contribución al beneficio bruto apunta al producto B.

El enfoque corregido consiste en evaluar conjuntamente los ingresos, el COGS, el beneficio bruto y el margen bruto antes de tomar decisiones de inventario o promocionales. La conclusión todavía debe tener en cuenta la demanda, la disponibilidad de stock y otros costes comerciales relevantes.

<details>
<summary>Referencia de cálculo</summary>

```text
Gross Profit = Net Sales - COGS

Product A:
100,000 - 85,000 = 15,000

Product B:
60,000 - 30,000 = 30,000

Gross Margin = Gross Profit / Net Sales
```

</details>

#### Trampa 2: tratar el stock físico como stock disponible para prometer

**Decisión:** confirmar un nuevo pedido de cliente porque el informe de inventario muestra 100 unidades disponibles.

**Fallo oculto:** el informe no distingue el stock físico del stock ya reservado para pedidos existentes.

Supongamos que un SKU tiene 100 unidades físicas, 80 unidades reservadas y ninguna unidad disponible adicional procedente del stock entrante. Solo quedan 20 unidades sin reservar antes de aplicar cualquier política separada de stock de seguridad.

| Métrica | Cantidad |
|---|---:|
| Stock físico | 100 |
| Stock reservado | 80 |
| Stock físico sin reservar | 20 |

El enfoque corregido consiste en evaluar el inventario sin reservar en lugar del stock físico por sí solo. Si la empresa también necesita preservar un colchón de stock de seguridad, ese colchón debe incorporarse a su política real de disponibilidad en lugar de asumir que este cálculo lo refleja automáticamente.

Esto evita que los compromisos de venta se basen en stock que ya ha sido asignado a otro destino.

<details>
<summary>Referencia de cálculo</summary>

```text
Available Physical Stock = Physical Stock - Reserved Stock

100 - 80 = 20 units
```

El libro también registra las cantidades de compra entrantes, pero el stock entrante no debe tratarse como físicamente disponible a menos que la política operativa permita explícitamente esa interpretación.

</details>

#### Trampa 3: tratar un precio de compra bajo como prueba de una mejor economía de inventario

**Decisión:** seguir comprando a un proveedor porque su precio unitario más reciente parece atractivo.

**Fallo oculto:** la comparación ignora la base de coste existente, la conversión de tipo de cambio o el efecto de un cambio reciente en el coste de compra sobre la rentabilidad del producto.

Supongamos que el referente de coste unitario comparable anterior es 20 y que una nueva recepción se registra a 24 en la misma moneda y sobre una base comparable. El coste unitario ha aumentado un 20 %, superando el umbral de variación de ejemplo del 15 %.

| Métrica | Valor |
|---|---:|
| Referente de coste anterior | 20 |
| Coste de compra más reciente | 24 |
| Aumento absoluto | 4 |
| Aumento relativo | 20 % |
| Umbral de alerta de ejemplo | 15 % |

El enfoque corregido consiste en verificar el registro de compra, comparar los costes sobre una base de moneda coherente e investigar si el cambio refleja precios de proveedor, movimientos de divisas o un problema de calidad de datos antes de cambiar los precios o de realizar el siguiente pedido.

Una alerta de variación es un aviso para investigar, no la prueba de que el proveedor haya actuado incorrectamente ni de que la compra deba rechazarse automáticamente.

<details>
<summary>Referencia de cálculo</summary>

```text
Cost Variance Rate =
    (Latest Purchase Cost - Previous Cost Benchmark)
    / Previous Cost Benchmark

(24 - 20) / 20 = 20%
```

La regla de excepción documentada en el libro utiliza el valor absoluto de la variación del coste de compra al compararla con el umbral configurado.

</details>

### Escenario de ejemplo: de los registros exportados a una revisión de gestión

Considere una empresa hipotética con múltiples canales de venta y ubicaciones de almacén. La empresa exporta líneas de ventas, una instantánea de inventario y registros de recepciones de compra desde su sistema existente.

El periodo de análisis se fija en 90 días. El margen bruto objetivo de ejemplo es del 35 %, el umbral de margen bajo es del 10 %, la advertencia de stock bajo es de 15 días de cobertura y el umbral de sobreabastecimiento es de 90 días de cobertura.

Los registros importados muestran los siguientes resultados para un SKU:

| Entrada o cálculo | Valor de ejemplo |
|---|---:|
| Ventas netas en el periodo de análisis | 100.000 |
| COGS emparejado | 85.000 |
| Beneficio bruto | 15.000 |
| Margen bruto | 15 % |
| Stock físico | 500 unidades |
| Stock reservado | 100 unidades |
| Stock físico neto sin reservar | 400 unidades |
| Ventas durante el periodo de 90 días | 900 unidades |
| Ventas diarias medias | 10 unidades |
| Días de cobertura | 40 días |

El margen bruto está por debajo del objetivo del 35 % pero por encima del umbral mínimo del 10 %. Por tanto, el SKU requiere revisión de rentabilidad aunque no se clasifique necesariamente como excepción de margen bajo según la regla configurada.

La posición de inventario representa aproximadamente 40 días de cobertura, lo que se sitúa entre los umbrales de ejemplo de stock bajo y de sobreabastecimiento. Eso no establece automáticamente que el nivel de inventario sea óptimo: los plazos de entrega de compra, la variabilidad de la demanda y los requisitos de stock de seguridad siguen siendo relevantes.

La recomendación práctica es revisar los precios, los descuentos y los supuestos de coste del SKU mientras se comprueba si la cobertura actual de stock es apropiada para la demanda esperada. Si el producto aporta un beneficio bruto total sustancial, una revisión de precios o del coste del proveedor puede ser más apropiada que una decisión inmediata de retirada del catálogo.

El panel respalda esta revisión situando la rentabilidad del producto, la exposición de inventario y las señales de excepción en un flujo de trabajo de informes común. La decisión final sigue dependiendo de los datos de origen verificados y de las limitaciones operativas de la empresa.

### Referencia de fórmulas

Las fórmulas siguientes describen la lógica de cálculo prevista del libro. Son patrones de referencia, no fórmulas verificadas celda por celda de un libro publicado. Adapte las referencias de columna a la disposición real de la hoja antes de la implementación.

<details>
<summary>1. Normalización de SKU y consolidación de inventario</summary>

**Propósito:** reducir las discrepancias causadas por diferencias de formato en los SKU y consolidar los registros de stock entre ubicaciones de almacén.

```excel
=UPPER(TRIM(SKU_Cell))
```

Este patrón de normalización elimina los espacios iniciales y finales y estandariza el texto del SKU en mayúsculas. Aplique la misma convención de normalización a los registros de ventas, inventario y compras antes de emparejar registros entre orígenes.

```excel
=UNIQUE(Standardized_SKU_Range)
```

Devuelve una lista distinta de identificadores de SKU normalizados.

**Patrón de agregación de inventario:**

```excel
=SUMIFS(
    Physical_Quantity_Range,
    Standardized_SKU_Range,
    Current_SKU
)
```

Repita la agregación para las cantidades reservadas y para las cantidades entrantes. Los criterios de agregación deben usar la misma clave de SKU normalizada en todas las tablas de origen.

**Importante:** la normalización de SKU puede resolver diferencias de mayúsculas y minúsculas y de espacios circundantes. No puede resolver de forma fiable identificadores de producto genuinamente distintos, asignaciones incorrectas de SKU ni relaciones ambiguas del maestro de productos. Esos casos requieren revisión de los datos de origen.

</details>

<details>
<summary>2. Cálculo del coste de compra</summary>

**Propósito:** convertir los importes de compra a la moneda base configurada, calcular un coste de compra de promedio ponderado e identificar cambios en los costes de compra recientes.

**Importe de compra en moneda base:**

```text
Base-Currency Purchase Amount
    = Received Quantity
    × Purchase Unit Price
    × Applicable Exchange Rate
```

El tipo de cambio debe seguir una convención coherente: unidades de moneda base por unidad de moneda de la transacción. Si los datos de origen ya contienen valores en moneda base, no convierta esos valores por segunda vez.

**Coste unitario de compra de promedio ponderado:**

```text
Weighted-Average Unit Cost
    = Total Base-Currency Purchase Amount
    / Total Received Quantity
```

Calcule el numerador y el denominador sobre la misma población definida de recepciones de compra válidas. Excluya los registros inválidos y trate las cantidades totales cero o negativas según la política de entrada documentada.

**Variación del coste de compra:**

```text
Cost Variance Rate
    = (Latest Unit Cost - Reference Unit Cost)
    / Reference Unit Cost
```

El umbral configurado identifica las desviaciones materiales que deben investigarse. Un coste de referencia cero o faltante debe tratarse como una comparación no disponible, no como una variación porcentual válida.

La especificación distingue el coste de compra de promedio ponderado, un coste unitario estándar aprobado y el coste unitario de compra más reciente. Su selección y su precedencia deben definirse explícitamente en el libro implementado; no debe asumirse que son intercambiables.

</details>

<details>
<summary>3. Cálculo del margen de ventas</summary>

**Propósito:** calcular la rentabilidad por línea de pedido utilizando los ingresos netos por ventas y un referente de coste unitario asignado.

```text
Net Sales Revenue
    = Quantity
    × Unit Selling Price
    × (1 - Line Discount Rate)
    × Applicable Exchange Rate
```

Este patrón asume que la tasa de descuento está representada como un decimal y que el precio unitario de venta exportado es anterior al descuento por línea. Si la exportación de origen ya proporciona los ingresos netos por línea, utilice ese valor en lugar de aplicar el descuento por segunda vez.

```text
Cost of Goods Sold (COGS)
    = Valid Sales Quantity
    × Matched Unit Cost
```

```text
Gross Profit
    = Net Sales Revenue - COGS
```

```text
Gross Margin
    = Gross Profit / Net Sales Revenue
```

El margen bruto queda indefinido cuando los ingresos netos por ventas son cero. La implementación debe devolver un espacio en blanco controlado o un estado explícito en lugar de dividir por cero.

**Interpretación:** el beneficio bruto mide el importe que queda tras el coste de producto asignado. Por sí solo no incluye todos los gastos operativos, costes de cumplimiento, costes de marketing u otros gastos que puedan ser necesarios para determinar la rentabilidad totalmente cargada.

</details>

<details>
<summary>4. Salud del inventario y clasificación ABC</summary>

**Propósito:** estimar la disponibilidad del inventario, la cobertura, la exposición de valor y la contribución relativa al valor del inventario.

```text
Unreserved Physical Stock
    = Physical Stock - Reserved Stock
```

Si la empresa mantiene una política separada de stock de seguridad, utilícela explícitamente al determinar la disponibilidad operativa.

```text
Average Daily Sales
    = Units Sold During Analysis Period
    / Analysis Period Days
```

```text
Days of Supply
    = Relevant Available Stock
    / Average Daily Sales
```

Cuando las ventas diarias medias son cero, los días de cobertura no deben informarse como cero. Utilice un estado controlado como `No Recent Sales` o una excepción equivalente.

```text
Inventory Value
    = Selected Stock Quantity
    × Selected Unit Cost
```

La implementación debe definir qué cantidad y qué base de coste se usan para la valoración del inventario. El stock físico, el stock sin reservar y el stock entrante representan conceptos operativos distintos y no deben combinarse sin una política clara.

**Clasificación ABC:** ordene los SKU por la medida de valor de inventario seleccionada, calcule el valor acumulado del inventario como proporción del total y clasifique cada SKU utilizando los límites configurados de las clases A y B.

La configuración de ejemplo utiliza umbrales de valor acumulado del 70 % y del 90 %. Estos límites son ajustes del negocio, no estándares universales. El cálculo también debe manejar un conjunto de inventario vacío o un valor total de inventario cero sin producir porcentajes inválidos.

</details>

<details>
<summary>5. Monitoreo de excepciones y métricas del panel</summary>

**Propósito:** traducir los resultados analíticos en prioridades de revisión.

La especificación identifica cinco tipos principales de excepción:

- Beneficio bruto cero.
- Beneficio bruto negativo.
- Sobreabastecimiento.
- Riesgo de desabastecimiento o stock bajo.
- Variación del coste de compra.

El libro utiliza umbrales configurables para marcar las excepciones. Las etiquetas de estado exactas y la precedencia deben verificarse contra la implementación final.

**Patrón de ejemplo de umbral de coste de compra:**

```text
IF absolute cost variance exceeds configured threshold:
    Flag for investigation
ELSE:
    No cost-variance alert
```

**Cumplimiento del presupuesto:**

```text
Gross-Profit Budget Attainment
    = Actual Gross Profit / Gross-Profit Budget Target
```

Cuando el objetivo presupuestario es cero o falta, el panel debe mostrar un estado controlado de no disponible en lugar de un ratio inválido.

**Contribución por canal:** la especificación incluye una tasa estimada de comisión de plataforma. Un cálculo que reste solo esa comisión del beneficio bruto es una medida de contribución parcial, no un cálculo completo del beneficio por canal. Otros gastos específicos del canal deben incluirse por separado si la empresa necesita una comparación de canal totalmente cargada.

</details>

### Reglas de validación

Las reglas siguientes describen las comprobaciones necesarias para mantener interpretables los resultados analíticos. Cuando la especificación de origen no define un estado de error automatizado preciso, el comportamiento esperado se expresa como un requisito de implementación y no como la afirmación de que el libro ya lo aplica.

| Campo o área | Regla de validación | Comportamiento esperado ante errores |
|---|---|---|
| Moneda base | Definir una única moneda base y usarla de forma coherente en todos los resultados de los informes | Marcar las configuraciones de moneda incoherentes; no mezclar monedas de forma silenciosa |
| Tipos de cambio | Requerir un tipo válido y positivo para cada divisa extranjera que necesite conversión | Marcar los tipos faltantes o inválidos; los importes convertidos afectados no deben tratarse como verificados |
| Periodo de análisis | Requerir un número positivo de días | Rechazar o marcar los periodos cero, negativos o faltantes |
| Umbrales de margen | Usar valores porcentuales válidos y garantizar el orden previsto entre los umbrales objetivo y mínimo | Marcar las configuraciones inválidas para revisión |
| Tasa de comisión de canal | Requerir una tasa válida y coherente con la convención porcentual esperada | Marcar los valores inválidos en lugar de permitir contribuciones negativas o infladas no deseadas |
| Límites ABC | Requerir umbrales de valor acumulado entre el 0 % y el 100 %, con el límite A no mayor que el límite B | Marcar los límites incoherentes |
| Umbral de variación del coste de compra | Requerir un umbral porcentual no negativo | Marcar las configuraciones negativas o no numéricas |
| Objetivo presupuestario | Requerir un objetivo numérico válido para los informes de cumplimiento | Mostrar un estado de no disponible cuando el denominador sea cero o falte |
| Cantidad de ventas | Validar las cantidades numéricas e investigar los registros inválidos antes de calcular la rentabilidad | Excluir o marcar las filas inválidas según la política de importación documentada |
| Precio unitario de venta | Validar los valores numéricos y la convención de moneda usada por la exportación de origen | Marcar los precios inválidos; no interpretar de forma silenciosa los precios faltantes como ventas verificadas a precio cero |
| Tasa de descuento por línea | Validar la representación numérica de la tasa y el rango comercial permitido | Marcar las tasas inválidas; evitar aplicar el descuento dos veces |
| Cantidad de compra | Validar las cantidades recibidas e identificar las cantidades cero o negativas que requieran tratamiento especial | Marcar los registros que no puedan incluirse de forma segura en el coste de promedio ponderado |
| Precio unitario de compra | Validar los valores numéricos y la coherencia de moneda | Marcar los precios inválidos y evitar que distorsionen de forma silenciosa los referentes de coste |
| Identificadores de SKU | Normalizar mayúsculas, minúsculas y espacios circundantes de forma coherente en las tres importaciones | Marcar los identificadores faltantes o sin coincidencia; investigar las coincidencias ambiguas |
| Cantidades de inventario | Validar por separado las cantidades físicas, reservadas y entrantes | Marcar los saldos incoherentes o inválidos; no asumir que el stock entrante está físicamente disponible |
| Emparejamiento de costes | Requerir una fuente de coste válida o un respaldo explícitamente aprobado | Marcar los costes sin emparejar; no interpretar un coste faltante como un coste cero confirmado |
| Cálculo del margen bruto | No dividir por ingresos netos cero | Devolver un espacio en blanco controlado o un estado explícito |
| Cálculo de los días de cobertura | No dividir por ventas diarias medias cero | Devolver un estado de sin ventas recientes o equivalente |
| Rangos de salida de las matrices dinámicas | Mantener el área de derrame de la fórmula libre de valores introducidos manualmente | Resolver las celdas bloqueadoras sin eliminar el ancla de la fórmula |
| Disposición de importación | Hacer coincidir las columnas de origen con las definiciones de campo esperadas | Corregir el mapeo de importación antes de confiar en los cálculos posteriores |

### Limitaciones conocidas y compatibilidad

#### Compatibilidad con Excel

La especificación del libro se basa en funciones modernas de matrices dinámicas, entre ellas `FILTER`, `UNIQUE`, `SORTBY` y `SCAN`. Requiere Microsoft 365, Excel 2021, Excel 2024 o una versión compatible de WPS que admita las funciones necesarias.

Excel 2016, Excel 2019 y las versiones anteriores no son compatibles con el diseño de cálculo especificado.

#### Volumen de datos

La especificación contempla hasta 50.000 filas de detalle por tabla de origen, con un total combinado recomendado inferior a 100.000 filas para mantener un rendimiento de cálculo ágil. El rendimiento real depende de la aplicación de hoja de cálculo, del hardware, de la complejidad de las fórmulas y del tamaño de los datos importados.

#### Edición y colaboración

- No ordene manualmente, ni escriba en ellos, ni sobrescriba los rangos de derrame de las matrices dinámicas.
- Evite que varios usuarios peguen y modifiquen de forma independiente los datos de origen en la misma copia de trabajo.
- Conserve una copia separada de las exportaciones originales para que los errores de importación puedan rastrearse y corregirse.
- Revise las coincidencias de SKU, la configuración de moneda y los supuestos de coste unitario antes de usar los resultados para decisiones de compras o de precios.

#### Interpretación de costes y beneficios

Los costes basados en recepciones de compra pueden no coincidir con el COGS reconocido por el sistema contable en todas las situaciones. El flete, los aranceles, la asignación del coste landed, las devoluciones, los abonos de proveedores, las amortizaciones y las políticas de valoración de inventario pueden generar diferencias.

Por tanto, el margen calculado debe tratarse como un resultado analítico operativo basado en el método de coste configurado, no automáticamente como un sustituto de los estados financieros conciliados.

</details>


---

### Solución de problemas

<details>
<summary>¿Por qué Excel muestra #SPILL!?</summary>

Una fórmula de matriz dinámica no puede expandirse porque una o más celdas de su rango de salida están ocupadas.

1. Seleccione la celda que muestra `#SPILL!`.
2. Inspeccione el rango de derrame indicado en busca de valores introducidos manualmente, espacios u otro contenido bloqueador.
3. Borre solo los contenidos no deseados que bloquean el rango de derrame.
4. Conserve la fórmula en la celda ancla.
5. Confirme que la salida se expande como se espera.

No borre el ancla de la fórmula al solucionar un rango de derrame bloqueado.

</details>

<details>
<summary>¿Por qué un producto nuevo muestra un margen bruto del 100 % o un COGS cero?</summary>

Puede que el producto falte en los datos de referencia de inventario, que no tenga un historial válido de recepciones de compra o que no disponga de un coste unitario de referencia configurado.

1. Compruebe si el SKU existe en la importación de inventario.
2. Confirme que su identificador coincide con el SKU normalizado usado por los registros de ventas y compras.
3. Compruebe si existen recepciones de compra válidas para el producto.
4. Si el producto no tiene historial de compras, confirme si dispone de un coste unitario de referencia legítimo.
5. Vuelva a calcular y verifique el margen resultante antes de usarlo para decisiones de precios o de compras.

Un resultado de coste cero no debe interpretarse automáticamente como un producto genuinamente sin coste.

</details>

<details>
<summary>¿Por qué los totales de ventas, compras o inventario parecen incoherentes?</summary>

Revise el periodo del informe, la moneda de la transacción, las filas duplicadas de origen, la coincidencia de SKU y el nivel de detalle de cada conjunto de datos importado. Las tablas de ventas y compras son registros a nivel de transacción, mientras que el inventario es una instantánea por SKU y almacén. Sumar o emparejar estos conjuntos de datos sin respetar sus distintos niveles de detalle puede producir resultados engañosos.

Compare una pequeña muestra de registros de origen con el resultado calculado correspondiente antes de confiar en los totales agregados.

</details>

</details>

---


## Otras herramientas de esta serie

Theseus Workshop desarrolla herramientas ligeras de decisión empresarial basadas en Excel para problemas operativos y financieros recurrentes.

- **Herramientas de estimación de costes de construcción** — organizan los desgloses de cantidades, los supuestos de coste y las estimaciones de proyecto.
- **Herramientas de rentabilidad de inventario y pedidos** — conectan el stock, los pedidos, los costes y el rendimiento financiero por producto.
- **Modelos de planificación financiera y escenarios** — respaldan la elaboración estructurada de presupuestos, las previsiones y las revisiones de decisiones empresariales.

Explore los proyectos disponibles en el [perfil de GitHub de Theseus Workshop](https://github.com/HyVoid).

## Licencia

Este proyecto se publica bajo la **Apache License 2.0**. Consulte el archivo `LICENSE` del repositorio para conocer los términos completos de la licencia.
