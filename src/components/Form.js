import React, { useState } from 'react'

function Form(props) {

    const [values, setValues] = useState({
        ownerOrManager: "",
        buisnessName: "",
        email: "",
        alcohol: "",
        dogs: "",
        website: "",
        photo: ""
    });

    const [submitted, setSubmitted] = useState(false)
    const [valid, setValid] = useState(false)

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!!values) {
            setValid(true);
        }
        setSubmitted(true);
        const newDiningBuisness = {
            buisnessName: values.buisnessName,
            ownerOrManager: values.ownerOrManager,
            email: values.email
        }
        fetch("http://localhost:3001/dining", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDiningBuisness)
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            props.history.push('/dining')
        })
    }

    return (
        <div className='form-container'>           
            <h1>Fill out this form and submit to add your local buisness to our site!</h1>
            <form className='register-form' onSubmit={handleSubmit}>
                <br/>
                {/* Select Your Buisness Type
                <br/>
                <select>
                    <option selected value="empty">{null}</option>
                    <option value="dining">Dining</option>
                    <option value="shopping">Shopping</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="grocery">Grocery</option>
                </select> */}
                <br/>
                <br/>

                <label>Owner or Manager Name</label>
                <br/>
                <input
                    type="text"
                    className='form-field'
                    name="repName"
                    placeholder="Enter name..." 
                    onChange={handleChange}/>
                <br/>  
                {submitted && !values.repName ? <span>Please enter a name</span> : null}
                <br/>
                <br/>

                <label>Buisness Name</label>
                <br/>
                <input
                    type="text"
                    className='form-field'
                    name="buisnessName"
                    placeholder="Enter buisness name..."
                    onChange={handleChange} />
                <br/>
                {submitted && !values.buisnessName ? <span>Please enter a buisness name</span> : null}
                <br/>
                <br/>

                <label>Buisness Email</label>
                <br/>
                <input
                    type="text"
                    className='form-field'
                    name="email"
                    placeholder="Enter buisness email..." 
                    onChange={handleChange}/>
                <br/>  
                {submitted && !values.email ? <span>Please enter a email</span> : null}
                <br/>
                <br/>

                <button
                    className='form-field'
                    type="submit">Submit</button>
                <br/>    
                <hr/>
                {submitted && valid ? <div className='sucess-message'>Success! Thank you for submitting your local buisness. </div> :null } 
                {/*add yes no form buttons and image form and website form*/}
            </form>
        </div>
    )
}

export default Form