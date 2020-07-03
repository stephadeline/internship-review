import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabletop from "tabletop";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1PYoOZN24pnNVfJzWzzxKjJ1AwRtRuMJO6_7m0aSTtuk",
      callback: googleData => {
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Review your internship</h1>
        </header>
        <div id="employee-details">
          {data.map(obj => {
            return (
              <div key={obj.date_submitted}>
                <p>{obj.company}</p>
                <p>{obj.city}</p>
                <p>{obj.q3}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
