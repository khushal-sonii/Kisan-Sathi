
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Language, AppState, AnalysisResult, UserProfile } from './types';
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import Result from './screens/Result';
import History from './screens/History';
import Tips from './screens/Tips';
import Guide from './screens/Guide';
import Settings from './screens/Settings';
import Layout from './components/Layout';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem('kisan_sathi_state');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load state from storage", e);
    }
    return {
      language: Language.ENGLISH,
      theme: 'light',
      userProfile: null,
      history: [],
      onboardingComplete: false, 
      audioEnabled: true,
      textSize: 50,
      locationMode: 'live',
      manualLocation: null
    };
  });

  useEffect(() => {
    localStorage.setItem('kisan_sathi_state', JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    if (state.theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }
    
    root.style.fontSize = `${state.textSize + 50}%`; 
  }, [state.theme, state.textSize]);

  const updateState = (updates: Partial<AppState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const addToHistory = (result: AnalysisResult) => {
    setState(prev => ({
      ...prev,
      history: [result, ...prev.history].slice(0, 50)
    }));
  };

  const completeOnboarding = (lang: Language, profile: UserProfile) => {
    setState(prev => ({
      ...prev,
      language: lang,
      userProfile: profile,
      onboardingComplete: true
    }));
  };

  return (
    <HashRouter>
      <div className="h-screen max-w-[450px] mx-auto bg-transparent relative transition-colors duration-300 overflow-hidden">
        <Routes>
          {!state.onboardingComplete ? (
            <Route path="*" element={<Onboarding onComplete={completeOnboarding} initialLanguage={state.language} theme={state.theme} />} />
          ) : (
            <Route element={<Layout key={state.language} language={state.language} theme={state.theme} />}>
              <Route path="/" element={<Home state={state} onAnalyze={addToHistory} onUpdate={updateState} />} />
              <Route path="/result" element={<Result language={state.language} />} />
              <Route path="/history" element={<History language={state.language} history={state.history} />} />
              <Route path="/tips" element={<Tips state={state} />} />
              <Route path="/manual" element={<Guide state={state} onUpdate={updateState} />} />
              <Route path="/settings" element={<Settings state={state} onUpdate={updateState} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          )}
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
