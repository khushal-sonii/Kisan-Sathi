
import { Language } from './types';

export const languageNames: Record<Language, { native: string; english: string }> = {
  [Language.ENGLISH]: { native: "English", english: "English" },
  [Language.HINDI]: { native: "हिन्दी", english: "Hindi" },
  [Language.BENGALI]: { native: "বাংলা", english: "Bengali" },
  [Language.MARATHI]: { native: "मराठी", english: "Marathi" },
  [Language.TELUGU]: { native: "తెలుగు", english: "Telugu" },
  [Language.TAMIL]: { native: "தமிழ்", english: "Tamil" },
  [Language.GUJARATI]: { native: "ગુજરાતી", english: "Gujarati" },
};

const en = {
  appName: "KisanSathi",
  loginTitle: "Welcome to KisanSathi",
  loginSubtitle: "Your personal AI farming companion",
  fullName: "Your Full Name",
  phoneNumber: "Mobile Number",
  profile: "PROFILE",
  greeting: "NAMASTE",
  onboarding1: "Instantly identify crop diseases",
  onboarding2: "Get expert advice in your language",
  onboarding3: "Works even with low internet",
  start: "Start",
  next: "Next",
  continue: "Continue",
  selectLang: "Choose Language",
  selectLangSub: "Select your preferred language",
  homeTitle: "IDENTIFY",
  homeSubtitle: "Hold leaf flat. Use good light.",
  uploadGallery: "Gallery",
  takePhoto: "Camera",
  selectSource: "Select Photo Source",
  cancel: "Cancel",
  offlineMode: "Your Smart Farming Partner",
  retake: "Retake",
  analyze: "Analyze",
  analyzing: "Analyzing leaf...",
  resultTitle: "Analysis Result",
  severity: "Severity",
  organic: "Organic Treatment",
  chemical: "Chemical Treatment",
  prevention: "Prevention Tips",
  listen: "Listen",
  stop: "Stop",
  save: "Save to History",
  history: "HISTORY",
  tips: "TIPS",
  guide: "GUIDE",
  settings: "PROFILE",
  language: "Language",
  theme: "Theme",
  light: "Light",
  dark: "Dark",
  lowConfidence: "Low confidence. Try another photo.",
  whyThisResult: "Why this result?",
  organicPriority: "Organic treatment is safer.",
  noHistory: "No scans yet.",
  low: "Low",
  medium: "Medium",
  high: "High",
  textSize: "Text Size",
  voiceAssistant: "Voice Assistant",
  summerAlert: "Summer Alert",
  summerAlertDesc: "Use mulching in extreme heat.",
  weatherTitle: "Local Weather",
  temperature: "Temp",
  humidity: "HUMIDITY",
  rainChance: "Rain",
  locationDisabled: "Location Off",
  fetchingWeather: "Fetching...",
  location: "LOCATION",
  useLiveLocation: "Live Location",
  manualLocation: "Manual Location",
  searchLocation: "Search village...",
  searching: "Searching...",
  noLocationSet: "No location set",
  currentLocation: "Current Location",
  healthyReference: "Healthy Reference",
  compareTitle: "Healthy vs Affected",
  affected: "Affected",
  healthy: "Healthy",
  generatingReference: "Generating...",
  recommendedCrops: "Best for Your Land",
  recommendedCropsSub: "Based on your location & season",
  howToGrow: "How to Grow",
  fertilizers: "Fertilizer Guide",
  climateSuitability: "Climate Suitability",
  harvestTime: "Harvest Time",
  loadingGuides: "Finding best crops for you...",
  viewFullGuide: "View Full Guide",
  closeGuide: "Close Guide",
  expertAdvice: "Expert farming advice",
  cropCareManual: "CROP CARE MANUAL",
  premiumInsights: "PREMIUM INSIGHTS",
  guideAndSteps: "GUIDE & STEPS",
  seasonalAdvice: "Seasonal Advice",
  satelliteIntelligence: "Satellite + Weather Intelligence",
  fetchingSatellite: "Fetching Satellite Data...",
  forecast: "Forecast",
  rain: "Rain",
  heatAlert: "Heat Alert",
  cropRisk: "Crop Risk",
  drought: "Drought",
  flood: "Flood",
  viewAll: "View All",
  seasonalAdviceItems: [
    { title: 'Wheat Sowing', desc: 'Best time for high-yield varieties.', trend: 'up' },
    { title: 'Pest Alert', desc: 'Watch for aphids in mustard.', trend: 'down' },
    { title: 'Soil Health', desc: 'Add manure after irrigation.', trend: 'up' },
  ],
  scanWarning: "Scan Warning",
  notPlantMsg: "This doesn't look like a crop leaf. Please point the camera at a plant.",
  dimLightMsg: "The image is too dark or blurry. Please scan in better light.",
  tryAgain: "Try Again",
  logout: "Logout",
  farmingTips: [
    {
      category: "EARLY STAGE",
      title: "Seed Treatment",
      summary: "Protect your crop before it even sprouts...",
      details: [
        "Select high-quality, certified seeds suitable for your region",
        "Prepare land with proper ploughing and leveling",
        "Treat seeds with recommended fungicide or organic treatment (like neem or Trichoderma)",
        "Maintain proper sowing depth and spacing",
        "Ensure first irrigation is timely but not excessive"
      ]
    },
    {
      category: "MAINTENANCE",
      title: "Smart Irrigation",
      summary: "Optimize water usage to prevent plant stress...",
      details: [
        "Follow crop-specific irrigation schedule",
        "Avoid overwatering to prevent root diseases",
        "Use drip irrigation or sprinkler systems where possible",
        "Remove weeds regularly to reduce nutrient competition",
        "Monitor plant growth weekly for early problem detection"
      ]
    },
    {
      category: "WEATHER ALERT",
      title: "Monsoon Precautions",
      summary: "Prevent root rot and fungal infections...",
      details: [
        "Check weekly weather forecast before irrigation or spraying",
        "Improve field drainage during heavy rainfall",
        "Use preventive fungicide sprays in humid conditions",
        "Protect crops from frost, heat waves, and storms",
        "Adjust sowing and harvesting time based on local climate"
      ]
    },
    {
      category: "NUTRITION",
      title: "Soil Enrichment",
      summary: "Make your soil healthy using natural fertilizers...",
      details: [
        "Test soil before fertilizer application",
        "Use organic manure (FYM, compost, vermicompost) to improve soil health",
        "Apply NPK fertilizers as per crop requirement",
        "Follow split fertilizer application for better absorption",
        "Use micronutrients if deficiency symptoms appear"
      ]
    },
    {
      category: "WASTE MANAGEMENT",
      title: "Composting",
      summary: "Turn farm waste into black gold in just weeks...",
      details: [
        "Convert crop residue into compost or vermicompost",
        "Avoid burning stubble to protect soil fertility",
        "Use animal waste for biogas or organic manure",
        "Recycle farm water where possible",
        "Maintain a compost pit for continuous organic supply"
      ]
    }
  ],
  extraSections: [
    { title: "Pest & Disease Control" },
    { title: "Location Suggestions" },
    { title: "Crop Growth Guide" },
    { title: "Smart Farming Tips" }
  ]
};

