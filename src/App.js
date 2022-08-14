import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navs from './Components/Navs';
import Home from './Pages/Home';
import Started from './Pages/Started';

function App() {
    return ( <
        div >
        <
        Navs > < /Navs>/ { ' ' } <
        Routes >
        <
        Route exact path = "/"
        element = { < Home / > } > { ' ' } <
        /Route>{' '} <
        Route path = "/started"
        element = { < Started / > } > { ' ' } <
        /Route>{' '} <
        Route > < /Route>{' '} <
        /Routes>{' '} <
        /div>
    );
}

export default App;