import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className=" text-white p-4 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">
        {weather.name}, {weather.sys?.country}
      </h2>
      <img
        src={iconUrl}
        alt={weather.weather[0].description}
        className="mx-auto"
      />
      <p className="text-lg capitalize">{weather.weather[0].description}</p>
      <p className="text-2xl font-semibold">{weather.main.temp}°C</p>
      <p className="text-sm">Humidity: {weather.main.humidity}%</p>
      <p className="text-sm">Wind: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
