import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className="AllBooks"> All Books {getAllBooks} </button>
        <img className='images' src={source} style={style} />
      </div>
    );
  }
}

$(document).ready(function() {
  $('AllBooks').on('click', 'button', function() {
    $.ajax('/books' , {
      success: function(response) {
        $(.images).html(response).slidedown();
      }
    });
  });
})






export default App;
