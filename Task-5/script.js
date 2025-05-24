const apiKey="23cebef5ec3bbf537e10634641944d8f";
function getWeather(){
  const cityInput=document.getElementById("cityInput").value.trim();
  const weatherResult=document.getElementById("weatherResult");
  weatherResult.innerHTML="";
  if (!cityInput){
    weatherResult.innerHTML="<p>Please enter a city name.</p>";
    return;
  }
  const query=cityInput.includes(",") ? cityInput : `${cityInput},IN`;
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => {
      if (!response.ok){
        throw new Error(`Error ${response.status}:${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (data.cod!==200){
        throw new Error(data.message || "City not found. Try using format like 'Srikakulam,IN'");
      }
      const html = `
        <div class="weather-card">
          <h2>${data.name},${data.sys.country}</h2>
          <p><strong>Temperature:</strong>${data.main.temp} °C</p>
          <p><strong>Weather:</strong>${data.weather[0].description}</p>
          <p><strong>Humidity:</strong>${data.main.humidity}%</p>
          <p><strong>Wind Speed:</strong>${data.wind.speed} m/s</p>
        </div>
      `;
      weatherResult.innerHTML=html;
    })
    .catch(error => {
      console.error(error);
      weatherResult.innerHTML=`<p style="color:red;">${error.message}</p>`;
    });
}
