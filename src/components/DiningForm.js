import React, { useState, useEffect } from 'react'


function DiningForm() {
    const [values, setValues] = useState({
        repName: "",
        buisnessName: "",
        email: ""
    });

    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(false)

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
        if(values.repName && values.buisnessName && values.email) {
            setValid(true);
        }
        setSubmitted(true);
    }


    return (
        <div className='form-container'>
            <form className='register-form' onSubmit={handleSubmit}>
                {submitted && valid ? <div className='sucess-message'>Success! Thank you for registering</div> :null }
                <input
                    className='form-field'
                    value={values.repName}
                    placeholder="Your Name" 
                    onChange={handleRepName}/>  
                {submitted && !values.repName ? <span>Please enter a name</span> : null}
                <input
                    className='form-field'
                    value={values.buisnessName}
                    placeholder="Buisness Name"
                    onChange={handleBuisnessName} />
                {submitted && !values.buisnessName ? <span>Please enter a buisness name</span> : null}
                <input
                    className='form-field'
                    value={values.email}
                    placeholder="Buisness Email" 
                    onChange={handleEmail}/>  
                {submitted && !values.email ? <span>Please enter a email</span> : null}
                <button
                    className='form-field'
                    type="submit">Register</button>
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
