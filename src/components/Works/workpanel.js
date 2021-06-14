import React from "react";
import "./workpanel.css";


import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function  WorkPanel(){
    return(
        <div className="workPanelContainer">
            <Grid >
                <h2 className="headerOurWorks">OUR WORKS</h2>
            </Grid>
        <Grid container  spacing={3} className="mainContainerGrid">
            <Grid item xs={12} sm={6} lg={4}>
                <Grid>
                    <div >
                        <a style={{color: "#03989b"}} href="">All</a>
                        <a href="">Social</a>
                        <a href="">Ecommerce</a>
                        <a href="">Travel</a>
                        <a href="">Booking</a>
                        <a href="">Apps</a>
                        <a href="">Other</a>
                    </div>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )
}