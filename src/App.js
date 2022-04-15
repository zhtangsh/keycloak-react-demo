import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Base64} from 'js-base64';


function App() {
    let token = window.localStorage.getItem("react-token");
    console.log(token);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
