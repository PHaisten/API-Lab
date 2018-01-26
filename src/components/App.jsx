import React, { Component } from "react";
import FilmList from "./FilmList";
import Jumbotron from "./Jumbotron";
import PeopleList from "./PeopleList";
import "../App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false,
      isFilmsLoaded: false,
      isPeopleLoaded: false
    };
  }
  handleTogglePeople(event) {
    const currentStatePeople = this.state.isPeopleLoaded;
    this.setState({ isPeopleLoaded: !currentStatePeople });
    this.setState({ isFilmsLoaded: false });
  }
  handleToggleFilms(event) {
    const currentStateFilms = this.state.isFilmsLoaded;
    this.setState({ isFilmsLoaded: !currentStateFilms });
    this.setState({ isPeopleLoaded: false });
  }

  render() {
    if (this.state.isFilmsLoaded === true) {
      return (
        <div>
          <Jumbotron />
          <div className="button-container">
            <button
              type="button"
              className="btn btn-primary my-auto"
              id="film-button"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="on"
              onClick={event => this.handleToggleFilms(event.target.value)}
            >
              Load Films
            </button>
            <button
              type="button"
              className="btn btn-primary my-auto"
              id="people-button"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="on"
              onClick={event => this.handleTogglePeople(event.target.value)}
            >
              Load People
            </button>
          </div>
          <FilmList />
        </div>
      );
    } else if (this.state.isPeopleLoaded === true) {
      return (
        <div>
          <Jumbotron />
          <div className="button-container">
            <button
              type="button"
              className="btn btn-primary my-auto"
              id="film-button"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="on"
              onClick={event => this.handleToggleFilms(event.target.value)}
            >
              Load Films
            </button>
            <button
              type="button"
              className="btn btn-primary my-auto"
              id="people-button"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="on"
              onClick={event => this.handleTogglePeople(event.target.value)}
            >
              Load People
            </button>
          </div>
          <PeopleList />
        </div>
      );
    } else if (this.state.hasLoaded === false) {
      return (
        <div>
          <Jumbotron />
          <div className="button-container">
            <button
              type="button"
              className="btn btn-primary my-auto"
              id="film-button"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="on"
              onClick={event => this.handleToggleFilms(event.target.value)}
            >
              Load Films
            </button>
            <button
              type="button"
              className="btn btn-primary my-auto"
              id="people-button"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="on"
              onClick={event => this.handleTogglePeople(event.target.value)}
            >
              Load People
            </button>
          </div>
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
              id="film-button"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="on"
              onClick={event => this.handleToggleFilms(event.target.value)}
            >
              Load Films
            </button>
            <button
              type="button"
              className="btn btn-primary my-auto"
              id="people-button"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="on"
              onClick={event => this.handleTogglePeople(event.target.value)}
            >
              Load People
            </button>
          </div>
        </div>
      );
    }
  }
}

export default App;
