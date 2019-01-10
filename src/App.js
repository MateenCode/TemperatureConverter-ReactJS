import React, { Component } from "react";
import "./App.css";
import { FaEquals } from "react-icons/fa";

class App extends Component {
  state = {
    farenheit:"",
    celsius:""
  }

  handleChange = event =>{
    this.setState{
      
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Temperature Unit Converter</h1>
          <hr />

          <div className="box">
            <div>
              <input />
              <br />
              <button>Farenheit</button>
            </div>
            <FaEquals />
            <div>
              <input />
              <br />
              <button>Celsius</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
