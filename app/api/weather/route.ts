import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: 'City parameter is required' }, { status: 400 });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    // Return mock data if no API key is provided
    const mockData = getMockWeatherData(city);
    return NextResponse.json(mockData);
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`,
      { next: { revalidate: 300 } }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ error: 'City not found' }, { status: 404 });
      }
      throw new Error('Weather API error');
    }

    const data = await response.json();

    const weatherData = {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      condition: data.weather[0].main,
      visibility: data.visibility / 1000,
      pressure: data.main.pressure,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    };

    return NextResponse.json(weatherData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 });
  }
}

function getMockWeatherData(city: string) {
  const conditions = [
    { condition: 'Clear', description: 'clear sky', icon: '01d', temp: 24 },
    { condition: 'Clouds', description: 'partly cloudy', icon: '02d', temp: 18 },
    { condition: 'Rain', description: 'light rain', icon: '10d', temp: 14 },
    { condition: 'Snow', description: 'light snow', icon: '13d', temp: -2 },
    { condition: 'Thunderstorm', description: 'thunderstorm', icon: '11d', temp: 16 },
  ];

  const random = conditions[Math.floor(Math.random() * conditions.length)];

  return {
    city: city.charAt(0).toUpperCase() + city.slice(1),
    country: 'US',
    temperature: random.temp,
    feelsLike: random.temp - 2,
    humidity: Math.floor(Math.random() * 40) + 40,
    windSpeed: Math.floor(Math.random() * 20) + 5,
    description: random.description,
    icon: random.icon,
    condition: random.condition,
    visibility: Math.floor(Math.random() * 5) + 8,
    pressure: Math.floor(Math.random() * 30) + 1000,
    sunrise: Math.floor(Date.now() / 1000) - 21600,
    sunset: Math.floor(Date.now() / 1000) + 21600,
  };
}
