import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import logo2 from '../logo2.png'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
    bar:{
        paddingTop: "0.0001rem", //changed from 1.15rem
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: {
            flexDirection: "column"
        }
    },
    logo: {
        width: "15%",
        ['@media (max-width:780px)']: {
            display: "none"
        }
    },
    logoMobile: {
        width: "100%",
        display: "none",
        ['@media (max-width:780px)']: {
            display: "inline-block"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#4f25c8"
        },
        ['@media (max-width:780px)']: {
            paddingBottom: "1rem"
        }
    }
})


function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo2} className={classes.logo2}/> 
                <img src={logoMobile} className={classes.logoMobile}/> 
                <Typography variant="h6" className={classes.menuItem}>
                    Home
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Our Story
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Templates
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Guide 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact Us 
                </Typography>
                <CustomBtn txt="Login"/>
            </Toolbar>
    )
}

export default NavBar
