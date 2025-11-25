import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { COMPARISON_METRICS } from '../constants';

const ComparisonChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-white rounded-xl shadow-sm p-6 border border-slate-100">
      <h3 className="text-lg font-semibold text-slate-800 mb-6">Impacto de la Implementación Cloud ERP</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={COMPARISON_METRICS}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#64748b', fontSize: 12 }} 
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            tick={{ fill: '#64748b', fontSize: 12 }} 
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            cursor={{ fill: '#f1f5f9' }}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Bar dataKey="asIs" name="AS IS (Actual)" fill="#94a3b8" radius={[4, 4, 0, 0]}>
            {COMPARISON_METRICS.map((entry, index) => (
                <Cell key={`cell-as-${index}`} fill={entry.name === 'Tiempo de Despacho' || entry.name === 'Errores de Registro' ? '#ef4444' : '#94a3b8'} />
            ))}
          </Bar>
          <Bar dataKey="toBe" name="TO BE (Cloud ERP)" fill="#0ea5e9" radius={[4, 4, 0, 0]}>
             {COMPARISON_METRICS.map((entry, index) => (
                <Cell key={`cell-to-${index}`} fill={entry.name === 'Tiempo de Despacho' || entry.name === 'Errores de Registro' ? '#22c55e' : '#0ea5e9'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-xs text-slate-500 text-center">
        * Nota: Para "Tiempo" y "Errores", una barra menor en TO BE es positiva (Mejora). Para Precisión y Trazabilidad, mayor es mejor.
      </div>
    </div>
  );
};

export default ComparisonChart;