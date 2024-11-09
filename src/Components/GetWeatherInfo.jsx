import { useState } from 'react';

function GetWeatherInfo({ getWeatherInfo }) {
  const [city, setCity] = useState('');
  const API_key = '47e16a8d993b444b980142211240911';

  function getWeatherDataByCity(city) {
    setCity(city);
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_key}&q=${city}`)
      .then((res) => res.json())
      .then((res) => {
        const data = [
          {
            state: res.location.region,
            city: city,
            tempc: res.current.temp_c,
            condition: res.current.condition.text,
          },
        ];
        getWeatherInfo(data);
      });
  }

  return (
    <>
      <label for="sel1" class="form-label">
        Select City:
      </label>
      <select
        class="form-select"
        id="sel1"
        name="sellist1"
        value={city}
        onChange={(e) => getWeatherDataByCity(e.target.value)}
      >
        <option value=""></option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Noida">Noida</option>
        <option value="Delhi">Delhi</option>
        <option value="Pune">Pune</option>
        <option value="Chennai">Chennai</option>
        <option value="Kolkata">Kolkata</option>
      </select>
    </>
  );
}

export default GetWeatherInfo;
