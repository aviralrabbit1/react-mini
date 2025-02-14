import React from 'react';
import { useState, useEffect } from 'react';

const CountryCard = ({country}) => {
    const { abbr, flag, name} = country;
    // console.log(name);
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
        margin: "8px",
        padding: "5px",
        width: "160px",
        height: "160px"
    }}>
        <img src={flag} alt={name} width="100px" height="70px"/>
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
                console.log(response);
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
    }, [])
        
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "center"
        }}>
            {loading 
            ?<h3 style={{
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",                
                textAlign:"center"
            }}>Loading...</h3>
            : contries.map((country, idx) => 
                (<CountryCard key={idx} country={country} />)
            )}
        </div>
    );
};

export default Flags;