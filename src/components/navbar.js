import React from "react";
import "./navbar.css";
import logo from "../pictures/arn_logo.png";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from "react";
import {useMediaQuery} from "react-responsive"
import {BsList} from "react-icons/bs";


import  {Route,Link} from "react-router-dom";


import Menu from "./menu";
import About from "./about";
import Services from "./services";
import Works from "./works";
import Career from "./Career"


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    selectEmpty: {
      marginTop: theme.spacing(4),
    },
  }));


export default function Navbar(){
    const [selectValue, setSelectValue] = useState("")

    const handleChange = (e) => {
        setSelectValue(e.target.value)
    }
    
    
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const isDesktopOrLaptop  = useMediaQuery({ query: '(min-width: 1025px)' })


    return(
        <div className="navbarContainer">
            {
                isDesktopOrLaptop && <>
                    <img src={logo} className="logo"/>
                    <div className="pageNames">
                        <Link to="/about" className="navLinks">About</Link>
                        <Link to="/services" className="navLinks">Services</Link>
                        <Link to="/works" className="navLinks">Works</Link>
                        <Link to="/career" className="navLinks">Career</Link>
                        <Link to="/" className="contact" exact>Contact</Link>
                        <Route
                            path='/about'
                            render={() => <About/>}
                        />
                        <Route
                            path='/services'
                            render={() => <Services />}
                        />
                        <Route
                            path='/works'
                            render={() => <Works/>}
                        />
                        <Route
                            path='/career'
                            render={() => <Career/>}
                        />
                    </div>
                    <div>
                        <button className="getAnEstimateButton">GET AN ESTIMATE</button>
                    </div>
         
                <Select
                    className="selectContainer1" 
                    labelId="label-demo"
                    disableUnderline
                    onChange={handleChange}
                    defaultValue="EN"
                    >
                    <MenuItem value="EN" className="selectItem">EN</MenuItem>
                    <MenuItem value="HY" className="selectItem">AM</MenuItem>
                    <MenuItem value="RU" className="selectItem">RU</MenuItem>
                </Select>
                </>
                }

                {
                    isTabletOrMobile && <>
                        <img src={logo} className="logo"/>
                        <Link  to="/menu" className="menuLink" >
                            <BsList className="menu"/>
                        </Link>
                        <Route
                            path='/menu'
                            render={() => <Menu/>}
                        />
                    </>
                }
        </div>
    )
}