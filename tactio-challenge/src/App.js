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
          <h1>Hello Doctor</h1>
          <PatientList></PatientList>
            Hello Everyone
        </header>
      </div>
    );
  }
}

export default App;
