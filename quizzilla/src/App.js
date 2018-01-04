import React, { Component } from 'react';
import Navbar from './components/Homepage/Navbar';
import Home from './components/Homepage/Home';
import quizilla from './components/img/quizzilla.png';
import './App.css';


var NavLinks = [
  {
    title:'Home',
    href:'#'
  },
  {
    title:'About',
    href:'#'
  },
  {
    title : 'Login/SignUp',
    href:'#'
  },
  {
    title: 'Contact Us',
    href:'#'
  }
  ];
  

class App extends Component {
  render() {
    return (
      <div className="App">
	   <header className="App-header">
	    <Navbar navData={NavLinks} />
		 <h1 className="App-title">Welcome to React</h1>
		   <img src={quizzilla} className="App-logo" alt="logo" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		  </header>
	  <div className="jumbotron">
      <Home />
	  </div>
      </div>
    );
  }
}

export default App;
