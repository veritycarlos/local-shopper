import React from 'react'

function BuisInfo({buisInfo}) {
    const {name, website, alcohol } = buisInfo;

    return (
        <div>
            <h1>Name of your buisness: {name} </h1>
            <h3>Offer alcohol?: {alcohol} </h3>
            <h3>Website: {website} </h3>
        </div>
    )
}

export default BuisInfo;
