import React, { Component } from "react";
import FilmList from "./FilmList";
import Jumbotron from "./Jumbotron";

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <FilmList />
      </div>
    );
  }
}

export default App;
