import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { MyProvider } from './components/MyContext'
// import "./index.css";

ReactDOM.render(
    <MyProvider>
        <App />
    </MyProvider>, 
    document.getElementById("root")
);
