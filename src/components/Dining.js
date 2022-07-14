import React, {useState, useEffect} from 'react'
import NewBuisness from './NewBuisness'
import BuisnessLink from './BuisnessLink';

function Dining() {
    const [dining, setDining] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/dining")
        .then(res => res.json())
        .then(data => {
            setDining(data)
        })
    }, [])

    const diningList = dining.map(d => <BuisnessLink restaurant={d} />)

    return (
        <div>
            <h1>Eating Out!</h1>
            <hr/>
            {diningList}
            <br/>
            <br/>
            <NewBuisness />
        </div>
    )
}

export default Dining