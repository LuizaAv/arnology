import React from "react"
import "./contacts.css"

export default function Contacts(){
    return(
        <div className="contactContainer">
            <p>CONTACT US</p>
            <div className="inputContainer">
                <div className="nameSurenameContainer">
                    <input  placeholder="Your Name*" className="nameInput"/>
                    <input  placeholder="Last Name*" className="lastNameInput"/>
                </div>
                <input placeholder="Email*" className="emailInput"/>
                <input placeholder="+374     Phone Number*"  className="numberInput"/>
                <input placeholder="Company*" className="companyInput"/>
                <h2>HOW CAN WE HELP?</h2>
                <input placeholder="Your Message...*" className="messageContainer"></input>
                <label>
                    <input type="checkbox"/>
                    Yes, I want to subscribe
                </label>
                <button className="contactsSubmitButton">Submit</button>
                <span className="privacyPolicy">By clicking the button I agree with the  collection and processing of my personal data as described in the <a href="">Privacy Policy</a></span>
            </div>
        </div>
    )
}