import React, { useState } from 'react';
import { Sparkles, Send, Copy, Check } from 'lucide-react';
import { generateAIResponse } from '../services/geminiService';

interface AIToolProps {
  initialPrompt: string;
  tipId: number;
}

const AITool: React.FC<AIToolProps> = ({ initialPrompt, tipId }) => {
  const [prompt, setPrompt] = useState(initialPrompt);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsLoading(true);
    setResponse('');
    
    try {
      const result = await generateAIResponse(prompt);
      setResponse(result);
    } catch (error) {
      setResponse('Erro ao gerar resposta. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-full flex flex-col">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
        <div className="flex items-center space-x-2">
          <Sparkles className="text-white" size={20} />
          <h3 className="text-white font-bold">Assistente de IA</h3>
        </div>
        <p className="text-purple-100 text-sm mt-1">
          Personalize o prompt abaixo e gere conteúdo otimizado
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6 space-y-4 overflow-auto">
        
        {/* Prompt Input */}
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Seu Prompt
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-32 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm"
            placeholder="Digite seu prompt aqui..."
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={isLoading || !prompt.trim()}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-bold hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Gerando...</span>
            </>
          ) : (
            <>
              <Send size={18} />
              <span>Gerar Conteúdo</span>
            </>
          )}
        </button>

        {/* Response */}
        {response && (
          <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-200 relative">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-slate-700">Resposta Gerada</h4>
              <button
                onClick={handleCopy}
                className="flex items-center space-x-1 text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-green-600" />
                    <span className="text-green-600">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
            <div className="prose prose-sm max-w-none text-slate-700 whitespace-pre-wrap">
              {response}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AITool;
