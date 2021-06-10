import React from "react"
import logo from "../pictures/arn_logo_white.png"
import "./menu.css"
import facebook from "../pictures/facebookWhite.png";
import linkedin from "../pictures/linkedinWhite.png";
import twitter from "../pictures/twitterWhite.png";
import github from "../pictures/githubWhite.png";
import instagram from "../pictures/instagramWhite.png"
import {HiOutlineX} from 'react-icons/hi';

export default function Menu(){
      
    return(
        <div className="menuContainer">
            <div>
                <img  src={logo} className="whiteLogo"/>
                <HiOutlineX color="white" className="closingTag"/>
            </div>
            <div className="logoAndH1">
                <div className="menuitemContainer">
                    <h1 className="menuh1">ABOUT</h1>
                    <h1 className="menuh1">SERVICES</h1>
                    <h1 className="menuh1">WORKS</h1>
                    <h1 className="menuh1">CAREER</h1>
                    <h1 className="menuh1">CONTACT</h1>
                    <div>
                        <ul>
                            <li>AM</li>
                            <li>RU</li>
                            <li>HY</li>
                        </ul>
                    </div>
                    <button className="getanEstimateBtn">GET AN ESTIMATE</button>
                </div>
                <div className="menuLogoContainer">
                    <div className="iconsDiv">
                        <img src={facebook} className="icons"/>
                        <img src={linkedin} className="icons"/>
                        <img src={twitter} className="icons"/>
                        <img src={github} className="icons"/>
                        <img src={instagram} className="icons"/>
                    </div>
                </div>
            </div>
        </div>
      )
  }