const hi = {
  ...en,
  appName: "किसानसाथी",
  stop: "रोकें",
  loginTitle: "किसानसाथी में आपका स्वागत है",
  loginSubtitle: "आपका व्यक्तिगत एआई खेती साथी",
  fullName: "आपका पूरा नाम",
  phoneNumber: "मोबाइल नंबर",
  profile: "प्रोफ़ाइल",
  greeting: "नमस्ते",
  onboarding1: "फसल रोगों की तुरंत पहचान करें",
  onboarding2: "अपनी भाषा में विशेषज्ञ सलाह प्राप्त करें",
  onboarding3: "कम इंटरनेट में भी काम करता है",
  start: "शुरू करें",
  next: "अगला",
  continue: "जारी रखें",
  selectLang: "भाषा चुनें",
  selectLangSub: "अपनी पसंदीदा भाषा चुनें",
  offlineMode: "आपका स्मार्ट खेती साथी",
  homeTitle: "पहचानें",
  homeSubtitle: "पत्ते को सीधा रखें। अच्छी रोशनी का प्रयोग करें।",
  uploadGallery: "गैलरी",
  takePhoto: "कैमरा",
  analyze: "विश्लेषण करें",
  analyzing: "पत्ते का विश्लेषण हो रहा है...",
  history: "इतिहास",
  tips: "सुझाव",
  guide: "मार्गदर्शिका",
  settings: "प्रोफ़ाइल",
  language: "भाषा",
  theme: "थीम",
  light: "हल्का",
  dark: "गहरा",
  low: "कम",
  medium: "मध्यम",
  high: "उच्च",
  severity: "गंभीरता",
  organic: "जैविक उपचार",
  chemical: "रासायनिक उपचार",
  prevention: "बचाव के उपाय",
  // Fixed error on line 153 by removing the first occurrence of whyThisResult
  howToGrow: "कैसे उगाएं",
  fertilizers: "खाद मार्गदर्शिका",
  scanWarning: "स्कैन चेतावनी",
  notPlantMsg: "यह फसल का पत्ता नहीं लग रहा है। कृपया कैमरे को पौधे की ओर रखें।",
  dimLightMsg: "फोटो बहुत धुंधली या अंधेरी है। कृपया बेहतर रोशनी में स्कैन करें।",
  tryAgain: "फिर से कोशिश करें",
  logout: "लॉग आउट",
  closeGuide: "बंद करें",
  viewFullGuide: "पूरी मार्गदर्शिका देखें",
  expertAdvice: "विशेषज्ञ खेती सलाह",
  cropCareManual: "फसल देखभाल नियमावली",
  premiumInsights: "प्रीमियम अंतर्दृष्टि",
  guideAndSteps: "मार्गदर्शिका और चरण",
  seasonalAdvice: "मौसमी सलाह",
  satelliteIntelligence: "सैटेलाइट + मौसम इंटेलिजेंस",
  fetchingSatellite: "सैटेलाइट डेटा प्राप्त किया जा रहा है...",
  forecast: "पूर्वानुमान",
  rain: "बारिश",
  heatAlert: "गर्मी का अलर्ट",
  cropRisk: "फसल जोखिम",
  drought: "सूखा",
  flood: "बाढ़",
  viewAll: "सभी देखें",
  seasonalAdviceItems: [
    { title: 'गेहूं की बुवाई', desc: 'अधिक उपज वाली किस्मों के लिए सबसे अच्छा समय।', trend: 'up' },
    { title: 'कीट अलर्ट', desc: 'सरसों में एफिड्स (चेपा) पर नजर रखें।', trend: 'down' },
    { title: 'मिट्टी का स्वास्थ्य', desc: 'सिंचाई के बाद खाद डालें।', trend: 'up' },
  ],
  recommendedCropsSub: "आपकी स्थिति और मौसम के आधार पर",
  location: "स्थान",
  loadingGuides: "आपके लिए सर्वोत्तम फसलें ढूँढ रहे हैं...",
  harvestTime: "फसल काटने का समय",
  whyThisResult: "यह परिणाम क्यों मिला?",
  organicPriority: "जैविक उपचार अधिक सुरक्षित है।",
  farmingTips: [
    {
      category: "शुरुआती चरण",
      title: "बीज उपचार",
      summary: "अंकुरित होने से पहले ही अपनी फसल की रक्षा करें...",
      details: [
        "अपने क्षेत्र के लिए उपयुक्त उच्च गुणवत्ता वाले, प्रमाणित बीज चुनें",
        "उचित जुताई और समतलीकरण के साथ भूमि तैयार करें",
        "अनुशंसित कवकनाशी या जैविक उपचार (जैसे नीम या ट्राइकोडर्मा) के साथ बीजों का उपचार करें",
        "उचित बुवाई गहराई और दूरी बनाए रखें",
        "सुनिश्चित करें कि पहली सिंचाई समय पर हो लेकिन अत्यधिक न हो"
      ]
    },
    {
      category: "रखरखाव",
      title: "स्मार्ट सिंचाई",
      summary: "पौधों के तनाव को रोकने के लिए पानी के उपयोग को अनुकूलित करें...",
      details: [
        "फसल-विशिष्ट सिंचाई कार्यक्रम का पालन करें",
        "जड़ रोगों को रोकने के लिए अधिक पानी देने से बचें",
        "जहाँ संभव हो ड्रिप सिंचाई या स्प्रिंकलर सिस्टम का उपयोग करें",
        "पोषक तत्वों की प्रतिस्पर्धा को कम करने के लिए नियमित रूप से खरपतवार निकालें",
        "समस्या का जल्दी पता लगाने के लिए साप्ताहिक रूप से पौधों की वृद्धि की निगरानी करें"
      ]
    },
    {
      category: "मौसम अलर्ट",
      title: "मानसून सावधानियां",
      summary: "जड़ सड़न और कवक संक्रमण को रोकें...",
      details: [
        "सिंचाई या छिड़काव से पहले साप्ताहिक मौसम पूर्वानुमान की जाँच करें",
        "भारी वर्षा के दौरान खेत की जल निकासी में सुधार करें",
        "नम परिस्थितियों में निवारक कवकनाशी स्प्रे का उपयोग करें",
        "फसलों को पाले, लू और तूफान से बचाएं",
        "स्थानीय जलवायु के आधार पर बुवाई और कटाई के समय को समायोजित करें"
      ]
    },
    {
      category: "पोषण",
      title: "मृदा संवर्धन",
      summary: "प्राकृतिक खाद का उपयोग करके अपनी मिट्टी को स्वस्थ बनाएं...",
      details: [
        "उर्वरक प्रयोग से पहले मिट्टी का परीक्षण करें",
        "मिट्टी के स्वास्थ्य में सुधार के लिए जैविक खाद (FYM, खाद, वर्मीकम्पोस्ट) का उपयोग करें",
        "फसल की आवश्यकता के अनुसार NPK उर्वरक लगाएं",
        "बेहतर अवशोषण के लिए विभाजित उर्वरक अनुप्रयोग का पालन करें",
        "यदि कमी के लक्षण दिखाई दें तो सूक्ष्म पोषक तत्वों का उपयोग करें"
      ]
    },
    {
      category: "अपशिष्ट प्रबंधन",
      title: "खाद बनाना",
      summary: "खेत के कचरे को कुछ ही हफ्तों में काले सोने में बदलें...",
      details: [
        "फसल अवशेषों को खाद या वर्मीकम्पोस्ट में बदलें",
        "मिट्टी की उर्वरता की रक्षा के लिए पराली जलाने से बचें",
        "बायोगैस या जैविक खाद के लिए पशु अपशिष्ट का उपयोग करें",
        "जहाँ संभव हो खेत के पानी को रीसायकल करें",
        "निरंतर जैविक आपूर्ति के लिए एक खाद गड्ढा बनाए रखें"
      ]
    }
  ],
  extraSections: [
    { title: "कीट और रोग नियंत्रण" },
    { title: "स्थान सुझाव" },
    { title: "फसल विकास मार्गदर्शिका" },
    { title: "स्मार्ट खेती के टिप्स" }
  ]
};

