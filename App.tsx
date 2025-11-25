import React, { useState } from 'react';
import FlowDiagram from './components/FlowDiagram';
import ComparisonChart from './components/ComparisonChart';
import { AS_IS_STEPS, TO_BE_STEPS } from './constants';
import { LayoutDashboard, ArrowRightLeft, Cloud, AlertCircle, Database, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'AS_IS' | 'TO_BE' | 'COMPARE'>('AS_IS');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleView = (view: 'AS_IS' | 'TO_BE' | 'COMPARE') => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                 <Database size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 leading-tight">MAR ANDINO</h1>
                <p className="text-xs text-slate-500 font-medium">ERP & Cloud Computing Project</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => toggleView('AS_IS')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${currentView === 'AS_IS' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
              >
                <AlertCircle size={18} /> AS IS (Actual)
              </button>
              <button 
                onClick={() => toggleView('TO_BE')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${currentView === 'TO_BE' ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
              >
                <Cloud size={18} /> TO BE (Propuesto)
              </button>
              <button 
                onClick={() => toggleView('COMPARE')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${currentView === 'COMPARE' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
              >
                <LayoutDashboard size={18} /> Resultados
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-500 hover:text-slate-700">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 py-2 space-y-1 shadow-lg">
             <button onClick={() => toggleView('AS_IS')} className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2">
                <AlertCircle size={18} /> AS IS (Actual)
             </button>
             <button onClick={() => toggleView('TO_BE')} className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50 flex items-center gap-2">
                <Cloud size={18} /> TO BE (Propuesto)
             </button>
             <button onClick={() => toggleView('COMPARE')} className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-indigo-600 hover:bg-indigo-50 flex items-center gap-2">
                <LayoutDashboard size={18} /> Resultados
             </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            {currentView === 'AS_IS' && 'Proceso Actual (AS IS)'}
            {currentView === 'TO_BE' && 'Modelo Cloud Computing (TO BE)'}
            {currentView === 'COMPARE' && 'Análisis de Impacto'}
          </h2>
          <p className="text-slate-600 max-w-3xl">
            {currentView === 'AS_IS' && 'Gestión actual de inventarios caracterizada por procesos manuales, uso de Excel desconectado y falta de trazabilidad en tiempo real. Alta dependencia operativa humana.'}
            {currentView === 'TO_BE' && 'Implementación de ERP alojado en la Nube con integración de IoT (Handhelds), validación automática y dashboards de Business Intelligence (Power BI).'}
            {currentView === 'COMPARE' && 'Comparativa de eficiencia operativa, reducción de errores y mejora en tiempos de despacho tras la implementación de la tecnología Cloud.'}
          </p>
        </div>

        {/* View Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 min-h-[600px] overflow-hidden">
          
          {currentView === 'COMPARE' ? (
             <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Chart */}
                  <div className="lg:col-span-2">
                     <ComparisonChart />
                  </div>

                  {/* Summary Cards */}
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h3 className="text-red-800 font-bold mb-3 flex items-center gap-2">
                      <AlertCircle size={20}/> Problemas Detectados (AS IS)
                    </h3>
                    <ul className="space-y-2 text-red-700 text-sm">
                      <li className="flex gap-2"><span>•</span> Duplicidad de registros y silos de información.</li>
                      <li className="flex gap-2"><span>•</span> Stock desactualizado genera pérdida de ventas.</li>
                      <li className="flex gap-2"><span>•</span> Alta dependencia de Excel y papel.</li>
                      <li className="flex gap-2"><span>•</span> Trazabilidad nula de lotes.</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-green-800 font-bold mb-3 flex items-center gap-2">
                      <Cloud size={20}/> Solución Cloud (TO BE)
                    </h3>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li className="flex gap-2"><span>•</span> <strong>Infraestructura:</strong> Cero servidores físicos (SaaS/Cloud).</li>
                      <li className="flex gap-2"><span>•</span> <strong>Acceso:</strong> 24/7 desde móviles y tablets.</li>
                      <li className="flex gap-2"><span>•</span> <strong>Integración:</strong> ERP + WMS + Power BI unificados.</li>
                      <li className="flex gap-2"><span>•</span> <strong>Control:</strong> Validación vs Orden de Compra automática.</li>
                    </ul>
                  </div>
                </div>
             </div>
          ) : (
            <div className="p-6 md:p-10 bg-gradient-to-br from-white to-slate-50 h-full">
              <div className="flex justify-between items-center mb-6">
                 <div className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Flujo del Proceso
                 </div>
                 <div className="flex gap-2">
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                       <div className={`w-3 h-3 rounded-full ${currentView === 'AS_IS' ? 'bg-red-100 border border-red-200' : 'bg-blue-100 border border-blue-200'}`}></div>
                       {currentView === 'AS_IS' ? 'Punto Crítico' : 'Cloud/Digital'}
                    </span>
                 </div>
              </div>
              <FlowDiagram 
                steps={currentView === 'AS_IS' ? AS_IS_STEPS : TO_BE_STEPS} 
                type={currentView} 
              />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-8">
         <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
            <p>Proyecto de Digitalización Mar Andino Perú S.A.C. - 2025</p>
         </div>
      </footer>
    </div>
  );
};

export default App;
