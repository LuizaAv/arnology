import './App.css';
import React from "react";
import Navbar from './components/navbar';
import Contacts from './components/contacts';
import Companycontacts from './components/companycontacts';
import Footer from './components/footer';



function App() {

  return (
     <div className="mainContainer">
       <Navbar/>
       <div className="contactManager">
          <div className="contactsContainer"><Contacts/></div>
          <div className="companyContactsContainer"><Companycontacts/></div>
       </div>
      <div className="footerAppContainer"><Footer/></div>
     </div>
  );
}

export default App;
