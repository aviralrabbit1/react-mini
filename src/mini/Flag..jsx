import React from 'react';
import { useState, useEffect } from 'react';

const CountryCard = ({country}) => {
    const { abbr, flag, name} = country;
    console.log(name);
  return (
    <div key={abbr} style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        border: "1px solid black",
        borderRadius: "5px",
        margin: "10px",
        width: "170px",
        height: "170px"
    }}>
        <img src={flag} alt={name} width="100px" height="100px"/>
        <h5>{name}</h5>
    </div>
  )
}

const Flags = () => {
    const [contries, setContries] = useState([]);    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountries = async () => {
            const url = "https://xcountries-backend.azurewebsites.net/all";
            try {
                const response = await fetch(url);
                // console.log(response);
                const data = await response.json();
                // console.log(data);
                setContries(data);
            } catch (error){
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchCountries();
    })
        
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "center",
            textAlign: "center"
        }}>
            {loading 
            ?<h3 style={{
                display: "flex",
                alignSelf: "center",
                textAlign:"center"
            }}>Loading...</h3>
            : contries.map((country) => 
                (<CountryCard key={country.abbr} country={country} />)
            )}
        </div>
    );
};

export default Flags;