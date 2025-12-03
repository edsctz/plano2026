import React from 'react';
import { TipData } from '../types';
import AITool from './AITool';
import { CheckCircle, AlertTriangle, Clock, Wrench } from 'lucide-react';

interface TipDetailProps {
  tip: TipData;
}

const TipDetail: React.FC<TipDetailProps> = ({ tip }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8 animate-fade-in pb-20">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center space-x-2 text-emerald-600 text-sm font-bold uppercase tracking-wider mb-2">
            <span>Dica #{tip.id}</span>
            <span>•</span>
            <span>{tip.category}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{tip.title}</h1>
        <p className="text-xl text-slate-500 mt-2">{tip.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Info Column */}
        <div className="lg:col-span-1 space-y-6">
            
            {/* The Challenge */}
            <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                <div className="flex items-start space-x-3">
                    <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                        <h3 className="font-bold text-red-900 mb-1">O Desafio</h3>
                        <p className="text-red-700 text-sm leading-relaxed">{tip.problem}</p>
                    </div>
                </div>
            </div>

            {/* The Solution */}
            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
                <div className="flex items-start space-x-3">
                    <CheckCircle className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                        <h3 className="font-bold text-emerald-900 mb-1">Como a IA Resolve</h3>
                        <p className="text-emerald-700 text-sm leading-relaxed">{tip.solution}</p>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-start space-x-3">
                    <Clock className="text-blue-500 mt-0.5" size={18} />
                    <div>
                        <h4 className="text-xs font-bold text-slate-500 uppercase">Resultado Esperado</h4>
                        <p className="text-slate-800 text-sm font-medium mt-1">{tip.roi}</p>
                    </div>
                </div>
                <div className="flex items-start space-x-3 border-t border-slate-100 pt-4">
                    <Wrench className="text-purple-500 mt-0.5" size={18} />
                    <div>
                        <h4 className="text-xs font-bold text-slate-500 uppercase">Ferramentas</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {tip.tools.map(tool => (
                                <span key={tool} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md border border-slate-200">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* AI Tool Column */}
        <div className="lg:col-span-2 min-h-[600px]">
            <AITool initialPrompt={tip.promptTemplate} tipId={tip.id} />
        </div>
      </div>
    </div>
  );
};

export default TipDetail;
