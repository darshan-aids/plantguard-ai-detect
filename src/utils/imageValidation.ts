// Image validation utilities
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes
export const ALLOWED_FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export interface ImageValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateImageFile = (file: File): ImageValidationResult => {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      isValid: false,
      error: `File size must be less than ${Math.round(MAX_FILE_SIZE / 1024 / 1024)}MB. Current file is ${Math.round(file.size / 1024 / 1024)}MB.`
    };
  }

  // Check file type
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return {
      isValid: false,
      error: `File type not supported. Please upload JPG, PNG, or WebP images only.`
    };
  }

  return { isValid: true };
};

export const validateImageUrl = (url: string): ImageValidationResult => {
  // Basic URL validation
  try {
    new URL(url);
  } catch {
    return {
      isValid: false,
      error: 'Invalid image URL'
    };
  }

  // Check if URL ends with image extension (basic check)
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const urlLower = url.toLowerCase();
  const hasImageExtension = imageExtensions.some(ext => urlLower.includes(ext));
  
  if (!hasImageExtension && !url.startsWith('data:image/')) {
    return {
      isValid: false,
      error: 'URL does not appear to be an image'
    };
  }

  return { isValid: true };
};