import React, {useState, useEffect} from 'react'

function Dining() {
    const [dining, setDining] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/dining")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setDining(data)
        })
    }, [])

    const diningList = dining.map(d => <li>{d.name}</li>)

    return (
        <div>
            <h1>Eating Out!</h1>
            <hr/>
        </div>
    )
}

export default Dining
