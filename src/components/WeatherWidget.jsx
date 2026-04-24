import { Cloud, CloudRain, CloudSnow, Sun, CloudLightning, CloudFog, Moon, Loader2 } from 'lucide-react';
import { useWeather } from '../hooks/useWeather';

const iconMap = {
  '01d': Sun,
  '01n': Moon,
  '02d': Cloud,
  '02n': Cloud,
  '03d': Cloud,
  '03n': Cloud,
  '04d': Cloud,
  '04n': Cloud,
  '09d': CloudRain,
  '09n': CloudRain,
  '10d': CloudRain,
  '10n': CloudRain,
  '11d': CloudLightning,
  '11n': CloudLightning,
  '13d': CloudSnow,
  '13n': CloudSnow,
  '50d': CloudFog,
  '50n': CloudFog
};

export default function WeatherWidget() {
  const { weather, loading, error } = useWeather();

  if (error || loading) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 text-gold text-xs font-medium">
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      </div>
    );
  }

  if (!weather) return null;

  const IconComponent = iconMap[weather.icon] || Cloud;

  return (
    <a
      href={`https://openweathermap.org/city/${weather.city}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-3 py-2 text-gold text-sm font-bold hover:bg-gold/20 rounded-lg transition-all"
    >
      <IconComponent className="h-4 w-4" />
      <span>{weather.temp}°</span>
      <span className="hidden md:inline text-xs text-gold">{weather.city}</span>
      <span className="hidden md:inline text-xs text-gold/70">{weather.country}</span>
    </a>
  );
}