'use client';

import { Wind, Droplets, Eye, Gauge } from 'lucide-react';

interface WeatherStatsProps {
  humidity: number;
  windSpeed: number;
  visibility: number;
  pressure: number;
}

export default function WeatherStats({ humidity, windSpeed, visibility, pressure }: WeatherStatsProps) {
  const stats = [
    {
      icon: <Droplets className="w-5 h-5" />,
      label: 'Humidity',
      value: `${humidity}%`,
    },
    {
      icon: <Wind className="w-5 h-5" />,
      label: 'Wind',
      value: `${windSpeed} m/s`,
    },
    {
      icon: <Eye className="w-5 h-5" />,
      label: 'Visibility',
      value: `${visibility} km`,
    },
    {
      icon: <Gauge className="w-5 h-5" />,
      label: 'Pressure',
      value: `${pressure} hPa`,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 mb-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-3 bg-white/10 rounded-xl p-3"
        >
          <div className="text-white/70">{stat.icon}</div>
          <div>
            <p className="text-white/50 text-xs">{stat.label}</p>
            <p className="text-white font-semibold text-sm">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
