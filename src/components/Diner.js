import React, {useState, useEffect} from 'react'

function Diner(props) {
    const dining = dining
    const [diner, setDiner] = useState({
        buisnessName: "",
        bio: "",
        ownerOrManager: "",
        email: ""
    })

    useEffect(() => {
        console.log(dining)
        fetch(`http://localhost:3001/dining/${dining.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            setDiner(data)
        })
    }, [])

    return (
        <div>
            <h1>{diner.buisnessName}</h1>

        </div>
    )
}

export default Diner;


