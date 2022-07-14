import React, { useState, useEffect } from 'react'

function Restaurant(props) {
    const [restaurant, setRestaurant] = useState({
        buisnessName: "",
        ownerOrManager: "",
        email: ""
    })

    useEffect(() =>{
        
        fetch(`http://localhost:3001/dining/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRestaurant(data)
        })
    }, [])

    return (
        <div>
            <h2>{restaurant.buisnessName}</h2>
            <h5>Owner's Name: {restaurant.ownerOrManager}</h5>
            <h5>Restaurant email: {restaurant.email}</h5>
            <hr/>
        </div>
    )
}

export default Restaurant
