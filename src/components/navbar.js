import React from "react";
import "./navbar.css";
import logo from "../pictures/arn_logo.png";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {useState} from "react";


export default function Navbar(){
    const [selectValue, setSelectValue] = useState("")

    const handleChange = (e) => {
        setSelectValue(e.target.value)
    }

    return(
        <div className="navbarContainer">
            <img src={logo} className="logo"/>
            <div className="pageNames">
                <a href="">About</a>
                <a href="">Services</a>
                <a href="">Works</a>
                <a href="">Career</a>
                <a href="">Contact</a>
            </div>
            <div>
                <button className="getAnEstimateButton">GET AN ESTIMATE</button>
            </div>
            <Select
                    className="selectContainer1" 
                    variant="standard"
                    disableUnderline
                    value={selectValue}
                    onChange={handleChange}
                    label="EN"
                    >
                    <MenuItem value="EN" className="selectItem">EN</MenuItem>
                    <MenuItem value="AM" className="selectItem">AM</MenuItem>
                    <MenuItem value="RU" className="selectItem">RU</MenuItem>
                </Select>
        </div>
    )
}