import React, { Component } from "react";
import logo from "./logo.svg";
import jkLogo from "./images/titleGraphicWithLogoOPTIMIZED.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageURL: '',
    }
  }

  componentDidMount = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')    
    .then(response => {
      this.setState({ imageURL: response.data.message})      
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { imageURL } = this.state;
    return (
      <div className="App">
        <header className="App-header">          
          <img src={logo} className="App-logo" alt="logo" />
          <img src={imageURL} alt="Random Dog" />
        </header>
        <main className="App-main">
          <img src={jkLogo} alt="jkLogo" />
        </main>
      </div>
    );
  }
}

export default App;
