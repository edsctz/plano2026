import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API client
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

const genAI = new GoogleGenerativeAI(apiKey);

export const generateAIResponse = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "⚠️ Erro de Configuração: VITE_GEMINI_API_KEY não encontrada. Por favor, configure a chave da API no ambiente.";
  }

  try {
    // Use the stable gemini-2.0-flash model instead of experimental
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text || "Sem resposta gerada.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Provide more helpful error messages
    if (error?.message?.includes('quota')) {
      return "⚠️ Limite de uso da API atingido. Por favor, aguarde alguns minutos e tente novamente.";
    }
    
    if (error?.message?.includes('API key')) {
      return "⚠️ Erro de autenticação. Verifique se sua chave da API está configurada corretamente.";
    }
    
    return "Desculpe, ocorreu um erro ao processar sua solicitação com a IA. Tente novamente em instantes.";
  }
};
