import './App.css';
import React from "react";
import Navbar from './components/navbar';
import Contacts from './components/contacts';
import Companycontacts from './components/companycontacts';
import Footer from './components/footer';
import {useState} from "react"

import Menu from "./components/menu"
import  {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";


function App() {


  return (
     <div className="mainContainer">
       <Router>
         <Navbar/>
         <Switch>
            <Route path="/" >
               <div className="contactManager">
               <div className="contactsContainer"><Contacts/></div>
               <div className="companyContactsContainer">
                  <Companycontacts/>
               </div>
               </div>
               <div className="footerAppContainer">
                  <Footer/>
               </div>
            </Route>
            <Route path="/menu">
               <Menu />
            </Route>
         </Switch>
       </Router>
     </div>
  );
}

export default App;
