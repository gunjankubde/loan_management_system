import React from "react";
import logo from '/Users/gkubde/loanManagementApp/loan_management_system/src/images/bitsLogo.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import './login.css';

export default function BasicTextFields() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/journey');
  };

  const handleLoginClick = () => {
    navigate('/journey'); 
  };

  return (
    <div>
      <div className='slds-grid slds-grid--frame slds-theme--default'>
        <div className="slds-col slds-grid_vertical slds-align--absolute-center slds-p-around--large slds-theme--default slds-size--1-of-3">
          <div className='slds-col slds-grid slds-grid--vertical-align-center'>
            <div className='slds-col slds-p-around--small'>
              <img src={logo} alt="bank logo" className='slds-icon_large'></img>
            </div>
            <div className='slds-col slds-text-heading_large slds-p-around--small'>BITS Pilani Bank</div>
          </div>
          <div className='slds-col slds-p-around--small'>
            <TextField id="firstName" label="First Name" variant="outlined" required />
          </div>
          <div className='slds-col slds-p-around--small'>
            <TextField id="lastName" label="Last Name" variant="outlined" required />
          </div>
          <div className='slds-col slds-p-around--small'>
            <TextField id="email" label="Email" variant="outlined" required />
          </div>
          <div className='slds-col slds-p-around--small'>
            <TextField id="phoneMob" label="Phone Number" variant="outlined" required />
          </div>
          <div className='slds-col slds-p-around--small'>
            <Button variant="contained" onClick={handleSignUpClick}>
              Sign Up
            </Button>
          </div>
          <div className='slds-col slds-p-around--small'>
            <Button onClick={handleLoginClick}>
              Login Instead
            </Button>
          </div>
        </div>
        <div className='slds-col slds-size--2-of-3 slds-border_left loginBackground'></div>
      </div>
    </div>
  );
}