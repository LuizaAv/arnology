import React from "react"
import Navbar from "../navbar"
import "./works.css"

import WorkPanel from "./workpanel";
import Footer from "../footer";
import ProjectLines from "./projectLines";
import {useMediaQuery} from "react-responsive";


export default function Works(){

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const isDesktopOrLaptop  = useMediaQuery({ query: '(min-width: 1025px)' })

    return(
        <div className="worksPageContainer">
            {
                isDesktopOrLaptop &&
                    <>
                        <Navbar />
                        <WorkPanel />
                        <div className="picturesGridContainer">
                            <ProjectLines/>
                            <ProjectLines/>
                        </div>
                        <Footer/> 
                    </>
            }
            {
                isTabletOrMobile &&
                    <>
                        <Navbar />
                        <WorkPanel />
                        <div className="picturesGridContainer1">
                            <ProjectLines/>
                            <ProjectLines/>
                        </div>
                        <Footer/>
                    </>
            }
        </div>
    )
}