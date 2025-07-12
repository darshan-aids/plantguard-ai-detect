import { describe, it, expect } from 'vitest';
import { validateImageFile, validateImageUrl } from '../utils/imageValidation';

describe('Image Validation', () => {
  describe('validateImageFile', () => {
    it('should accept valid image files', () => {
      const validFile = new File(['test'], 'test.jpg', { type: 'image/jpeg' });
      const result = validateImageFile(validFile);
      expect(result.isValid).toBe(true);
      expect(result.error).toBeUndefined();
    });

    it('should reject files that are too large', () => {
      const largeFile = new File(['x'.repeat(11 * 1024 * 1024)], 'large.jpg', { type: 'image/jpeg' });
      const result = validateImageFile(largeFile);
      expect(result.isValid).toBe(false);
      expect(result.error).toContain('File size must be less than');
    });

    it('should reject invalid file types', () => {
      const invalidFile = new File(['test'], 'test.txt', { type: 'text/plain' });
      const result = validateImageFile(invalidFile);
      expect(result.isValid).toBe(false);
      expect(result.error).toContain('File type not supported');
    });

    it('should accept all supported image types', () => {
      const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      
      supportedTypes.forEach(type => {
        const file = new File(['test'], `test.${type.split('/')[1]}`, { type });
        const result = validateImageFile(file);
        expect(result.isValid).toBe(true);
      });
    });
  });

  describe('validateImageUrl', () => {
    it('should accept valid image URLs', () => {
      const validUrls = [
        'https://example.com/image.jpg',
        'https://example.com/image.png',
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABA',
      ];

      validUrls.forEach(url => {
        const result = validateImageUrl(url);
        expect(result.isValid).toBe(true);
      });
    });

    it('should reject invalid URLs', () => {
      const result = validateImageUrl('not-a-url');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Invalid image URL');
    });

    it('should reject non-image URLs', () => {
      const result = validateImageUrl('https://example.com/document.pdf');
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('URL does not appear to be an image');
    });
  });
});