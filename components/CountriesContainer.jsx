import React, { useEffect, useState } from "react";
// import Data from "../Data";
import CountryCard from "./CountryCard";
import CountryCardsShimmer from "./CountryCardsShimmer";

export default function CountriesContainer({query, continent, theme}) {
    
    let [countriesData , setCountriesData] = useState([]);
    let [count,setCount] = useState(0);
    let [loading, setLoading] = useState(true)
    const [isDark, setIsDark] = theme;
    
    let filtered = countriesData
    
    if(continent !== ""){
        filtered = countriesData.filter((country) => country.region == continent)
    }
        filtered = filtered.filter((country) => country.name.common.toLowerCase().includes(query))


    //When  we directly fetch the requests fusing fetch function multiple requests are made to the backend👇
    
    // fetch('https://restcountries.com/v3.1/all')
    // .then((res)=>res.json())
    // .then((data)=>{
    //     setCountriesData(data)
    //     console.log(countriesData)
    // })
    // console.log("hi")    

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res)=>res.json())
        .then((data)=>{
            setCountriesData(data)
            setLoading(false)
            // console.log(countriesData)
        })
        // console.log("hi")
        return ()=> {
            console.log("Cleaning UP") //clean up function
        }
    },[])
    

    // console.log(filtered);

    const arr = filtered.map((country,i) => {
        return (
            <CountryCard
            key={i}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital}
            data={country}
            />
        );
    

  });

  return <div className={`${isDark ? 'dark' : ''}`}>
  {/* <h1>{count}</h1>
  <button onClick={()=>setCount(count+1)}>Increment</button> */}
  {loading&&<CountryCardsShimmer/>}
    <div className={`countries-container ${isDark ? 'dark' : ''}`}>
            {arr}
    </div>;
  </div>
}
