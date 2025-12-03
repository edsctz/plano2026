import React, { useState, useEffect } from 'react';
import { generateAIResponse } from '../services/geminiService';
import { Sparkles, Copy, RefreshCw, Loader2, Play } from 'lucide-react';

interface AIToolProps {
  initialPrompt: string;
  tipId: number;
}

const AITool: React.FC<AIToolProps> = ({ initialPrompt, tipId }) => {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  // Reset state when changing tips
  useEffect(() => {
    setPrompt(initialPrompt);
    setResponse('');
    setHasRun(false);
    setIsLoading(false);
  }, [tipId, initialPrompt]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setHasRun(true);
    const result = await generateAIResponse(prompt);
    setResponse(result);
    setIsLoading(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add toast here
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-slate-700">
            <Sparkles size={18} className="text-emerald-600" />
            <span className="font-semibold text-sm">Gerador de IA</span>
        </div>
        <div className="text-xs text-slate-500 font-mono bg-slate-200 px-2 py-1 rounded">
            Model: Gemini 2.5 Flash
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-200">
        
        {/* Input Section */}
        <div className="flex-1 p-4 flex flex-col space-y-4">
          <label className="text-sm font-medium text-slate-600">Seu Prompt (Editável):</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 w-full min-h-[200px] p-4 text-sm font-mono text-slate-800 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none resize-none"
            placeholder="Digite seu prompt aqui..."
          />
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-semibold text-white shadow-md transition-all flex justify-center items-center space-x-2
              ${isLoading ? 'bg-slate-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg'}
            `}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                <span>Gerando com IA...</span>
              </>
            ) : (
              <>
                <Play size={18} fill="currentColor" />
                <span>Executar Prompt</span>
              </>
            )}
          </button>
        </div>

        {/* Output Section */}
        <div className="flex-1 p-4 flex flex-col bg-slate-50/50 min-h-[300px]">
          <div className="flex justify-between items-center mb-4">
            <label className="text-sm font-medium text-slate-600">Resultado:</label>
            {response && (
              <button 
                onClick={() => copyToClipboard(response)}
                className="text-xs flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
              >
                <Copy size={14} className="mr-1" /> Copiar
              </button>
            )}
          </div>
          
          <div className="flex-1 bg-white border border-slate-200 rounded-lg p-4 overflow-y-auto max-h-[500px] shadow-inner">
            {isLoading ? (
               <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-3">
                  <RefreshCw className="animate-spin text-emerald-500" size={32} />
                  <p className="text-sm animate-pulse">A IA está pensando...</p>
               </div>
            ) : response ? (
              <div className="prose prose-sm prose-slate max-w-none whitespace-pre-wrap">
                {response}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-2">
                <Sparkles size={32} className="text-slate-300" />
                <p className="text-sm text-center max-w-xs">
                    Edite o prompt ao lado e clique em "Executar" para ver a mágica acontecer.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITool;
