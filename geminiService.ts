
import { GoogleGenAI, Type, Modality } from "@google/genai";
import { AnalysisResult, Severity, Language, LocationData, CropGuide, WeatherIntelligence } from "./types";
import { languageNames } from "./i18n";

// Helper to handle retries and common errors
const handleApiError = (error: any) => {
  const message = error?.message || "";
  if (message.includes("429") || message.includes("quota")) {
    throw new Error("QUOTA_EXHAUSTED");
  }
  throw error;
};

export const analyzeLeaf = async (base64Image: string, language: Language): Promise<AnalysisResult & { healthyPrompt: string; isPlant: boolean; isPoorLighting: boolean }> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const langName = languageNames[language].english;
  
  const prompt = `Analyze this crop leaf image for pests or diseases. 
  Step 1: Determine if the image is actually a plant or crop leaf. Set "isPlant" to false if it's a person, building, animal, or object.
  Step 2: Determine if the image is too dark, blurry, or low quality for a reliable diagnosis. Set "isPoorLighting" to true if it is.
  Step 3: If valid, identify the issue. 
  Respond strictly in ${langName}.
  Return the analysis in JSON format exactly according to the schema.
  Include organic and chemical treatment steps.
  Assess severity as LOW, MEDIUM, or HIGH.
  Provide a "healthyPrompt" which is a detailed visual description in English of a perfectly healthy leaf of this specific crop.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: {
        parts: [
          { inlineData: { mimeType: "image/jpeg", data: base64Image.split(',')[1] } },
          { text: prompt }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isPlant: { type: Type.BOOLEAN, description: "True if the subject is a plant or crop leaf." },
            isPoorLighting: { type: Type.BOOLEAN, description: "True if the image is too dark, blurry, or noisy." },
            name: { type: Type.STRING },
            confidence: { type: Type.NUMBER },
            severity: { type: Type.STRING, enum: ['LOW', 'MEDIUM', 'HIGH'] },
            explanation: { type: Type.STRING },
            organicTreatment: { type: Type.ARRAY, items: { type: Type.STRING } },
            chemicalTreatment: { type: Type.ARRAY, items: { type: Type.STRING } },
            prevention: { type: Type.ARRAY, items: { type: Type.STRING } },
            isLowConfidence: { type: Type.BOOLEAN },
            healthyPrompt: { type: Type.STRING }
          },
          required: ["isPlant", "isPoorLighting", "name", "confidence", "severity", "explanation", "organicTreatment", "chemicalTreatment", "prevention", "healthyPrompt"]
        }
      }
    });

    const text = response.text || '{}';
    const data = JSON.parse(text);
    
    return {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      image: base64Image,
      severity: data.severity as Severity
    };
  } catch (error) {
    return handleApiError(error);
  }
};

export const getRecommendedCrops = async (location: LocationData, language: Language): Promise<CropGuide[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const langName = languageNames[language].english;
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  const prompt = `As an Indian Agricultural Expert, recommend 3 crops to grow in ${location.name} (Latitude: ${location.lat}, Longitude: ${location.lon}) during ${currentMonth}.
  For each crop, provide:
  1. Name
  2. Why it is suitable for this specific location/climate
  3. Step-by-step planting instructions (How to grow)
  4. Organic fertilizers and natural manure to use
  5. Chemical fertilizers (NPK ratios/dosages) to use
  6. Estimated harvest time.
  Respond strictly in ${langName}. Return as a JSON array.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: { parts: [{ text: prompt }] },
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              reason: { type: Type.STRING },
              plantingSteps: { type: Type.ARRAY, items: { type: Type.STRING } },
              organicFertilizer: { type: Type.ARRAY, items: { type: Type.STRING } },
              chemicalFertilizer: { type: Type.ARRAY, items: { type: Type.STRING } },
              climateAdvice: { type: Type.STRING },
              estimatedHarvest: { type: Type.STRING }
            },
            required: ["name", "reason", "plantingSteps", "organicFertilizer", "chemicalFertilizer", "climateAdvice", "estimatedHarvest"]
          }
        }
      }
    });

    return JSON.parse(response.text || '[]');
  } catch (error) {
    return handleApiError(error);
  }
};

export const getWeatherIntelligence = async (location: LocationData, language: Language): Promise<WeatherIntelligence> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const langName = languageNames[language].english;
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  const prompt = `As an Agricultural Weather Expert, provide a Satellite and Weather Intelligence report for ${location.name} (Lat: ${location.lat}, Lon: ${location.lon}) for ${currentMonth}.
  Focus on:
  1. Weather forecast (summary)
  2. Rain prediction (likelihood and intensity)
  3. Heat alerts (if any)
  4. Crop risk alerts (based on current weather)
  5. Drought warning (risk level)
  6. Flood warning (risk level)
  
  Respond strictly in ${langName}. Return the analysis in JSON format exactly according to the schema.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: { parts: [{ text: prompt }] },
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            forecast: { type: Type.STRING },
            rainPrediction: { type: Type.STRING },
            heatAlert: { type: Type.STRING },
            cropRisk: { type: Type.STRING },
            droughtWarning: { type: Type.STRING },
            floodWarning: { type: Type.STRING }
          },
          required: ["forecast", "rainPrediction", "heatAlert", "cropRisk", "droughtWarning", "floodWarning"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Weather intelligence error", error);
    return {
      forecast: "Data unavailable",
      rainPrediction: "Data unavailable",
      heatAlert: "No active alerts",
      cropRisk: "Low risk",
      droughtWarning: "Normal conditions",
      floodWarning: "Normal conditions"
    };
  }
};

export const generateHealthyImage = async (prompt: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: `${prompt}. Isolated on a neutral background, professional agriculture photography, high resolution.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    const parts = response.candidates?.[0]?.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("Healthy image generation failed");
  } catch (error) {
    return handleApiError(error);
  }
};

export const searchLocations = async (query: string): Promise<LocationData[]> => {
  if (!query || query.length < 3) return [];
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `Find up to 5 real locations (cities or major villages) in India that start with or match "${query}". 
  Provide results in JSON format with fields: name (string, including state), lat (number), lon (number).`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: { parts: [{ text: prompt }] },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              lat: { type: Type.NUMBER },
              lon: { type: Type.NUMBER }
            },
            required: ["name", "lat", "lon"]
          }
        }
      }
    });

    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("Location search error", error);
    return [];
  }
};

export const generateAudio = async (text: string, language: Language): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const langName = languageNames[language].english;
  const prompt = `Speak clearly in ${langName}: ${text}`;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-tts',
      contents: { parts: [{ text: prompt }] },
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: language === Language.ENGLISH ? 'Puck' : 'Kore' },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    return base64Audio || '';
  } catch (error) {
    return handleApiError(error);
  }
};

export const decodeBase64Audio = (base64: string) => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

export const playRawAudio = async (bytes: Uint8Array): Promise<{ stop: () => void; onEnded: (cb: () => void) => void }> => {
  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  const dataInt16 = new Int16Array(bytes.buffer);
  const frameCount = dataInt16.length;
  const buffer = ctx.createBuffer(1, frameCount, 24000);
  const channelData = buffer.getChannelData(0);
  for (let i = 0; i < frameCount; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.start();
  
  return {
    stop: () => {
      try {
        source.stop();
        ctx.close();
      } catch (e) {
        // Ignore errors if already stopped
      }
    },
    onEnded: (callback: () => void) => {
      source.onended = callback;
    }
  };
};
