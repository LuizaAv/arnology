import React from "react";
import "./navbar.css";

export default function Navbar(){
    return(
        <div className="navbarContainer">
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
        </div>
    )
}