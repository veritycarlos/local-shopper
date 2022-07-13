import React, { useState, useEffect } from 'react'


function DiningForm() {
    const [values, setValues] = useState({
        repName: "",
        buisnessName: "",
        email: ""
    });

    const [submitted, setSubmitted] = useState(false)

    const handleRepName = (event) => {
        setValues({...values, repName: event.target.value})
    }

    const handleBuisnessName = (event) => {
        setValues({...values, buisnessName: event.target.value})
    }

    const handleEmail = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }


    return (
        <div className='form-container'>
            <form className='register-form' onSubmit={handleSubmit}>
                {submitted ? <div className='sucess-message'>Success! Thank you for registering</div> :null }
                <input
                    className='form-field'
                    value={values.repName}
                    placeholder="Your Name" 
                    onChange={handleRepName}/>  
                <span>Please enter a name</span>
                <input
                    className='form-field'
                    value={values.buisnessName}
                    placeholder="Buisness Name"
                    onChange={handleBuisnessName} />
                <span>Please enter a buisness name</span>
                <input
                    className='form-field'
                    value={values.email}
                    placeholder="Buisness Email" 
                    onChange={handleEmail}/>  
                <span>Please enter a email</span>  
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
