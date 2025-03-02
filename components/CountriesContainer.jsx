import React, { useState } from "react";
import Data from "../Data";
import CountryCard from "./CountryCard";

export default function CountriesContainer({query, continent}) {

    let filtered = Data
    console.log("filtered ", filtered)
    console.log(continent)
    if(continent !== ""){
        filtered = Data.filter((country) => country.region == continent)
    }
        filtered = filtered.filter((country) => country.name.common.toLowerCase().includes(query))


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
            />
        );
    

  });

  return <div className="countries-container">
        {arr}
  </div>;
}
