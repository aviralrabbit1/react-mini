import React from 'react'
import { useState, useEffect } from 'react';

function States() {
    const [contries, setContries] = useState([]);
    const [country, setCountry] = useState("");
    const [states, setstates] = useState([]);
    const [state, setstate] = useState("");
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState("");
    
    useEffect(() => {
        const fetchCountries = async () => {
            const url = "https://crio-location-selector.onrender.com/countries";
            try {
                const response = await fetch(url);
                // console.log(response);
                const data = await response.json();
                // console.log(data);
                setContries(data);
                setstate("");
                setCity("");
            } catch (error){
                console.error(error);
            }
        }
      fetchCountries();
    }, [])

    useEffect(() => {
      const fetchStates = async () => {
          if(country){
              const url = `https://crio-location-selector.onrender.com/country=${country}/states`;
              try {
                  const response = await fetch(url);
                //   console.log(response);
                  const data = await response.json();
                  console.log(data);
                  setstates(data);
                  setCity("");
              } catch (error){
                  console.error(error);
              }
          }
      }
      fetchStates();
    }, [country])

    useEffect(() => {
        const fetchCity = async () => {
            if(state){
                const url = `https://crio-location-selector.onrender.com/country=${country}/state=${state}/cities`;
                try {
                    const response = await fetch(url);
                    // console.log(response);
                    const data = await response.json();
                    console.log(data);
                    setCities(data);
                } catch (error){
                    console.error(error);
                }
            }
        }
        fetchCity();
      }, [state])
    
  return (
    <div>
        <h2>Select location</h2>
            <div>
                <select value={country} style={{ width: "200px" }} onChange={(e) => setCountry(e.target.value)}>

                    <option style={{width: "200px"}} value="" disabled >Select Country
                    </option>

                    {contries.map((country) => {
                        return <option key={country} value={country}>{country}</option>
                    })}
                </select>
                <select value={state} style={{ width: "200px" }} onChange={(e) => setstate(e.target.value)}
                   disabled={!country} >

                    <option style={{width: "200px"}} value="" disabled >Select State
                    </option>

                    {states.map((state) => {
                        return <option key={state} value={state}>{state}</option>
                    })}
                </select>
                <select value={city} style={{ width: "200px" }} onChange={(e) => setCity(e.target.value)}
                   disabled={!state} >

                    <option style={{width: "200px"}} value="" disabled >Select City
                    </option>

                    {cities.map((city) => {
                        return <option key={city} value={city}>{city}</option>
                    })}
                </select>

            </div>
            {city && 
                <span>
                    You have chosen <h3> {city}, {state}, {country}. </h3> 
                </span>
            }
            <h3>{} </h3>
    </div>
  )
}

export default States