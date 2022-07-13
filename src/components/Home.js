import React from 'react';
import Weather from './Weather';

function Home() {
    return (
        <div>
            <h1>Local Shopper</h1>
            <hr/>
            <Weather />
            <p>This application displays local shops in Denton, Texas and the surrounding area</p>
        </div>
    )
}


export default Home
