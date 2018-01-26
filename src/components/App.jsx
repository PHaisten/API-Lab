import React, { Component } from "react";
import FilmList from "./FilmList";
import Jumbotron from "./Jumbotron";
import "../App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false
    };
  }
  handleToggle(event) {
    const currentState = this.state.hasLoaded;
    this.setState({ hasLoaded: !currentState });
  }
  render() {
    if (this.state.hasLoaded === true) {
      return (
        <div>
          <Jumbotron />
          <div className="button-container">
            <button
              type="button"
              className="btn btn-primary my-auto"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="on"
              onClick={event => this.handleToggle(event.target.value)}
            >
              Load
            </button>
          </div>
          <FilmList />
        </div>
      );
    } else {
      return (
        <div>
          <Jumbotron />
          <div className="button-container">
            <button
              type="button"
              className="btn btn-primary my-auto"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="on"
              onClick={event => this.handleToggle(event.target.value)}
            >
              Load
            </button>
          </div>
        </div>
      );
    }
  }
}

export default App;
