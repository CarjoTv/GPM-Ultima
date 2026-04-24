import { useState, useEffect } from 'react';

const OPENWEATHER_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const CACHE_DURATION = 30 * 60 * 1000;

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!OPENWEATHER_KEY) {
        setError('Missing API key');
        setLoading(false);
        return;
      }

      try {
        const cached = localStorage.getItem('gpm_weather_cache');
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setWeather(data);
            setLoading(false);
            return;
          }
        }

        const geoResponse = await fetch('https://ipapi.co/json/');
        
        if (!geoResponse.ok) throw new Error('Failed to fetch location');
        
        const geoData = await geoResponse.json();
        
        if (!geoData.latitude || !geoData.longitude) throw new Error('No location data');
        
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${geoData.latitude}&lon=${geoData.longitude}&appid=${OPENWEATHER_KEY}&units=metric&lang=es`
        );
        
        if (!weatherResponse.ok) throw new Error('Failed to fetch weather');
        
        const weatherData = await weatherResponse.json();
        
        const result = {
          temp: Math.round(weatherData.main.temp),
          description: weatherData.weather[0].description,
          icon: weatherData.weather[0].icon,
          city: geoData.city || weatherData.name,
          country: geoData.country_code
        };
        
        localStorage.setItem('gpm_weather_cache', JSON.stringify({
          data: result,
          timestamp: Date.now()
        }));
        
        setWeather(result);
      } catch (err) {
        console.error('Weather fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { weather, loading, error };
}