import React, { Component } from "react";
import "./MenuBar.css";

export default class MenuBar extends Component {
  render() {
    return (
      <div className="menu-container">
        <div className="logo-container">
            <img className="logo" src = "../../eclipse.jpeg"/>
        </div>
        <div className="navigation-container">
          <ul className="navLinks">
            <li>Home</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  }
}
