'use client';

interface WeatherIconProps {
  condition: string;
  icon: string;
}

const conditionEmojis: Record<string, string> = {
  Clear: '☀️',
  Clouds: '☁️',
  Rain: '🌧️',
  Drizzle: '🌦️',
  Thunderstorm: '⛈️',
  Snow: '❄️',
  Mist: '🌫️',
  Fog: '🌫️',
  Haze: '🌫️',
  Dust: '🌪️',
  Sand: '🌪️',
  Ash: '🌋',
  Squall: '💨',
  Tornado: '🌪️',
};

export default function WeatherIcon({ condition }: WeatherIconProps) {
  const emoji = conditionEmojis[condition] || '🌡️';

  return (
    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-4xl">
      {emoji}
    </div>
  );
}
