import React from 'react'

export default function SelectMenu({setContinent}) {

  return (
    <div>
        <select className='filter-by-region' onChange={(e)=>setContinent(e.target.value)}>
            <option hidden="">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
        </select>
    </div>
  )
}
