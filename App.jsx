import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import './App.css'
import SelectMenu from "./components/SelectMenu"
import CountriesContainer from "./components/CountriesContainer"
import React, {useState} from "react"

const App = ()=>{

    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    const [query, setQuery] = React.useState('');
    const [continent, setContinent] = React.useState('');

    return (
        <>
            <Header theme={[isDark, setIsDark]} />
            <main className={`${isDark ? 'dark' : ''}`}>
                <div className={`header-content ${isDark ? 'dark' : ''}`}>
                    <SelectMenu setContinent={setContinent}/>
                    <SearchBar setQuery={setQuery}/>
                </div>
            <CountriesContainer query={query} continent={continent} theme ={[isDark, setIsDark]}/>
            </main>

            {/* Cleaning up in useState */}
            {/* {
                query === "unmount" ? '' : <CountriesContainer query={query} continent={continent}/>
                } */
            }
            
        </>
    )
}

export default App