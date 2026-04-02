'use client';

import { WeatherData } from '@/types/weather';
import WeatherIcon from './WeatherIcon';
import WeatherStats from './WeatherStats';
import SunriseSunset from './SunriseSunset';

interface WeatherDisplayProps {
  data: WeatherData;
}

export default function WeatherDisplay({ data }: WeatherDisplayProps) {
  const getBgGradient = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return 'from-yellow-400/20 to-orange-400/20';
      case 'clouds':
        return 'from-gray-400/20 to-blue-400/20';
      case 'rain':
      case 'drizzle':
        return 'from-blue-500/20 to-cyan-500/20';
      case 'snow':
        return 'from-blue-200/20 to-white/20';
      case 'thunderstorm':
        return 'from-gray-700/20 to-purple-700/20';
      default:
        return 'from-white/10 to-white/5';
    }
  };

  return (
    <div className={`mt-6 weather-card rounded-2xl p-6 bg-gradient-to-br ${getBgGradient(data.condition)}`}>
      {/* City & Country */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{data.city}</h2>
          <p className="text-white/60 text-sm">{data.country}</p>
        </div>
        <WeatherIcon condition={data.condition} icon={data.icon} />
      </div>

      {/* Temperature */}
      <div className="mb-6">
        <div className="flex items-end gap-2">
          <span className="text-7xl font-thin text-white">{data.temperature}°</span>
          <span className="text-2xl text-white/60 mb-3">C</span>
        </div>
        <p className="text-white/80 capitalize text-lg">{data.description}</p>
        <p className="text-white/50 text-sm mt-1">Feels like {data.feelsLike}°C</p>
      </div>

      {/* Stats */}
      <WeatherStats
        humidity={data.humidity}
        windSpeed={data.windSpeed}
        visibility={data.visibility}
        pressure={data.pressure}
      />

      {/* Sunrise / Sunset */}
      <SunriseSunset sunrise={data.sunrise} sunset={data.sunset} />
    </div>
  );
}
