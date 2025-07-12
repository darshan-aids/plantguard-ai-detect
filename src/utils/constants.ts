// Application constants
export const APP_CONFIG = {
  name: 'PlantGuard AI',
  description: 'AI-powered plant disease detection using Google\'s Gemini AI',
  version: '1.0.0',
} as const;

// API and service configuration
export const API_CONFIG = {
  timeout: 30000, // 30 seconds
  maxRetries: 2,
  retryDelay: 1000, // 1 second
} as const;

// Image processing constants
export const IMAGE_CONFIG = {
  maxFileSize: 10 * 1024 * 1024, // 10MB in bytes
  allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  allowedExtensions: ['.jpg', '.jpeg', '.png', '.webp'],
  compressionQuality: 0.8,
} as const;

// Plant analysis constants
export const ANALYSIS_CONFIG = {
  validSeverities: ['healthy', 'mild', 'moderate', 'severe'] as const,
  confidenceRange: { min: 0, max: 100 },
  treatmentTypes: ['organic', 'chemical'] as const,
} as const;

// UI constants
export const UI_CONFIG = {
  toastDuration: 5000,
  loadingDebounce: 500,
  animationDuration: 300,
} as const;

// Routes
export const ROUTES = {
  home: '/',
  about: '/about',
  contact: '/contact',
} as const;

// Error messages
export const ERROR_MESSAGES = {
  imageRequired: 'Please upload an image first',
  invalidImageType: 'Please upload a valid image file (JPG, PNG, or WebP)',
  imageTooLarge: 'Image file is too large. Please use an image smaller than 10MB',
  notPlantImage: 'Please upload a clear image of a plant leaf for disease analysis',
  networkError: 'Network error. Please check your internet connection and try again',
  analysisTimeout: 'Analysis is taking too long. Please try again with a smaller image',
  genericError: 'Something went wrong. Please try again',
  serviceUnavailable: 'Analysis service is currently unavailable. Please try again later',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  analysisComplete: 'Analysis completed successfully',
  imageUploaded: 'Image uploaded successfully',
} as const;

// Development flags
export const DEV_CONFIG = {
  enableDebugLogs: process.env.NODE_ENV === 'development',
  showErrorDetails: process.env.NODE_ENV === 'development',
} as const;