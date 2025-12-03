import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Cpu, Sparkles } from 'lucide-react';

const FrameworkItem = ({ text, color = 'blue' }: { text: string; color?: 'blue' | 'emerald' }) => {
  const iconBg = color === 'blue' ? 'bg-blue-600' : 'bg-emerald-600';
  
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center shadow-sm relative z-10 w-full transition-transform hover:-translate-y-0.5">
      <div className={`${iconBg} text-white p-1.5 rounded-lg mr-3 flex-shrink-0`}>
        <Cpu size={16} />
      </div>
      <span className="text-xs font-bold text-slate-700 uppercase tracking-tight">{text}</span>
    </div>
  );
};

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-6xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
             Como vender mais seguros em 2026 usando IA?
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Descubra o framework que multiplica suas vendas unindo estratégia e inteligência artificial.
          </p>
        </div>

        {/* The Framework Diagram */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-200">
            <div className="text-center mb-10">
                 <div className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-emerald-400 font-mono text-xl md:text-2xl font-bold rounded-2xl shadow-lg border border-slate-700">
                   VENDAS = ATRAÇÃO × CONVERSÃO
                 </div>
            </div>
          
            <div className="flex flex-col lg:flex-row gap-6 items-stretch">
              
              {/* Pilar Atração */}
              <div className="flex-1 bg-blue-50 border-2 border-blue-200 rounded-3xl p-6 lg:p-8 flex flex-col shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-4 bg-blue-500"></div>
                <h3 className="text-blue-700 font-black text-2xl text-center mb-8 uppercase tracking-widest">Pilar Atração</h3>
                
                <div className="flex flex-col md:flex-row gap-8 flex-1">
                  {/* Inbound */}
                  <div className="flex-1 flex flex-col">
                    <div className="bg-blue-600 text-white font-bold text-center py-2.5 rounded-lg mb-5 text-sm uppercase shadow-md tracking-wider">
                      Estratégia Inbound
                    </div>
                    <div className="space-y-3 flex flex-col items-center">
                      <ArrowRight className="text-blue-300 rotate-90 mb-1 -mt-2" size={20} />
                      <FrameworkItem text="Criar Mapa de Cliente Ideal" />
                      <FrameworkItem text="Criar Plano de Mídia" />
                      <FrameworkItem text="Criar Anúncios" />
                      <FrameworkItem text="Criar Conteúdo Orgânico" />
                    </div>
                  </div>
                  
                  {/* Outbound */}
                  <div className="flex-1 flex flex-col">
                    <div className="bg-blue-800 text-white font-bold text-center py-2.5 rounded-lg mb-5 text-sm uppercase shadow-md tracking-wider">
                      Estratégia Outbound
                    </div>
                    <div className="space-y-3 flex flex-col items-center">
                      <ArrowRight className="text-blue-300 rotate-90 mb-1 -mt-2" size={20} />
                      <FrameworkItem text="Criar ICP B2B" />
                      <FrameworkItem text="Criar Mensagens" />
                      <FrameworkItem text="Criar Mapa de Prospecção" />
                      <FrameworkItem text="Engajar a Base Atual" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="bg-emerald-100 p-2 rounded-full animate-pulse">
                  <ArrowRight size={40} className="text-emerald-600" strokeWidth={3} />
                </div>
              </div>
              <div className="lg:hidden flex items-center justify-center -my-2 z-10">
                 <div className="bg-emerald-100 p-2 rounded-full">
                  <ArrowRight size={32} className="text-emerald-600 rotate-90" strokeWidth={3} />
                </div>
              </div>

              {/* Pilar Conversão */}
              <div className="lg:w-[380px] bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-6 lg:p-8 flex flex-col shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-4 bg-emerald-500"></div>
                 <h3 className="text-emerald-700 font-black text-2xl text-center mb-8 uppercase tracking-widest">Pilar Conversão</h3>
                 
                 <div className="flex-1 flex flex-col justify-center items-center">
                    <div className="w-full space-y-0">
                      <FrameworkItem text="Automação de Atendimento" color="emerald" />
                      <div className="h-6 w-0.5 bg-emerald-300 mx-auto my-1"></div>
                      <FrameworkItem text="Agilizar Processos" color="emerald" />
                      <div className="h-6 w-0.5 bg-emerald-300 mx-auto my-1"></div>
                      <FrameworkItem text="Treinamento de Vendas/Coach" color="emerald" />
                    </div>
                 </div>
              </div>
            </div>

            {/* Bonus */}
            <div className="mt-6 bg-teal-50 border-2 border-teal-200 rounded-2xl p-4 flex items-center justify-center shadow-md cursor-default hover:bg-teal-100 transition-colors">
               <div className="flex items-center space-x-3">
                  <div className="bg-teal-500 text-white p-2 rounded-lg">
                      <Sparkles size={20} />
                  </div>
                  <span className="font-bold text-teal-800 text-sm md:text-base uppercase tracking-wide">
                      Tática Bônus: Usar a IA para Priorizar/Planejar Atividades para 2026
                  </span>
               </div>
            </div>
        </div>

        {/* CTA Action */}
        <div className="text-center pb-8">
            <button 
              onClick={() => navigate('/dashboard')}
              className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-white transition-all duration-200 bg-emerald-600 rounded-full focus:outline-none focus:ring-4 focus:ring-emerald-500/50 hover:bg-emerald-700 hover:scale-105 shadow-xl shadow-emerald-600/30"
            >
              <span className="mr-2">COMEÇAR A JORNADA</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-sm text-slate-400">Clique para acessar a plataforma de dicas</p>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;