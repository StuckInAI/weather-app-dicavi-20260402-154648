'use client';

import { Sunrise, Sunset } from 'lucide-react';

interface SunriseSunsetProps {
  sunrise: number;
  sunset: number;
}

function formatTime(unix: number): string {
  const date = new Date(unix * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function SunriseSunset({ sunrise, sunset }: SunriseSunsetProps) {
  return (
    <div className="flex justify-between gap-3">
      <div className="flex-1 flex items-center gap-3 bg-white/10 rounded-xl p-3">
        <Sunrise className="w-5 h-5 text-yellow-300" />
        <div>
          <p className="text-white/50 text-xs">Sunrise</p>
          <p className="text-white font-semibold text-sm">{formatTime(sunrise)}</p>
        </div>
      </div>
      <div className="flex-1 flex items-center gap-3 bg-white/10 rounded-xl p-3">
        <Sunset className="w-5 h-5 text-orange-300" />
        <div>
          <p className="text-white/50 text-xs">Sunset</p>
          <p className="text-white font-semibold text-sm">{formatTime(sunset)}</p>
        </div>
      </div>
    </div>
  );
}
