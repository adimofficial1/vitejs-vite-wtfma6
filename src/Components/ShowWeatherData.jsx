function ShowWeatherData({ weatherData }) {
  return (
    <table class="table table-dark table-hover">
      <thead>
        <tr>
          <th>State</th>
          <th>City</th>
          <th>Temperature(°C)</th>
          <th>Cloud Condition</th>
        </tr>
      </thead>
      <tbody>
        {weatherData.map((res) => (
          <tr>
            <td>{res.state}</td>
            <td>{res.city}</td>
            <td>{res.tempc}</td>
            <td>{res.condition}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ShowWeatherData;
