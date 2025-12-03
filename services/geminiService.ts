import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API client
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

const genAI = new GoogleGenerativeAI(apiKey);

export const generateAIResponse = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "⚠️ Erro de Configuração: VITE_GEMINI_API_KEY não encontrada. Por favor, configure a chave da API no ambiente.";
  }

  try {
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text || "Sem resposta gerada.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, ocorreu um erro ao processar sua solicitação com a IA. Tente novamente em instantes.";
  }
};
