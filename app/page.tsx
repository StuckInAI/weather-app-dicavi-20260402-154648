'use client';

import { useState } from 'react';
import WeatherDisplay from '@/components/WeatherDisplay';
import SearchBar from '@/components/SearchBar';
import { WeatherData } from '@/types/weather';
import { fetchWeather } from '@/lib/weather';

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🌤 Weather App</h1>
          <p className="text-white/70 text-sm">Search for any city to get real-time weather</p>
        </div>

        <SearchBar onSearch={handleSearch} loading={loading} />

        {error && (
          <div className="mt-4 p-4 rounded-xl bg-red-500/20 border border-red-400/30 text-red-200 text-center text-sm">
            {error}
          </div>
        )}

        {loading && (
          <div className="mt-8 flex justify-center">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {weather && !loading && <WeatherDisplay data={weather} />}

        {!weather && !loading && !error && (
          <div className="mt-8 weather-card rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🌍</div>
            <p className="text-white/80 text-lg font-medium">Search a city to see weather</p>
            <p className="text-white/50 text-sm mt-2">Try "London", "Tokyo", or "New York"</p>
          </div>
        )}
      </div>
    </main>
  );
}
