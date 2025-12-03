import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowRight, Clock, DollarSign, TrendingUp } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const data = [
  { name: 'Prospecção', Manual: 70, IA: 20 },
  { name: 'Vendas', Manual: 30, IA: 80 },
];

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 animate-fade-in">
      
      {/* Header Section */}
      <div className="text-center space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-sm mb-4">
          🚀 Dashboard 2026
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
          Venda <span className="text-emerald-600">3x Mais</span> com a<br/>
          Mesma Quantidade de Horas
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          "Existem apenas 2 caminhos para vender mais: trazer mais leads (ATRAÇÃO) ou converter melhor (CONVERSÃO). 
          A IA multiplica os dois."
        </p>
        <button 
          onClick={onStart}
          className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transform hover:-translate-y-1"
        >
          Acessar Primeira Dica
          <ArrowRight className="ml-2" />
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <Clock size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Mesmo Tempo</h3>
            <p className="text-slate-500 text-sm mt-1">Trabalhe as mesmas 8h, mas com foco estratégico.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-lg">
            <DollarSign size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">2-3x Mais Vendas</h3>
            <p className="text-slate-500 text-sm mt-1">Aumente sua taxa de conversão e volume de leads.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start space-x-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
            <TrendingUp size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Escalabilidade</h3>
            <p className="text-slate-500 text-sm mt-1">Automatize o manual e foque no relacionamento.</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">A Realidade do Corretor</h2>
            <div className="space-y-4">
              <div className="flex items-center text-slate-600">
                <span className="w-4 h-4 rounded bg-slate-400 mr-2"></span>
                <span className="font-medium text-slate-900 w-32">Corretor Manual:</span>
                <span>70% tarefas chatas, 30% vendas</span>
              </div>
              <div className="flex items-center text-slate-600">
                <span className="w-4 h-4 rounded bg-emerald-500 mr-2"></span>
                <span className="font-medium text-slate-900 w-32">Corretor com IA:</span>
                <span>70% relacionamento, 30% operacional</span>
              </div>
            </div>
            <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-600">
              <p><strong>Resultado:</strong> Você deixa de ser um "preenchedor de formulários" e volta a ser um consultor de confiança.</p>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={80} tick={{fill: '#475569', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#f1f5f9'}}
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Legend iconType="circle" />
                <Bar dataKey="Manual" fill="#94a3b8" radius={[0, 4, 4, 0]} barSize={20} />
                <Bar dataKey="IA" fill="#059669" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;