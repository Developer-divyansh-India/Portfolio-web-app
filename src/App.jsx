import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Profile from './profile.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import './App.css';
// Import the functions you need from the SDKs you need


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="About" {...a11yProps(1)} />
            <Tab label="Contact" {...a11yProps(2)} />
            {/* <Tab label="Projects" {...a11yProps(3)} /> */}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Typography>
            <center className='Home-text'>
              <br /><br /><br /><br /><br />
              Hi My name is Divyansh, <br />
              I am a front end developer <br /><br />
              <center><Button variant="contained" href='https://www.fiverr.com/divyansh_maurya?up_rollout=true'>Hire me</Button></center>

            </center>
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <b>
            <center className='about-header'>About</center><br /><br /><br />
          </b>
          <center><img src={Profile} alt="profile photo of mine" className='img-fluid' /></center>
          <br /><br /><br />
          <div id='details'>

            <center>
              <b>Name</b>: Divyansh Maurya <br />
              <b>Age</b>: 14 <br />
              <b>Date of birth</b>: 8 July 2009 <br />
            </center><br /><br /><br />
            <center><strong><h1>Experience</h1></strong></center>

          </div>
          <div id='exp-1'>

            <div className="header-text">
              <center><strong>React web app development</strong></center> <br />
            </div>
            <center>
              <p>
                I have 5 years of react web app development, I can build best, responsive <br />
                web applications for you web applications will be fast and will be having minimized <br />
                website reload, quick switch tabs and many more which will enhance user experience on the web, <br />
                I use react to build all this which is popular javascript library which provides many great features,  <br />
                there is a much difference between webpage and webapp.
              </p>
            </center>
            <br /><br /><br />
          </div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What is UI ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Ui refers to user interface which means that how user is interacting with your apps interface
                it plays a important role as the good and responsive ui is the good user experience is which means
                that if the ui is good then user will like it and if not user will dislike it.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br /><br /><br /><br /><br />


        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <br /><br /><br />
          <center><strong><h1>Contact Me</h1></strong></center><br /><br /><br /> <br />
          <center>
            <Box>
              <div style={{ border: '1px solid black', width: "300px", height: "200px", borderRadius: "5px", fontSize: "20px", boxShadow: "0px 8px 8px 3px grey" }}>
                <center>
                  <br /><br /><br />
                  Contact me via <a href="mailto:divyanshm510@gmail.com">Email</a>
                </center>
              </div>
              <br /><br /><br />
              <div style={{ border: '1px solid black', width: "300px", height: "200px", borderRadius: "5px", fontSize: "20px", boxShadow: "0px 8px 8px 3px grey" }}>
                <br /><br /><br />
                Contact me via <a href="tel:8924883099">phone</a>
              </div>
              <br /><br /><br />
              <div style={{ border: '1px solid black', width: "300px", height: "200px", borderRadius: "5px", fontSize: "20px", boxShadow: "0px 8px 8px 3px grey" }}>
                <br /><br /><br />
                Contact me via <a href="https://www.fiverr.com/divyansh_maurya?up_rollout=true" target='_blank'>Fiverr.com</a>
              </div>
            </Box>
            <br /><br /><br /><br />
            <Box>
              <span className='text-break fs-1'>Messege me via email: <br /><br /></span>
              <form action="mailto:divyanshm510@gmail.com">
                <TextField id="standard-basic" label="Name" variant="standard" name='Name' style={{ width: "500px" }} /><br /><br />
                <TextField
                  id="standard-multiline-static"
                  label="Message"
                  multiline
                  rows={10}
                  variant="standard"
                  name='Message'
                  style={{ width: "500px" }}
                />
                <br /><br /><br />
                <Button variant='contained' type='submit'><SendIcon /> &nbsp; Send</Button>
              </form>

            </Box>
          </center>
          <br /><br /><br /><br /><br />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Projects
        </CustomTabPanel>
      </Box>
    </div>
  );
}
