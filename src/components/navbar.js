import React from "react";
import "./navbar.css";
import logo from "../pictures/arn_logo.png"

export default function Navbar(){
    return(
        <div className="navbarContainer">
            <img src={logo} className="logo"/>
            <div className="pageNames">
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Works</a>
                <a href="">Career</a>
                <a href="">Contact</a>
            </div>
            <div>
                <button className="getAnEstimateButton">GET AN ESTIMATE</button>
            </div>
            <select>
                <option>AM</option>
                <option>EN</option>
                <option>RU</option>
            </select>
        </div>
    )
}