import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import GetWeatherInfo from './Components/GetWeatherInfo';
import ShowWeatherData from './Components/ShowWeatherData';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  function getWeatherInfo(data) {
    setWeatherData(data);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Weather Now</h1>
      <div className="card">
        <GetWeatherInfo getWeatherInfo={getWeatherInfo} />
      </div>
      <ShowWeatherData weatherData={weatherData} />
    </>
  );
}

export default App;
