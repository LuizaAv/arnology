import React from "react";
import "./workpanel.css"

export default function  WorkPanel(){
    return(
        <div className="workPanelContainer">
            <h2 className="workpanelH2">OUR WORKS</h2>
            <div className="workpanelLinksContainer">
                <a style={{color: "#03989b"}}>All</a>
                <a>Social</a>
                <a>Ecommerce</a>
                <a>Travel</a>
                <a>Booking</a>
                <a>Apps</a>
                <a>Other</a>
            </div>
        </div>
    )
}