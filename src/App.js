import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer';
import './App.css';

import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    }, 
    },
  
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
       <NavBar/>
       <div className={classes.wrapper}>
         <Typography variant="h4" className={classes.bigSpace} color="primary">
           Welcome to Solo - Create websites with us!
           </Typography> 
           <Typography variant="h5" className={classes.littleSpace} color="primary">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </Typography>

       </div>
       <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#9C253C", height:"125", width:"125"}}/>}  title="Secure" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{fill: "#B0916D", height:"125", width:"125"}}/>} title="Reliable" btnTitle="Show me More"/>
          <Grid icon={<TrendingUpIcon style={{fill: "#5A5959", height:"125", width:"125"}}/>}  title="Performant" btnTitle="Show me More"/>
        </div>

        <div className={`${classes.grid} ${classes.littleSpace}`}>  
          <Grid icon={<ImportExportIcon style={{fill: "#459DC4", height:"125", width:"125"}}/>}  title="Modular" btnTitle="Show me More"/>
          <Grid icon={<ComputerIcon style={{fill: "#CBD669", height:"125", width:"125"}}/>}  title="Multi-Platform" btnTitle="Show me More"/>
          <Grid icon={<HttpIcon style={{fill: "#494F9E", height:"125", width:"125"}}/>} title="Connected" btnTitle="Show me More"/>
          
        </div>
        <div className={classes.bigSpace}> 
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
