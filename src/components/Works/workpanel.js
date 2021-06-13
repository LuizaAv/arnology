import React from "react";
import "./workpanel.css"

export default function  WorkPanel(){
    return(
        <div className="workPanelContainer">
            <h2 className="workpanelH2">OUR WORKS</h2>
            <div className="workpanelLinksContainer">
                <a style={{color: "#03989b"}} href="">All</a>
                <a href="">Social</a>
                <a href="">Ecommerce</a>
                <a href="">Travel</a>
                <a href="">Booking</a>
                <a href="">Apps</a>
                <a href="">Other</a>
            </div>
        </div>
    )
}