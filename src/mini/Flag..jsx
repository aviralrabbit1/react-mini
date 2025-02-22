import React, { useEffect, useRef, useState } from 'react';

const CountryCard = ({country}) => {
    const { png, common } = country;
    // console.log(name);
  return (
    <div className='countryCard' key={common} style={{
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
        <img src={png} alt={common} width="100px" height="70px"/>
        <h5>{common}</h5>
    </div>
  )
}

const Flags = () => {
    const [countries, setcountries] = useState([]);    
    const [loading, setLoading] = useState(true);
    const [filteredCountry, setFilteredCountry] = useState([]);
    const inputRef = useRef(null); // Create a ref for the input

    useEffect(() => {
        const fetchCountries = async () => {
            const url = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
            // { common, png }
            try {
                const response = await fetch(url);
                // console.log(response);
                const data = await response.json();
                // console.log(data);
                setcountries(data);
                setFilteredCountry(data);
            } catch (error){
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchCountries();
        
        // Focus the input field when the component mounts
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    const searchCountry = (text) => {
        if (text.trim() === "") {
            // If the input is empty, show all countries
            setFilteredCountry(countries);
        } else {
            const filter = countries.filter(country => 
                country.common.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredCountry(filter);
        }
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        searchCountry(value);
    };
        
    return (
        <div style={{
            display: "flex",
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
            : 
            <div>
                <input type="text" name="searchCountry" id="searchCountry" 
                placeholder='Search for countries' ref={inputRef}
                onChange={handleInputChange}
                style={{width:"200px", height: "32px", fontSize: "16px", margin: "20px 0"}}/>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    textAlign: "center"
                }}>
                    {filteredCountry.map((country, idx) => 
                        (<CountryCard key={idx} country={country} />)
                    )}
                </div>
            </div>
            }
        </div>
    );
};

export default Flags;