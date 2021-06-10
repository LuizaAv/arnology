import React from "react";
import "./navbar.css";
import logo from "../pictures/arn_logo.png";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from "react";
import {useMediaQuery} from "react-responsive"
import menuIcon from "../pictures/hamburgerMenu.png"



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
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Works</a>
                        <a href="">Career</a>
                        <a href="" className="contact">Contact</a>
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
                        <img src={menuIcon} className="menu" />
                    </>
                }
        </div>
    )
}