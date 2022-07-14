import React, { useState, useEffect } from 'react'

const MyContext = React.createContext()

const MyProvider = (props) => {
    const [dining, setDining] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/dining")
        .then(res => res.json())
        .then(data => {
            setDining(data)
        })
    }, [])


    return (<MyContext.Provider value={{
        dining: dining
        }}>
            {props.children}
        </MyContext.Provider>
    )
}


const MyConsumer = MyContext.Consumer

export { MyProvider, MyConsumer }