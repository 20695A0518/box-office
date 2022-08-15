/* eslint-disable no-console */
import React, { useState } from 'react';
import MainPageLayout from '../Components/MainPageLayout';

function Home() {
    const [input, setInput] = useState('');
    const onSearch = () => {
        // https://api.tvmaze.com/search/shows?q=men
        fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
            .then(r => r.json())
            .then(result => {
                // eslint-disable-next-line
                console.log(result);
            });
    };
    const onInputChange = ev => {
        setInput(ev.target.value);
    };
    const onKeyDown = ev => {
        if (ev.keyCode === 13) {
            onSearch();
        }
    };

    return ( <
        MainPageLayout >
        <
        input type = "text"
        onChange = { onInputChange }
        onKeyDown = { onKeyDown }
        value = { input }
        />{' '} <
        button type = "button"
        onClick = { onSearch } >
        search { ' ' } <
        /button>{' '} <
        /MainPageLayout>
    );
}

export default Home;