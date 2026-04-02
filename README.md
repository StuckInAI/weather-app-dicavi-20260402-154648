# 🌤 Weather App

A beautiful weather application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature, humidity, wind speed
- 🌅 Sunrise & sunset times
- 🎨 Dynamic backgrounds based on weather conditions
- 🐳 Docker support
- 📱 Fully responsive design
- 🔄 Works with or without an API key (uses mock data as fallback)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- (Optional) OpenWeatherMap API key

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd weather-app

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Add your API key (optional)
# Edit .env.local and add your OpenWeatherMap API key

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### API Key Setup

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Create a free account
3. Generate an API key
4. Add it to `.env.local`:

```env
OPENWEATHER_API_KEY=your_api_key_here
```

> **Note:** Without an API key, the app uses randomly generated mock data.

## 🐳 Docker

### Build and Run

```bash
# Build the Docker image
docker build -t weather-app .

# Run the container
docker run -p 3000:3000 -e OPENWEATHER_API_KEY=your_key weather-app
```

### Docker Compose

```bash
docker-compose up
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
weather-app/
├── app/
│   ├── api/
│   │   └── weather/
│   │       └── route.ts      # API route
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx              # Main page
├── components/
│   ├── SearchBar.tsx
│   ├── WeatherDisplay.tsx
│   ├── WeatherIcon.tsx
│   ├── WeatherStats.tsx
│   └── SunriseSunset.tsx
├── lib/
│   └── weather.ts            # API client
├── types/
│   └── weather.ts            # TypeScript types
├── public/
│   ├── placeholder.svg
│   ├── wind.svg
│   └── humidity.svg
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **OpenWeatherMap API** - Weather data
- **Docker** - Containerization
