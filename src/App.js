import './App.css';
import React from "react";
import Navbar from './components/navbar';
import Contacts from './components/contacts';
import Companycontacts from './components/companycontacts';


function App() {

  return (
     <div className="mainContainer">
       <Navbar/>
       <div className="contactManager">
       <Contacts/>
       <Companycontacts/>
       </div>
     </div>
  );
}

export default App;
