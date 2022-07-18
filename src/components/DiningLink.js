import React from 'react'
import { Link } from 'react-router-dom'

function DiningLink({restaurant}) {
    return (
        <>
            <Link to={`/dining/${restaurant.id}`}>
                {restaurant.buisnessName}
            </Link>
            <br/>
        </>
       
    )
}

export default DiningLink
