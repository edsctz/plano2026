# Plano 2026 - AI-Powered Planning Application

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Add your Gemini API key to `.env`:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add the environment variable in Vercel:
   - Go to Project Settings → Environment Variables
   - Add `VITE_GEMINI_API_KEY` with your API key
4. Deploy

## Environment Variables

- `VITE_GEMINI_API_KEY`: Your Google Gemini API key (required)

## Tech Stack

- React 18.3.1
- TypeScript
- Vite
- React Router DOM
- Recharts
- Lucide React Icons
- Google Generative AI (Gemini)
