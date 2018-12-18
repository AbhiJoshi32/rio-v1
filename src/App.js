import React, { Component } from 'react';
import logo from './logo.svg';
import firebase from 'firebase/app'
import './App.css';
import {BrowserRouter,Route, Link, Switch } from 'react-router-dom'
import Land from './pages/Land'
import Header from './components/Header'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Messages from './pages/Messages'
class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyDHp7UfaT5mlEf6z3L4JUinfqtb1D8Sci0",
      authDomain: "fir-6bee6.firebaseapp.com",
      databaseURL: "https://fir-6bee6.firebaseio.com",
      projectId: "fir-6bee6",
      storageBucket: "fir-6bee6.appspot.com",
      messagingSenderId: "735683177135"
    };
    var fire = firebase.initializeApp(config);
  }
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <Header />
          <Switch>        
            <Route exact path="/"  component={Land} />
            <Route path="/gallery/" component={Gallery} />
            <Route path="/contact/" component={Contact} />  
            <Route path="/messages/" component={Messages} />          
          </Switch>
          <Footer />
        </div>
      </BrowserRouter >
    );
  }
}

export default App;

