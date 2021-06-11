import React from "react"
import "./errorpage.css"

import Navbar from "./navbar"
import errorpicture from "../pictures/error_404.png"
import  {Route,Link} from "react-router-dom";


export default function ErrorPage(){
    return (
        <div>
            <Navbar/>
            <div className="error404Container">
                <div className="errorPic">
                    <img src={errorpicture} />
                </div>
                <div >
                    <h2 className="textContainer404">Sorry! The Page Not Found</h2>
                    <p className="p404">The link you followed probably broken, or the page has been removed.</p>
                </div>
                <Link to="/">
                    <button className="button404">
                        BACK TO HOMEPAGE
                    </button>
                </Link>
                <Route 
                path="/"
                />
            </div>
        </div>
    )
}