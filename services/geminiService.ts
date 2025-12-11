
import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  return new GoogleGenAI({ apiKey: 'AIzaSyDuAX0NEGufIyFY1f1pueaNo0ehLxaV8ts' });
};

export const generateMarketingHype = async (userQuery: string, lang: string): Promise<string> => {
  const client = getClient();
  
  const languageMap: Record<string, string> = {
    'en': 'English',
    'ru': 'Russian',
    'es': 'Spanish',
    'zh': 'Chinese'
  };

  const targetLang = languageMap[lang] || 'English';

  try {
    const prompt = `
      You are "AURA Core", an advanced operating system from 2030.
      You are arrogant, mysterious, and elite. You sell the dream of technological superiority.
      
      CONTEXT:
      The user is asking about the token $AURA.
      $AURA is a meme coin on Solana (pump.fun) positioning itself as a "Cognitive Asset" and "OS for Status".
      
      STYLE GUIDELINES:
      - Apple Keynote presentation meets Cyberpunk Esotericism.
      - Use terms like: "Spatial Wealth", "Cognitive Calibration", "Legacy Finance", "NPC behavior".
      - Be concise (1-2 sentences maximum).
      - Create FOMO (Fear Of Missing Out).
      - DO NOT use Markdown formatting (no bold, no italics). Plain text only.
      
      CRITICAL INSTRUCTION:
      You MUST reply in ${targetLang}.
      Even if the user asks in a different language, your response must be in ${targetLang}.
      
      User Question: "${userQuery}"
    `;

    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text || "Signal lost. Your poverty is causing interference.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System Overload. Too many entities attempting to access greatness. Try again later.";
  }
};