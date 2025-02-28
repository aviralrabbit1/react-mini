import React, { useState, useEffect } from 'react'

const Weather = () => {
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(true)
    const [weatherData, setWeatherData] = useState(false);
    let weather_condition;

    const api_key = "3c94fc6a079848d8a5402341252802";
    const api_url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=`;

    async function fetchWeather() {
        if (!city) return; // Prevent fetching if city is empty
        try {
            const response = await fetch(api_url+city);
            var data = await response.json();
            // console.log(data);
            let curr = data.current;
            console.log(curr);
            const { temp_c, wind_kph, humidity, condition } = curr;
            const text = condition.text;      
            setWeatherData(curr);
            weather_condition = text;

        } catch (error) {
            alert("Failed to fetch weather data");
        } finally {
            setLoading(true);
        }
    }
    
    

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }}>
        <div >
            <input type="text" name="city" id="city" onChange={(e)=> setCity(e.target.value)} placeholder="Enter city name" spellCheck="false" />
            <button onClick={fetchWeather}>Search</button>
            </div>
        {loading && <p>Loading data...</p>}
        {weatherData && (
            <div className='weather-cards' style={{
                display: "flex"
            }}>
                <Card info="Temperature" value={`${weatherData.temp_c}°C`} />
                <Card info="Humidity" value={`${weatherData.humidity}%`} />
                <Card info="Condition" value={weatherData.condition.text} />
                <Card info="Wind Speed" value={`${weatherData.wind_kph} kph`} />
                </div>
        )} 
    </div>
  )
}

function Card({ info, value }) {
    return (
        <div className='weather-card' style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            boxShadow: "1px 1px 5px rgba(0,0,0,0.5)",
            padding: "10px",
            margin: "10px",
            borderRadius: "5px",
            backgroundColor: "#f0f0f0"
        }}>
            <h4>{info}</h4>
            <h4>{value}</h4>
        </div>
    );
}

export default Weather