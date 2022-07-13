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
            {diningList}
            <br/>
            <br/>
            <p>hi there</p>
        </div>
    )
}

export default Dining

    // "entertainment": [
    //   {
    //     "id": 1,
    //     "name": "Free Play",
    //     "type": "Entertainment",
    //     "alcohol": "yes",
    //     "website": "https://freeplaydenton.com/"
    //   },
    //   {
    //     "id": 2,
    //     "name": "EastSide",
    //     "type": "Entertainment",
    //     "alcohol": "yes",
    //     "website": "http://eastsidedenton.com/"
    //   },
    //   {
    //     "id": 3,
    //     "name": "OakStreet",
    //     "type": "Entertainment",
    //     "alcohol": "yes",
    //     "website": "https://oakstreetdrafthouse.com/"
    //   },
    //   {
    //     "id": 4,
    //     "name": "d20Tavern",
    //     "type": "Entertainment",
    //     "alcohol": "yes",
    //     "website": "https://d20tavern.com/"
    //   }
    // ],
    // "grocery": [
    //   {
    //     "id": 1,
    //     "name": "Naturally Grown Farms",
    //     "type": "Grocery",
    //     "alcohol": "no",
    //     "website": "https://www.naturallygrownfarms.com/"
    //   },
    //   {
    //     "id": 2,
    //     "name": "Circle N' Dairy",
    //     "type": "Grocery",
    //     "alcohol": "no",
    //     "website": "https://www.circlendairy.com/"
    //   },
    //   {
    //     "id": 3,
    //     "name": "Denton Community Market",
    //     "type": "Grocery",
    //     "alcohol": "no",
    //     "website": "https://www.dentonmarket.org/"
    //   },
    //   {
    //     "id": 4,
    //     "name": "Mashup Market",
    //     "type": "Grocery",
    //     "alcohol": "unknown",
    //     "website": "https://mashupmarketandgrocery.com/"
    //   }
    // ],
