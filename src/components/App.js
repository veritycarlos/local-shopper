// import './App.css';
import Home from './Home';
import Dining from './Dining';
import Grocery from './Grocery';
import Entertainment from './Entertainment';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route exact path = "/" component={Home} />
                <Route exact path = "/dining" component={Dining} />
                <Route exact path = "/" component={Home} />
                <Route exact path = "/" component={Home} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;