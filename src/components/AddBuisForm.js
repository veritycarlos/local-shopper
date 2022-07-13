import React from 'react'
import { Link } from 'react-router-dom'

function AddBuisForm() {
    return (
        <div>
            <Link to={'/dining/new'} >
                <button>Click Here to Add Your Buisness!</button>
            </Link>
        </div>
    )
}

export default AddBuisForm;

// 