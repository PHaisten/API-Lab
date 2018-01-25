import React, { Component } from "react";
import image from "../ghibli.jpg";

export default class Card extends Component {
  render() {
    let filmList = this.props.filmList.map((film, index) => {
      return (
        <div
          className="card col-md-5 mx-auto my-2 p-0 justify-content-center"
          key={index}
        >
          <img className="card-img-top w-100" src={image} alt="Card cap" />
          <div className="card-block">
            <h4 className="card-title">{film.title}</h4>
            <p className="card-text">{film.description}</p>
            <p className="card-text">{film.director}</p>
          </div>
        </div>
      );
    });
    return <div className="row ">{filmList}</div>;
  }
}
