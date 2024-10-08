import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function PersonalDetails() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
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
                        <TextField id="lastName" label="Last Name" variant="outlined" required />
                    </div>
                </div>
                <div className='slds-col slds-p-around--small slds-grid'>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="gender" label="Gender" variant="outlined" required />
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker id="birthDate" label="Birth Date"/>
                        </LocalizationProvider>
                    </div>
                </div>
                <div className='slds-col slds-p-around--small slds-grid'>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="mobile" label="Mobile Number" variant="outlined" required />
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="email" label="Email" variant="outlined" required />
                    </div>
                </div>
                <div className='slds-col slds-p-around--small slds-grid'>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="adhar" label="Adhar Number" variant="outlined" required />
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="pan" label="PAN Number" variant="outlined" required />
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