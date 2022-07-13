// import './App.css';
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
        <div className="App">
            <Home />
        </div>
    </Router>
  );
}

export default App;