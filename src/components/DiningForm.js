import React, { useState, useEffect } from 'react'


function DiningForm() {
    const [values, setValues] = useState({
        repName: "",
        buisnessName: "",
        email: ""
    });

    const handleRepName = (event) => {
        setValues({...values, repName: event.target.value})
    }

    const handleBuisnessName = (event) => {
        setValues({...values, buisnessName: event.target.value})
    }

    const handleEmail = (event) => {
        setValues({...values, email: event.target.value})
    }


    return (
        <div className='form-container'>
            <form className='register-form'>
                <div className='sucess-message'>
                    Success! Thank you for registering
                </div>
                <input
                    className='form-field'
                    value={values.repName}
                    placeholder="Your Name" 
                    onChange={handleRepName}/>  
                <input
                    className='form-field'
                    value={values.buisnessName}
                    placeholder="Buisness Name"
                    onChange={handleBuisnessName} />
                <input
                    className='form-field'
                    value={values.email}
                    placeholder="Buisness Email" 
                    onChange={handleEmail}/>    
            </form>
        </div>
    )
}

export default DiningForm
























//     const [story, setStory] = useState({
//         dogPic: '',
//         dogsAllowed: '',
//     })

//     const [dogsOk, setDogsOk] = useState({
//         message: '',
//         status: ''
//     }) 

    // useEffect(() => {
    //     fetch("https://dog.ceo/api/breeds/image/random")
    //     .then(r => r.json())
    //     .then(data => {
    //         console.log(data)
    //         setDogsOk ({
    //             dogPic: data.message,
    //             dogsAllowed: data.status
    //         })
    //     })
    // }, [])
