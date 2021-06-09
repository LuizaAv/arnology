import React from "react"
import "./contacts.css"
import logo1 from "../pictures/Flag_of_Armenia.png"

export default function Contacts(){
    return(
        <div className="contactContainer">
            <p>CONTACT US</p>
            <div className="inputContainer">
                <div className="nameSurenameContainer">
                    <div className="name">
                        <input  placeholder="Your Name*" className="nameInput"/>
                    </div>
                    <div className="lastName">
                        <input  placeholder="Last Name*" className="lastNameInput"/>
                    </div>
                </div>
                <input placeholder="Email*" className="emailInput"/>
                <input placeholder= "+374     Phone Number*" className="numberInput"/><img src ={logo1} className="logo1"/>
                <input placeholder="Company*" className="companyInput"/>
                <h2>HOW CAN WE HELP?</h2>
                <input placeholder="Your Message...*" className="messageContainer"></input>
                <label>
                    <input type="checkbox"/>
                    Yes, I want to subscribe
                </label>
                <button className="contactsSubmitButton">Send</button>
                <span className="privacyPolicy">By clicking the button I agree with the  collection and processing of my personal data as described in the <a href="">Privacy Policy</a></span>
            </div>
        </div>
    )
}