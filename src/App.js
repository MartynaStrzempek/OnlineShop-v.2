import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout';

class App extends Component {

    constructor(props)
    {
        super(props);
        this.state =
            {
                text: "Tekst",
                number: 1,
                car:
                    {
                        year: 1999,
                        name: "BMW"
                    }
            }
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            {this.state.text}
        </p>
        <button onClick={this.changeText.bind(this)}>click me</button>
        <Layout car={this.state.car}/>
      </div>
    );
  }

  changeText()
  {
      this.setState({text: "nowy tekst"});
  }
}

export default App;
