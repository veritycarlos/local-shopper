// import './App.css';
import Home from './Home';
import Dining from './Dining';
import Grocery from './Grocery';
import Entertainment from './Entertainment';
import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import NewDining from './NewDining';
import Form from './Form'


function App() {
  return (
    <Router>
        <NavBar />
        <div className="App">
            <Switch>
                <Route exact path = "/" component={Home} />
                <Route exact path = "/dining" component={Dining} />
                <Route exact path = "/dining/new" component={Form} />
                <Route exact path = "/entertainment" component={Entertainment} />
                <Route exact path = "/grocery" component={Grocery} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;