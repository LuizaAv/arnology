import React from "react"
import Navbar from "../navbar"
import "./works.css"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Footer from "../footer";

const useStyles = makeStyles( (theme) => ({
    root: {
        flexGrow: 1,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));

export default function Works(){
    const classes = useStyles()
    return(
        <div className="worksPageContainer">
            <Navbar/>
            <div className="picturesGridContainer">
            <Grid container spacing={3} >
                <Grid item xs={4}>
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
                <Grid item xs={4}>
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
                <Grid item xs={4}>
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

            <Grid container spacing={3} >
                <Grid item xs={4}>
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
                <Grid item xs={4}>
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
                <Grid item xs={4}>
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
            <Grid container spacing={3} >
                <Grid item xs={4}>
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
                <Grid item xs={4}>
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
                <Grid item xs={4}>
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

            <Grid container spacing={3} >
                <Grid item xs={4}>
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
                <Grid item xs={4}>
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
                <Grid item xs={4}>
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
            <Footer/>
        </div>
    )
}