export enum Language {
  ENGLISH = 'EN',
  HINDI = 'HI',
  BENGALI = 'BN',
  MARATHI = 'MR',
  TELUGU = 'TE',
  TAMIL = 'TA',
  GUJARATI = 'GU'
}

export enum Severity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export type ThemeMode = 'light' | 'dark';

export interface UserProfile {
  name: string;
  phone: string;
}

export interface CropGuide {
  name: string;
  reason: string;
  plantingSteps: string[];
  organicFertilizer: string[];
  chemicalFertilizer: string[];
  climateAdvice: string;
  estimatedHarvest: string;
}

export interface AnalysisResult {
  id: string;
  timestamp: number;
  image: string;
  healthyImage?: string;
  name: string;
  confidence: number;
  severity: Severity;
  explanation: string;
  organicTreatment: string[];
  chemicalTreatment: string[];
  prevention: string[];
  isLowConfidence?: boolean;
}

export interface LocationData {
  name: string;
  lat: number;
  lon: number;
}

export interface WeatherIntelligence {
  forecast: string;
  rainPrediction: string;
  heatAlert: string;
  cropRisk: string;
  droughtWarning: string;
  floodWarning: string;
}

export interface AppState {
  language: Language;
  theme: ThemeMode;
  userProfile: UserProfile | null;
  history: AnalysisResult[];
  onboardingComplete: boolean;
  audioEnabled: boolean;
  textSize: number;
  locationMode: 'live' | 'manual';
  manualLocation: LocationData | null;
}