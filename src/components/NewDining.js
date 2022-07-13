import React from 'react'
import { Link, Switch } from 'react-router-dom'
import DiningForm from './DiningForm';

function NewDining() {
    return (
        <div>
        
            <Link to={'/dining/new'} >
                <button>Click Here to Add Your Buisness!</button>
            </Link>
            <DiningForm />
        
        </div>
    )
}

export default NewDining;

// 