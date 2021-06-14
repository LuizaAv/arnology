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
                        <a style={{color: "#03989b"}} href="" className="aLinksList">All</a>
                        <a href="" className="aLinksList">Social</a>
                        <a href="" className="aLinksList">Ecommerce</a>
                        <a href="" className="aLinksList">Travel</a>
                        <a href="" className="aLinksList">Booking</a>
                        <a href="" className="aLinksList">Apps</a>
                        <a href="" className="aLinksList">Other</a>
                    </div>
                </Grid>
            </Grid>
        </Grid>
        </div>
    )
}