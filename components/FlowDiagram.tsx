import React, { useState } from 'react';
import { ProcessStep } from '../types';
import { 
  Truck, 
  FileSpreadsheet, 
  Eye, 
  PackageOpen, 
  Clock, 
  Mail, 
  QrCode, 
  CheckCircle, 
  ClipboardCheck, 
  MapPin, 
  CloudLightning, 
  BarChart3,
  AlertTriangle,
  ArrowDown,
  Server
} from 'lucide-react';

interface FlowDiagramProps {
  steps: ProcessStep[];
  type: 'AS_IS' | 'TO_BE';
}

const IconMap: Record<string, React.FC<any>> = {
  Truck, FileSpreadsheet, Eye, PackageOpen, Clock, Mail,
  QrCode, CheckCircle, ClipboardCheck, MapPin, CloudLightning, BarChart3, Server
};

const FlowDiagram: React.FC<FlowDiagramProps> = ({ steps, type }) => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  const isAsIs = type === 'AS_IS';
  const themeColor = isAsIs ? 'slate' : 'blue';
  const lineColor = isAsIs ? 'bg-slate-300' : 'bg-blue-400';

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full">
      {/* Diagram Column */}
      <div className="flex-1 relative py-4 px-2">
        {/* Connecting Line */}
        <div className={`absolute left-8 top-8 bottom-8 w-1 ${lineColor} rounded-full hidden md:block z-0 opacity-50`}></div>

        <div className="space-y-8 relative z-10">
          {steps.map((step, index) => {
            const Icon = IconMap[step.iconType] || PackageOpen;
            const isActive = activeStep === step.id;
            
            // Dynamic styles based on status
            let statusBorder = 'border-slate-200';
            let statusBg = 'bg-white';
            let iconColor = 'text-slate-500';

            if (step.status === 'error') {
              statusBorder = 'border-red-200';
              statusBg = 'bg-red-50';
              iconColor = 'text-red-500';
            } else if (step.status === 'cloud') {
              statusBorder = 'border-blue-300';
              statusBg = 'bg-blue-50';
              iconColor = 'text-blue-600';
            } else if (step.status === 'success') {
              statusBorder = 'border-green-300';
              statusBg = 'bg-green-50';
              iconColor = 'text-green-600';
            } else if (step.status === 'automation') {
              statusBorder = 'border-indigo-300';
              statusBg = 'bg-indigo-50';
              iconColor = 'text-indigo-600';
            }

            return (
              <div 
                key={step.id}
                className={`flex items-start group cursor-pointer transition-all duration-300 ${isActive ? 'translate-x-2' : ''}`}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Node Circle */}
                <div className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border-2 transition-all duration-300
                  ${statusBg} ${statusBorder} ${isActive ? 'ring-4 ring-opacity-30 ' + (isAsIs ? 'ring-red-400' : 'ring-blue-400') : ''}
                `}>
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                </div>

                {/* Content */}
                <div className="ml-6 pt-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-lg font-bold ${isActive ? (isAsIs ? 'text-slate-800' : 'text-blue-700') : 'text-slate-700'}`}>
                      {step.title}
                    </h4>
                    {isActive && <div className={`text-xs px-2 py-1 rounded-full uppercase font-bold tracking-wider ${isAsIs ? 'bg-slate-200 text-slate-600' : 'bg-blue-100 text-blue-600'}`}>
                      {step.status}
                    </div>}
                  </div>
                  <p className="text-sm text-slate-500 mt-1 pr-4">
                    {step.description}
                  </p>
                  
                  {/* Expandable Mobile/Desktop details in flow */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                     <div className={`p-4 rounded-lg text-sm border ${isAsIs ? 'bg-red-50 border-red-100' : 'bg-blue-50 border-blue-100'}`}>
                        <strong className="block mb-2 text-xs uppercase tracking-wider opacity-70">Detalles:</strong>
                        <ul className="list-disc list-inside space-y-1 mb-3">
                          {step.details.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
                        {step.painPoints && (
                          <div className="text-red-700">
                             <strong className="flex items-center gap-2 mb-1 text-xs uppercase"><AlertTriangle size={12}/> Puntos de Dolor:</strong>
                             <ul className="list-none space-y-1 pl-1">
                                {step.painPoints.map((p, i) => <li key={i} className="text-xs bg-red-100 inline-block px-2 py-0.5 rounded mr-1 mb-1">{p}</li>)}
                             </ul>
                          </div>
                        )}
                        {step.benefits && (
                          <div className="text-green-700">
                             <strong className="flex items-center gap-2 mb-1 text-xs uppercase"><CheckCircle size={12}/> Beneficios:</strong>
                             <ul className="list-none space-y-1 pl-1">
                                {step.benefits.map((b, i) => <li key={i} className="text-xs bg-green-100 inline-block px-2 py-0.5 rounded mr-1 mb-1">{b}</li>)}
                             </ul>
                          </div>
                        )}
                     </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* End Node */}
           <div className="flex items-center group opacity-50">
             <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 border-dashed ${isAsIs ? 'border-slate-300' : 'border-blue-300'} bg-transparent`}>
                <ArrowDown className="text-slate-400" />
             </div>
             <div className="ml-6">
                <span className="text-sm text-slate-400 italic">Fin del proceso {isAsIs ? 'manual' : 'digital'}</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDiagram;
