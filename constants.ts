import { ProcessStep, MetricData } from './types';

export const AS_IS_STEPS: ProcessStep[] = [
  {
    id: 'as-is-1',
    title: 'Recepción de Productos',
    description: 'Llegada de materiales al almacén desde proveedores.',
    iconType: 'Truck',
    status: 'manual',
    details: [
      'Entrada física de mercancía.',
      'Documentación en papel (Guías de remisión física).',
      'Sin notificación previa digital.'
    ],
    painPoints: ['Falta de coordinación previa', 'Cuellos de botella en patio']
  },
  {
    id: 'as-is-2',
    title: 'Registro Manual',
    description: 'Uso de hojas de cálculo (Excel) y formularios físicos.',
    iconType: 'FileSpreadsheet',
    status: 'error',
    details: [
      'Digitación manual de datos.',
      'Uso de Excel desconectado.',
      'Papeles suceptibles a pérdida.'
    ],
    painPoints: ['Duplicidad de registros', 'Errores de digitación', 'Información aislada (Silos)']
  },
  {
    id: 'as-is-3',
    title: 'Verificación Visual',
    description: 'Inspección manual de cantidad y estado.',
    iconType: 'Eye',
    status: 'manual',
    details: [
      'Conteo físico uno a uno.',
      'Validación subjetiva del estado.',
      'Sin herramientas de escaneo.'
    ],
    painPoints: ['Lento y propenso a error humano', 'Sin validación contra Orden de Compra real']
  },
  {
    id: 'as-is-4',
    title: 'Almacenamiento Físico',
    description: 'Ubicación sin criterio estandarizado.',
    iconType: 'PackageOpen',
    status: 'error',
    details: [
      'Depende de la memoria del operario.',
      'Sin registro de ubicación en sistema.',
      'Espacio subutilizado.'
    ],
    painPoints: ['Pérdida de trazabilidad', 'Dificultad para encontrar productos (Picking lento)']
  },
  {
    id: 'as-is-5',
    title: 'Actualización Manual',
    description: 'Desfase en la actualización de stock.',
    iconType: 'Clock',
    status: 'error',
    details: [
      'Actualización batch (al final del día o semana).',
      'Inventario registrado vs Físico no coincide.'
    ],
    painPoints: ['Stock desactualizado', 'Quiebres de stock no detectados', 'Ventas perdidas']
  },
  {
    id: 'as-is-6',
    title: 'Solicitud de Despacho',
    description: 'Pedidos vía correo o mensajes informales.',
    iconType: 'Mail',
    status: 'manual',
    details: [
      'Pedidos por WhatsApp o Email.',
      'Sin flujo de aprobación digital.',
      'Sin reserva de stock automática.'
    ],
    painPoints: ['Pedidos perdidos', 'Falta de priorización', 'Sin historial de pedidos']
  }
];

export const TO_BE_STEPS: ProcessStep[] = [
  {
    id: 'to-be-1',
    title: 'Registro Digital (Cloud)',
    description: 'Ingreso mediante lectura de códigos QR/Barras.',
    iconType: 'QrCode',
    status: 'cloud',
    details: [
      'Lectura automática con Handhelds/Tablets.',
      'Conexión directa al ERP en la Nube.',
      'Identificación única de lote.'
    ],
    benefits: ['Ingreso 90% más rápido', 'Eliminación de papel']
  },
  {
    id: 'to-be-2',
    title: 'Validación Automática',
    description: 'Cruce automático con Orden de Compra (OC).',
    iconType: 'CheckCircle',
    status: 'success',
    details: [
      'El sistema alerta discrepancias al instante.',
      'Validación de cantidades y pesos.',
      'Bloqueo de ingresos no autorizados.'
    ],
    benefits: ['Eliminación de errores de recepción', 'Control financiero exacto']
  },
  {
    id: 'to-be-3',
    title: 'Control de Calidad Lotes',
    description: 'Trazabilidad completa de lote y vencimiento.',
    iconType: 'ClipboardCheck',
    status: 'success',
    details: [
      'Registro digital de parámetros de calidad.',
      'Bloqueo automático de lotes defectuosos.',
      'Gestión FEFO/FIFO automática.'
    ],
    benefits: ['Cumplimiento sanitario', '100% Trazabilidad']
  },
  {
    id: 'to-be-4',
    title: 'Locación Inteligente',
    description: 'Algoritmo de asignación de ubicación.',
    iconType: 'MapPin',
    status: 'automation',
    details: [
      'El ERP sugiere la mejor ubicación (ABC).',
      'Optimización de recorrido de picking.',
      'Mapa de calor del almacén.'
    ],
    benefits: ['Optimización de espacio', 'Picking eficiente']
  },
  {
    id: 'to-be-5',
    title: 'Inventario Real-Time',
    description: 'Actualización instantánea en la Nube.',
    iconType: 'CloudLightning',
    status: 'cloud',
    details: [
      'Visibilidad 24/7 desde cualquier lugar.',
      'Alertas de reposición automáticas.',
      'Sincronización con Ventas y Contabilidad.'
    ],
    benefits: ['Stock 100% confiable', 'Toma de decisiones ágil']
  },
  {
    id: 'to-be-6',
    title: 'KPIs y Dashboard',
    description: 'Analítica avanzada con Power BI.',
    iconType: 'BarChart3',
    status: 'automation',
    details: [
      'Indicadores de gestión en vivo.',
      'Reportes de rotación y mermas.',
      'Proyección de demanda.'
    ],
    benefits: ['Visibilidad estratégica', 'Mejora continua basada en datos']
  }
];

export const COMPARISON_METRICS: MetricData[] = [
  { name: 'Precisión de Inventario', asIs: 65, toBe: 99, unit: '%' },
  { name: 'Tiempo de Despacho', asIs: 48, toBe: 24, unit: 'hrs' }, // Inverted logic for charts usually requires explanation, but we'll visualize scale
  { name: 'Errores de Registro', asIs: 40, toBe: 2, unit: '%' },
  { name: 'Trazabilidad', asIs: 20, toBe: 100, unit: '%' },
];
