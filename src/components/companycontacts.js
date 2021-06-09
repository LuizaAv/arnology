import React from "react";
import "./companycontacts.css";
import facebook from "../pictures/facebook.png";
import linkedin from "../pictures/linkedin.png";
import twitter from "../pictures/twitter.png";
import github from "../pictures/github.png";
import instagram from "../pictures/instagram.png";
import contacts from "../pictures/contacts.png";

export default function Companycontacts(){
    return(
        <div className="companyContactMainContainer">
            <span className="phoneOrEmailSpan">Prefer to email or phone?</span>
                <br/>
            <span className="emailSpan">info@arnology.am</span>
                <br/>
            <span className="numberSpan1">+374 77065303</span>
                <br/>
            <span className="numberSpan2">+374 41960626</span>
                <br/>
            <span className="findUs">Find Us</span>
                <br/>
            <div src="imageContainer">
                <img src={facebook} className="facebookImage"/>
                <img src={linkedin} className="linkedinImage"/>
                <img src={twitter} className="twitterImage"/>
                <img src={github} className="githubImage"/>
                <img src={instagram} className="instagramImage"/>
            </div>
            <br/>
            <span className="citySpan">YEREVAN</span>
            <span className="addressLineSpan">49 Tigran Mets Avenue, 5th floor</span>
            <br/>
            <span className="addressLineSpan1">Yerevan, Armenia</span>
            <div className="addressContainer">
                <div>
                    <h2 className="firstH2">LEON</h2>
                    <span className="innerAddressLineSpan1">49 Tigran Mets Avenue, 5th floor</span>
                    <br/>
                    <span className="innerCityLineSpan1">Yerevan, Armenia</span>
                </div>
                <div>
                    <h2 className="secondH2">LA</h2>
                    <span className="innerAddressLineSpan">49 Tigran Mets Avenue, 5th floor</span>
                    <br/>
                    <span className="innerCityLineSpan">Yerevan, Armenia</span>
                </div>
            </div>
            <img src={contacts} className="messageIcon"/>
        </div>
    )
}