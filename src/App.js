import './App.css';
import React from "react";
import Navbar from './components/navbar/navbar';
import Contacts from './components/contacts/contacts';
import Companycontacts from './components/companycontacts/companycontacts';
import Footer from './components/footer/footer';

import Menu from "./components/menu/menu"
import  {
   BrowserRouter as Router,
   Switch,
   Route,
 } from "react-router-dom";
import ErrorPage from './components/errorpage/errorpage';
import Works from './components/Works/works';


function App() {

  return (
     <div className="mainContainer">
       <Router>
         <Switch>
            <Route path="/" exact>
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
