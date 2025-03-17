import { createRoot } from "react-dom/client";
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CountriesContainer from "./components/CountriesContainer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children:[
            
        ]
    },
    {
        path: '/CountryDetail',
        element: <CountryDetail/>
    },
    {
        path: '/contact',
        element: <div>Hello World</div>
    },
    
    
])

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router}/>)