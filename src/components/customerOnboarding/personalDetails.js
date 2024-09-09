import React from "react";
import logo from '/Users/gkubde/loanManagementApp/loan_management_system/src/images/bitsLogo.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import { DatePicker } from "@salesforce/design-system-react";


export default function BasicTextFields() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/journey');
    };

    const handleLoginClick = () => {
        navigate('/journey');
    };

    return (
        <div className="slds-p-vertical--x-large">
            <div className="slds-col slds-grid_vertical slds-align--absolute-center slds-p-around--large slds-theme--default">

                <div className='slds-col slds-p-around--small slds-grid'>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="firstName" label="First Name" variant="outlined" required />
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="firstName" label="First Name" variant="outlined" required />
                    </div>
                </div>
                <div className='slds-col slds-p-around--small slds-grid'>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="firstName" label="First Name" variant="outlined" required />
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="firstName" label="First Name" variant="outlined" required />
                    </div>
                </div>
                <div className='slds-col slds-p-around--small slds-grid'>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="firstName" label="First Name" variant="outlined" required />
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="firstName" label="First Name" variant="outlined" required />
                    </div>
                </div>
                <div className='slds-col slds-p-around--small slds-grid'>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="firstName" label="First Name" variant="outlined" required />
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <DatePicker label="Basic date picker" />
                    </div>
                </div>
                <div className='slds-col slds-p-around--small slds-grid'>
                    <Button variant="contained" onClick={handleSignUpClick}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}