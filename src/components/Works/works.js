import React from "react"
import Navbar from "../navbar"
import "./works.css"

import WorkPanel from "./workpanel";
import Footer from "../footer";
import ProjectLines from "./projectLines";


export default function Works(){
    return(
        <div className="worksPageContainer">
            <Navbar/>
            <WorkPanel/>
            <div className="picturesGridContainer">
                <ProjectLines/>
                <ProjectLines/>
            </div>
            <Footer/>
        </div>
    )
}