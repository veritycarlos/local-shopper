import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { baseUrl } from './Globals';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
// import Dining from './Dining';
import Diner from './Diner';
import GroceryList from './localb/GroceryList';
import EntertainmentList from './localb/EntertainmentList';
import DiningList from './localb/DiningList';
import DiningForm from './DiningForm'
import EntertainmentForm from './EntertainmentForm';
import GroceryForm from './GroceryForm';



function App() {
  const [dining, setDining] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [grocery, setGrocery] = useState([]);
  const [groceryForm, setGroceryForm] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/groceryform")
    .then(resp => resp.json())
    .then(data => setGroceryForm(data))
  }, [])

  useEffect(() => {
    fetch(baseUrl + "/dining")
    .then(resp => resp.json())
    .then(data => setDining(data))
  }, [])

  useEffect(() => {
    fetch(baseUrl + "/entertainment")
    .then(resp => resp.json())
    .then(data => setEntertainment(data))
  }, [])

  useEffect(() => {
    fetch(baseUrl + "/grocery")
    .then(resp => resp.json())
    .then(data => setGrocery(data))
  }, [])


  return (
    <Router className="app">
        <NavBar />
        <div>
         <Switch>
          <Route exact path = "/" >{<Home/>}</Route>
          <Route exact path = "/dining" >{<DiningList dining ={dining}/>}</Route>
          <Route path = "/dining/:id" >{<Diner />}</Route>
          <Route exact path = "/diningform" >{<DiningForm />}</Route>
          <Route exact path = "/entertainment" >{<EntertainmentList entertainment={entertainment} />}</Route>
          <Route exact path = "/entertainmentform" >{<EntertainmentForm />}</Route>
          <Route exact path = "/groceryform" >{<GroceryForm />}</Route>
          <Route exact path = "/grocery" >{<GroceryList grocery={grocery} />}</Route>
          <Route exact path = "/about" >{<About />}</Route>
          
         </Switch>
        </div>
    </Router>
  );
}

export default App;

          // {/* <Route exact path = "/dining"  component={Dining} /> */}
          // {/* <Route exact path = "/dining/new" >{<Form />}</Route> */}

//           import React from 'react'
// import { Link } from 'react-router-dom'

// function DiningLink({restaurant}) {
//     return (
//         <>
//             <Link to={`/dining/${restaurant.id}`}>
//                 {restaurant.buisnessName}
//             </Link>
//             <br/>
//         </>
       
//     )
// }

// export default DiningLink


// import React from 'react'
// import { Link } from 'react-router-dom'

// function NewBuisness() {
//     return (
//         <div>
//                 <Link to={'/dining/new'} >
//                     <button>Click Here to Add Your Buisness!</button>
//                 </Link>
//         </div>
//     )
// }

// export default NewBuisness;