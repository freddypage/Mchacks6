import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Header from '../components/headerComponent/header';
import PatientList from './components/patient-list'

class App extends Component {
  constructor(props) {
    super(props); 

    // this.state = {
    //   data: JSON.parse(sessionStorage.getItem('id')) || []
    // };
    // this.dataCallback = this.dataCallback.bind(this);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>Hello Doctor</h1>
          <PatientList></PatientList>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hello Everyone
          </a>
        </header>
      </div>
    );
  }
}

export default App;
