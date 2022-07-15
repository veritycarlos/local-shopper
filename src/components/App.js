// import './App.css';
import Home from './Home';
import Dining from './Dining';
import Restaurant from './Restaurant';
import Grocery from './Grocery';
import Entertainment from './Entertainment';
import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './Form'


function App() {
  return (
    <Router>
        <NavBar />
        <div className="wrapper">
            <Switch>
                <Route exact path = "/" component={Home} />
                <Route exact path = "/dining" component={Dining} />
                <Route exact path = "/dining/new" component={Form} />
                <Route exact path = "/entertainment" component={Entertainment} />
                <Route exact path = "/grocery" component={Grocery} />
                <Route path="/dining/:id" component={Restaurant} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;