import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import './App.css'
import SelectMenu from "./components/SelectMenu"
import CountriesContainer from "./components/CountriesContainer"
import React from "react"

const App = ()=>{
    const [query, setQuery] = React.useState('');
    const [continent, setContinent] = React.useState('');

    return (
        <>
            <Header />
            <main>
                <div className="header-content">
                    <SelectMenu setContinent={setContinent}/>
                    <SearchBar setQuery={setQuery}/>
                </div>
            </main>
            <CountriesContainer query={query} continent={continent}/>
        </>
    )
}

export default App