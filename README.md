# PlantGuard AI - Plant Disease Detection

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/darshan-aids/plantguard-ai-detect)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

PlantGuard AI is a modern web application that uses Google's Gemini AI to detect plant diseases from photos. Simply upload an image of a plant leaf to get instant disease diagnosis and treatment recommendations.

## 🌟 Features

- **AI-Powered Analysis**: Uses Google Gemini AI for accurate plant disease detection
- **Instant Results**: Get disease diagnosis and confidence scores within seconds
- **Treatment Recommendations**: Receive both organic and chemical treatment options
- **Mobile-Friendly**: Responsive design works on all devices
- **User-Friendly Interface**: Clean, intuitive design with drag-and-drop upload
- **Image Validation**: Smart detection to ensure plant images are uploaded

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Google Gemini AI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/darshan-aids/plantguard-ai-detect.git
   cd plantguard-ai-detect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your environment variables:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `GEMINI_API_KEY`: Your Google Gemini AI API key (for edge function)

4. **Set up Supabase Edge Function**
   ```bash
   # Install Supabase CLI if not already installed
   npm install -g supabase
   
   # Deploy the edge function
   supabase functions deploy analyze-plant --env-file .env
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:8080`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # App header
│   ├── ImageUpload.tsx # Image upload component
│   └── DiagnosisResult.tsx # Results display
├── pages/              # Page components
├── utils/              # Utility functions
├── integrations/       # External service integrations
│   └── supabase/      # Supabase configuration
└── hooks/             # Custom React hooks

supabase/
└── functions/
    └── analyze-plant/ # Gemini AI integration
```

## 🔧 Configuration

### Supabase Setup

1. Create a new Supabase project
2. Copy your project URL and anon key to `.env`
3. Deploy the edge function:
   ```bash
   supabase functions deploy analyze-plant
   ```

### Gemini AI Setup

1. Get an API key from [Google AI Studio](https://aistudio.google.com/)
2. Add it to your Supabase project's edge function secrets:
   ```bash
   supabase secrets set GEMINI_API_KEY=your_api_key
   ```

## 📱 Usage

1. **Upload an Image**: Drag and drop or click to upload a plant leaf image
2. **Analyze**: Click "Analyze with Gemini AI" to process the image
3. **Review Results**: View the plant identification, disease diagnosis, and treatment options
4. **Get Treatments**: Follow the organic or chemical treatment recommendations

## 🧪 Testing

Currently, the project uses manual testing. Automated testing framework setup is planned.

## 🚀 Deployment

### Using Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Using Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure environment variables in Netlify dashboard

## 🔒 Security & Privacy

- Images are processed securely through Supabase edge functions
- No images are permanently stored
- API keys are securely managed through environment variables
- HTTPS encryption for all data transmission

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- Create an [issue](https://github.com/darshan-aids/plantguard-ai-detect/issues) for bug reports
- Start a [discussion](https://github.com/darshan-aids/plantguard-ai-detect/discussions) for questions
- Check existing issues before creating new ones

## 🛣️ Roadmap

- [ ] Add comprehensive testing suite
- [ ] Implement user authentication
- [ ] Add analysis history
- [ ] Support for multiple image formats
- [ ] Batch image processing
- [ ] Expert consultation features
- [ ] Mobile app development

## ⚡ Performance

- Bundle size: ~488KB (gzipped: ~148KB)
- Optimized for modern browsers
- Responsive design for all screen sizes

## 🔗 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Build Tool**: Vite
- **Backend**: Supabase Edge Functions
- **AI**: Google Gemini AI
- **Deployment**: Vercel/Netlify compatible

---

Made with ❤️ by [Darshan AIDS](https://github.com/darshan-aids)
