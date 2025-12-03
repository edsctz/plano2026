import React from 'react';
import { Target, ArrowRight, CheckSquare } from 'lucide-react';
import { generateAIResponse } from '../services/geminiService';
import AITool from './AITool';

const Plan: React.FC = () => {
  const planPrompt = "Ajude-me a priorizar. Tenho essas 11 dicas de IA para corretores.\n\nMinha situação atual é: [ESCOLHA: 1. Poucos Leads, 2. Baixa Conversão, ou 3. Preciso de Tudo].\n\nMonte um plano de implementação prático para as próximas 4 semanas focando no maior impacto imediato para minha situação.";

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-12 animate-fade-in pb-20">
      
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Plano de Ação 2026</h1>
        <p className="text-xl text-slate-600">"A diferença entre você e seus concorrentes não é a IA. É o COMEÇO."</p>
      </div>

      {/* Matrix */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
            <Target className="mr-2 text-emerald-600" />
            Matriz de Priorização: Impacto x Facilidade
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
            <div className="relative border-2 border-slate-200 rounded-xl bg-slate-50 p-6 min-h-[300px]">
                {/* Quadrants labels */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-slate-400 uppercase tracking-widest">Mais Fácil</div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-slate-400 uppercase tracking-widest">Mais Difícil</div>
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-xs font-bold text-slate-400 uppercase tracking-widest">Alto Impacto</div>
                
                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full pt-6 pl-6">
                    <div className="bg-emerald-100/50 rounded-lg p-3 border border-emerald-200 hover:scale-105 transition-transform">
                        <span className="text-xs font-bold text-emerald-700 block mb-1">🌟 COMECE AQUI</span>
                        <p className="text-sm font-medium text-emerald-900">Atração Inbound (ICP, Conteúdo)</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 opacity-70">
                        <span className="text-xs font-bold text-blue-700 block mb-1">PLANEJE</span>
                        <p className="text-sm font-medium text-blue-900">Conversão Complexa (Chatbots Avançados)</p>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200 opacity-70">
                        <span className="text-xs font-bold text-yellow-700 block mb-1">VITÓRIA RÁPIDA</span>
                        <p className="text-sm font-medium text-yellow-900">Otimização LinkedIn, Reviews</p>
                    </div>
                    <div className="bg-slate-100 rounded-lg p-3 border border-slate-200 opacity-40 flex items-center justify-center">
                        <p className="text-xs text-slate-500">Evite por agora</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div>
                    <h3 className="font-bold text-lg mb-3">Qual é sua situação hoje?</h3>
                    <div className="space-y-3">
                        <div className="p-3 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-emerald-500 transition-colors">
                            <span className="font-bold text-slate-900 block">1. "Tenho poucos leads"</span>
                            <span className="text-sm text-slate-500">Foco: ICP ➔ Conteúdo ➔ Anúncios</span>
                        </div>
                        <div className="p-3 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-emerald-500 transition-colors">
                            <span className="font-bold text-slate-900 block">2. "Tenho leads, mas vendo pouco"</span>
                            <span className="text-sm text-slate-500">Foco: Atendimento Auto ➔ Cotações Ágeis</span>
                        </div>
                        <div className="p-3 bg-white border border-slate-200 rounded-lg cursor-pointer hover:border-emerald-500 transition-colors">
                            <span className="font-bold text-slate-900 block">3. "Preciso de tudo urgente"</span>
                            <span className="text-sm text-slate-500">Foco: ICP ➔ Renovações (Caixa Rápido)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Custom Plan Generator */}
      <div className="space-y-4">
         <h2 className="text-2xl font-bold text-slate-900">Gere seu Plano Personalizado</h2>
         <div className="h-[500px]">
            <AITool initialPrompt={planPrompt} tipId={99} />
         </div>
      </div>

      {/* Checklist */}
      <div className="bg-slate-900 text-white p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6">✅ Seu Checklist para Hoje</h2>
        <div className="grid md:grid-cols-2 gap-4">
             {[
                "Escolha SUA situação acima",
                "Escolha 2-3 dicas para começar este mês",
                "Crie contas nas ferramentas gratuitas (ChatGPT, etc)",
                "Reserve 15 minutos hoje para a primeira ação"
             ].map((item, idx) => (
                 <div key={idx} className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
                     <CheckSquare className="text-emerald-400" />
                     <span>{item}</span>
                 </div>
             ))}
        </div>
      </div>

    </div>
  );
};

export default Plan;
