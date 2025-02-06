import React from 'react'
import { useState, useEffect } from 'react';

function States() {
    const [contries, setContries] = useState([]);

    const fetchCountries = async () => {
        const url = "https://crio-location-selector.onrender.com/countries";
        try {
            const response = await fetch(url);
            console.log(response);
            const data = await response.json();
            console.log(data);
            setContries(data);
        } catch (error){
            console.error(error);
        }
    }

    const fetchStates = async () => {
        const url = `https://crio-location-selector.onrender.com/country=${country}/states`;
        try {
            const response = await fetch(url);
            console.log(response);
            const data = await response.json();
            console.log(data);
            setContries(data);
        } catch (error){
            console.error(error);
        }
    }

    // https://crio-location-selector.onrender.com/country=%7BcountryName%7D/state=%7BstateName%7D/cities
    useEffect(() => {
      fetchCountries();
    }, [])
    
  return (
    <div>
        <h2>Select location</h2>
        <h4>
            <form action="submit">
                {contries.forEach((country) => 
                    <select name={country} id="curren_country"></select>
                )}
                <select name={country} id="current_country">{contries.map((i) => i)}</select>

            </form>
        </h4>
    </div>
  )
}

export default States