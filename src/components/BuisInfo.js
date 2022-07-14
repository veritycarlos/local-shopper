import React from 'react'

function BuisInfo({buisInfo}) {
    const {buisnessName, website, email } = buisInfo;

    return (
        <div>
            <h1>Name of your buisness: {buisnessName} </h1>
            <h3>Email: {email} </h3>
            <h3>Website: {website} </h3>
        </div>
    )
}

export default BuisInfo;
