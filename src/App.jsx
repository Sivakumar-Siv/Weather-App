import { useState } from 'react'
import SearchBar from './components/SearchBar';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';


function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;

  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;

      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('City not found. Please try again.')
      }
      else {
        setError("An error occurred. Please try again later.")
      }
      setWeather(null);
    }
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Weather App Content */}
        <div className="bg-black/70 text-white rounded-lg shadow-lg p-8 max-w-md w-full relative z-10">
          <h1 className="text-3xl font-bold text-center mb-2">Weather Report</h1>
          <p className='font-bold text-center mb-6'>Get the latest weather updates for your city!</p>
          <SearchBar fetchWeather={fetchWeather} />
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {weather && <WeatherCard weather={weather} />}
        </div>
      </div>
    </>
  );
}

export default App;
