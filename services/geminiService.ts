import { GoogleGenAI } from "@google/genai";

// Initialize the client strictly according to instructions
// Assuming process.env.API_KEY is available in the environment
const apiKey = process.env.API_KEY || ''; 

const ai = new GoogleGenAI({ apiKey: apiKey });

export const generateAIResponse = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "⚠️ Erro de Configuração: API_KEY não encontrada. Por favor, configure a chave da API no ambiente.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on simple tasks
      }
    });
    
    return response.text || "Sem resposta gerada.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, ocorreu um erro ao processar sua solicitação com a IA. Tente novamente em instantes.";
  }
};
