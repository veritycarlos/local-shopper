import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
// import Dining from './Dining';
import Restaurant from './Restaurant';
import Grocery from './Grocery';
import About from './About';
import Entertainment from './Entertainment';
import NavBar from './NavBar';
import { baseUrl } from './Globals';
import Form from './Form'
import DiningList from './localb/DiningList';

function App() {
  const [diningList, setDiningList] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/dininglist")
    .then(resp => resp.json())
    .then(data => setDiningList(data))
  }, [])

  return (
    <Router className="app">
        <NavBar />
        <div>
         <Switch>
         
          <Route exact path = "/" >{<Home/>}</Route>
          <Route exact path = "/dininglist" >{<DiningList address="db.json.address"/>}</Route>
          {/* <Route exact path = "/dining"  component={Dining} /> */}
          <Route exact path = "/dining/new" >{<Form />}</Route>
          <Route exact path = "/entertainment" >{<Entertainment />}</Route>
          <Route exact path = "/grocery" >{<Grocery />}</Route>
          <Route exact path = "/about" >{<About />}</Route>
          <Route path="/dining/:id" >{<Restaurant />}</Route>
          </Switch>
        </div>
     
    </Router>
  );
}

export default App;