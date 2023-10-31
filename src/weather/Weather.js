import { useEffect, useState } from "react"



export const Weather = () => {
const [currentWeather, setCurrentWeather] = useState({})

useEffect(()=>{
  fetch("https://api.open-meteo.com/v1/forecast?latitude=38.3498&longitude=-81.6326&current=temperature_2m,precipitation,rain,showers,snowfall&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=1")
  .then(r=>r.json())
  .then(weatherObj => setCurrentWeather(weatherObj))
},[])

    return (
        <div className="card">
  {/* <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
    </figure>
  </div> */}
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEKDz5klI920TlQDM2GelWQMYIBtQIyNP3qQRZSxQ7ra32CW4-GBVXfhilb9bEAvpbT6Q&usqp=CAU" alt="Placeholder image" />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">Current Temp: {currentWeather.current?.temperature_2m}{currentWeather.current_units?.temperature_2m}</p>
      </div>
    </div>

    <div className="content">
    
    <h4>High Temp: {currentWeather.daily?.temperature_2m_max}{currentWeather.daily_units?.temperature_2m_max}</h4>
    <h4>Low Temp: {currentWeather.daily?.temperature_2m_min}{currentWeather.daily_units?.temperature_2m_min}</h4>
      <br />
      <time datetime={currentWeather.current?.time}>{Date(currentWeather.current?.time)}</time>
    </div>
  </div>
</div>
    )

}