import React from 'react'
import { Link } from 'react-router-dom'

function BuisnessLink({restaurant}) {
    return (
        <>
            <Link to={`/dining/${restaurant.id}`}>
                {restaurant.buisnessName}
            </Link>
            <br/>
        </>
       
    )
}

export default BuisnessLink
