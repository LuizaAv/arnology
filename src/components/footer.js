import React from "react";
import "./footer.css";
import logo from "../pictures/arn_logo_white.png";
import map from "../pictures/world_map.png";
import facebook from "../pictures/facebookWhite.png";
import linkedin from "../pictures/linkedinWhite.png";
import twitter from "../pictures/twitterWhite.png";
import github from "../pictures/githubWhite.png";
import instagram from "../pictures/instagramWhite.png"

export default function Footer(){
    
    return(
        <div className="footerContainer">
            <div class="footerLogo"><img src={logo}/></div>
            <div className="footerInfo">
                <h4 className="footerHeaders1">Contact</h4>
                <h4 className="footerHeaders2">Company</h4>
                <h4 className="footerHeaders3">Services</h4>
            </div>
            <div className="coloumnContainer">
                <div className="firstColoumn">
                    <p className="pTag">arnologyllc@gmail.com</p>
                    <p className="pTag">+374 90000000</p>
                    <p className="pTag">+374 90000000</p>
                </div>
                <div className="secondColoumn">
                    <p className="pTag">Works</p>
                    <p className="pTag">Career</p>
                    <p className="pTag">Team</p>
                    <p className="pTag">Get Estimate</p>
                    <p className="pTag">Privacy Policy</p>
                    <p className="pTag">FAQ</p>
                </div>
                <div className="thirdColoumn">
                    <p className="pTag">Back End Web Development</p>
                    <p className="pTag">API Development Services</p>
                    <p className="pTag">DevOps Consulting Services</p>
                    <p className="pTag">Django Development</p>
                    <p className="pTag">Front End Web Development</p>
                    <p className="pTag">React Development</p>
                    <p className="pTag">Angular Web Development</p>
                    <p className="pTag">Mobile Development</p>
                    <p className="pTag">Python Development</p>
                    <p className="pTag">Product Design</p>
                </div>
                <div className="forthColoumn">
                    <p className="pTag">User Interface Design</p>
                    <p className="pTag">UX Design Services</p>
                    <p className="pTag">Software Product Development</p>
                    <p className="pTag">Data Warehouse Consulting</p>
                    <p className="pTag">Case Studies</p>
                    <p className="pTag">DoveMed</p>
                    <p className="pTag">Best Egg</p>
                    <p className="pTag">PetDialog</p>
                    <p className="pTag">FormForce</p>
                    <p className="pTag">CloudVelox</p>
                </div>
                <img src={map} className="mapPic"/>
            </div>
            <hr className="footerHr"/>
            <div className="lastLayer">
                <div className="copyRightPart">
                    <span className="copyRightSpan">Copyright. 2021</span>
                </div>
                <div className="footerLogos">
                    <img src={facebook}/>
                    <img src={linkedin}/>
                    <img src={twitter}/>
                    <img src={github}/>
                    <img src={instagram}/>
                </div>
            </div>
        </div>
    )
}