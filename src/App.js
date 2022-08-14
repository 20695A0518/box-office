import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
    return ( <
        Routes >
        <
        Route exact path = "/" > { ' ' }
        This home page { ' ' } <
        /Route>{' '} <
        Route path = "/started" > started the pages < /Route>{' '} <
        Route > this 404 pages < /Route> <
        /Routes>
    );
}

export default App;