const bn = { ...en, appName: "কিষাণসাথী", start: "শুরু করুন", next: "পরবর্তী", offlineMode: "আপনার স্মার্ট ফার্মিং পার্টনার", scanWarning: "স্ক্যান সতর্কতা", tryAgain: "আবার চেষ্টা করুন", logout: "লগ আউট" };
const mr = { ...en, appName: "किसानसाथी", start: "सुरू करा", next: "पुढील", offlineMode: "तुमचा स्मार्ट शेती भागीदार", scanWarning: "स्कॅन चेतावणी", tryAgain: "पुन्हा प्रयत्न करा", logout: "लॉग आउट" };
const te = { ...en, appName: "కిసాన్ సాథి", start: "ప్రారంభించండి", next: "తదుపరి", offlineMode: "మీ స్మార్ట్ ఫార్మింగ్ భాగస్వామి", scanWarning: "స్కాన్ హెచ్చరిక", tryAgain: "మళ్లీ ప్రయత్నించండి", logout: "లాగ్ అవుట్" };
const ta = { ...en, appName: "கிசான்சாதி", start: "தொடங்கு", next: "அடுத்து", offlineMode: "உங்கள் ஸ்மார்ட் ফார்மிங் பார்ட்னர்", scanWarning: "ஸ்க্যান সতর্কতা", tryAgain: "மீண்டும் முயற்சிக்கவும்", logout: "வெளியேறு" };
const gu = { ...en, appName: "કિસાનસાથી", start: "શરૂ કરો", next: "આગળ", offlineMode: "તમારા સ્માર્ટ ફાર્મિંગ પાર્ટનર", scanWarning: "સ્કેન ચેતવણી", tryAgain: "ફરી પ્રયત્ન કરો", logout: "લૉગ આઉટ" };

export const translations: Record<Language, any> = {
  [Language.ENGLISH]: en,
  [Language.HINDI]: hi,
  [Language.BENGALI]: bn,
  [Language.MARATHI]: mr,
  [Language.TELUGU]: te,
  [Language.TAMIL]: ta,
  [Language.GUJARATI]: gu,
};
