import React from 'react'
import { Link } from 'react-router-dom'
// import Form from './Form';


function NewBuisness() {
    return (
        <div>

                <Link to={'/dining/new'} >
                    <button>Click Here to Add Your Buisness!</button>
                </Link>

        </div>
    )
}

export default NewBuisness;

//             <Switch>
{/* <Link to={'/dining/new'} >
<button>Click Here to Add Your Buisness!</button>
</Link>
<Form />
</Switch> */}