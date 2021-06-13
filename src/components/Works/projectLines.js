import React from "react"
import "./projectlines.css"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      marginTop: "15x",
    },
  }));



export default function ProjectLines(){
    const classes = useStyles();

    return(
        <div className="grid">
            <Grid container  spacing={9} className={classes.paper}>
                <Grid item xs={3} container  spacing={11}>
                    <Card className="cardContainer">
                        <CardContent className="tipographyContainer">
                            <Typography>
                            <h6 className="typographyHeader">LIVE PENALTY</h6>
                            </Typography>
                            <Typography >
                            <p className="typographyContent">Apps, Web, Ios, Android</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} container  spacing={11}>
                    <Card className="cardContainer1">
                        <CardContent className="tipographyContainer">
                            <Typography>
                            <h6 className="typographyHeader">LIVE PENALTY</h6>
                            </Typography>
                            <Typography >
                            <p className="typographyContent">Apps, Web, Ios, Android</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} container  spacing={11}>
                    <Card className="cardContainer2">
                        <CardContent className="tipographyContainer">
                            <Typography>
                            <h6 className="typographyHeader">LIVE PENALTY</h6>
                            </Typography>
                            <Typography >
                            <p className="typographyContent">Apps, Web, Ios, Android</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={9} className={classes.paper}>
                <Grid item xs={3} spacing={11}>
                    <Card className="cardContainer3">
                        <CardContent className="tipographyContainer">
                            <Typography>
                            <h6 className="typographyHeader">LIVE PENALTY</h6>
                            </Typography>
                            <Typography >
                            <p className="typographyContent">Apps, Web, Ios, Android</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} spacing={11}>
                    <Card className="cardContainer4">
                        <CardContent className="tipographyContainer">
                            <Typography>
                            <h6 className="typographyHeader">LIVE PENALTY</h6>
                            </Typography>
                            <Typography >
                            <p className="typographyContent">Apps, Web, Ios, Android</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} spacing={11}>
                    <Card className="cardContainer5">
                        <CardContent className="tipographyContainer">
                            <Typography>
                            <h6 className="typographyHeader">LIVE PENALTY</h6>
                            </Typography>
                            <Typography >
                            <p className="typographyContent">Apps, Web, Ios, Android</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}