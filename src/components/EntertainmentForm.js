import React, { useState, useEffect, useCallback } from 'react'
import './Form.css'

function EntertainmentForm () {
    const [values, setValues] = useState({
        type:"",
        owner: "",
        name: "",
        email: "",
        addressline1:"",
        addressline2:"",
        phone:"",
        website: "",
        photo: "",
        bio:"",
        specialty:"",
        alcohol: "",
        dogs: "",
        patio:"",
        vegetarian:"",
        vegan:""
        
    });

    const handleChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newValue= {
            type: values.type,
            owner : values.owner,
            name : values.name,
            email : values.email,
            addressline1 : values.addressline1,
            addressline2 : values.addressline2,
            phone : values.phone,
            website : values.website,
            photo : values.photo,
            bio : values.bio,
            specialty : values.specialty,
            alcohol : values.alcohol,
            dogs: values.dogs,
            patio : values.patio,
            vegetarian : values.vegetarian,
            vegan :values.vegan
        }
        fetch("http://localhost:3001/entertainment", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newValue)
        })
        .then(r => r.json())
        .then(data => {console.log(data)})
    }

    return (
        <div className='formcontainer'>           
            <h1>Fill out this form and submit to add your local buisness to our site</h1>
                <form className='register-form' onSubmit={handleSubmit}>
                    <br/>
                    Select Your Buisness Type
                    <br/>
                    <select name="type">
                        <option selected value="empty">{null}</option>
                        <option value="dining">Dining</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="grocery">Grocery</option>
                    </select>
                    <br/>
                    <br/>

                    <label>Owner's Name</label>
                    <br/>
                    <input
                        type="text"
                        className='form-field'
                        name="owner"
                        placeholder="Enter name..." 
                        onChange={handleChange}/>
                    <br/>  
                        {/* {submitted && !values.repName ? <span>Please enter a name</span> : null} */}
                    <br/>
                    <br/>

                    <label>Buisness Name</label>
                    <br/>
                    <input
                        type="text"
                        className='form-field'
                        name="name"
                        placeholder="Enter buisness name..."
                        onChange={handleChange} />
                    <br/>
                        {/* {submitted && !values.buisnessName ? <span>Please enter a buisness name</span> : null} */}
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
                        {/* {submitted && !values.email ? <span>Please enter a email</span> : null} */}
                    <br/>
                    <br/>

                    <label>Address Line 1</label>
                    <br/>
                    <input type="text" className='form-field' name="addressline1" placeholder='Enter street number and name...' onChange={handleChange} />
                    <br/>
                    <br/>

                    <label>Address Line 2</label>
                    <br/>
                    <input type="text" className='form-field' name="addressline2" placeholder='Enter City, State Zip... ' onChange={handleChange} />
                    <br/>
                    <br/>

                    <label>Phone</label>
                    <br/>
                    <input type="text" className='form-field' name="phone" placeholder='Enter phone number...' onChange={handleChange} />
                    <br/>
                    <br/>

                    <label>Website</label>
                    <br/>
                    <input type="text" className='form-field' name="website" placeholder='Enter website...' onChange={handleChange} />
                    <br/>
                    <br/>

                    <label>Photo</label>
                    <br/>
                    <input type="text" className='form-field' name="photo" placeholder='Enter image address... ' onChange={handleChange} />
                    <br/>
                    <br/>

                    <label>About You</label>
                    <br/>
                    <input type="text" className='form-field' name="bio" placeholder='Tell us a little about your buisness...' onChange={handleChange} />
                    <br/>
                    <br/>

                    <label>Specialty</label>
                    <br/>
                    <input type="text" className='form-field' name="specialty" placeholder='Enter what your buisness specializes in ' onChange={handleChange} />
                    <br/>
                    <br/>

                    Does your buisness serve alcohol?
                    <br/>
                    <select name="alcohol">
                        <option selected value="empty">{null}</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <br/>
                    <br/>
                    Does your buisness allow non service animal dogs? 
                    <br/>
                    <select name ="dogs">
                        <option selected value="empty">{null}</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <br/>
                    <br/>
                    Does your buisness have a patio?
                    <br/>
                    <select name="patio">
                        <option selected value="empty">{null}</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <br/>
                    <br/>
                    Does your buisness serve vegetarian food?
                    <br/>
                    <select name="vegetarian">
                        <option selected value="empty">{null}</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <br/>
                    <br/>
                    Does your buisness serve vegan food?
                    <br/>
                    <select name="vegan">
                        <option selected value="empty">{null}</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <br/>
                    <br/>

                    <button
                            className='form-field'
                            type="submit">Submit</button>
                    <br/>    
                    <hr/>
                        {/* {submitted && valid ? <div className='sucess-message'>Success! Thank you for submitting your local buisness. </div> :null }  */}
                        {/*add yes no form buttons and image form and website form*/}
                </form>
        </div>
    )
}

export default EntertainmentForm