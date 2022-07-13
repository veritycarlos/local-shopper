import React, {useState, useEffect} from 'react'
import NewDining from './NewDining';
import AddBuisForm from './NewDining'

function Dining() {
    const [dining, setDining] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/dining")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDining(data)
        })
    }, [])

    const diningList = dining.map(dining => <li>{dining.name}</li>)

    return (
        <div>
            <h1>Eating Out!</h1>
            <hr/>
            {diningList}
            <br/>
            <br/>
            <NewDining />
        </div>
    )
}

export default Dining