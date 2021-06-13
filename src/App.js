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
import ErrorPage from './components/errorpage';
import Works from './components/Works/works';


function App() {


  return (
     <div className="mainContainer">
       <Router>
         <Switch>
            <Route path="/contact" exact>
               <Navbar/>
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
            <Route path="/errorpage">
               <ErrorPage />
            </Route>
            <Route path="/works">
               <Works/>
            </Route>
         </Switch>
       </Router>
     </div>
  );
}

export default App;
