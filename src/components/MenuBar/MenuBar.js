import React, { Component } from "react";
import "./MenuBar.css";

export default class MenuBar extends Component {
  render() {
    return (
      <div className="menu-container">
        <div className="logo-container">
            {/* <a href="http://www.iamnitinmisra.com" > */}
              <img onClick={()=> {window.open("https://instagram.fphx1-1.fna.fbcdn.net/vp/a6bf8c3ec6e6aa016f7ff2665d511972/5DB9B40B/t51.2885-15/e35/57407399_347375709247614_2499526026345955695_n.jpg?_nc_ht=instagram.fphx1-1.fna.fbcdn.net")}} className="logo" src = "../../eclipse.jpeg"/>
            {/* </a> */}
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
