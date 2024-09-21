import React from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function DocumentUpload() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/journey');
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    return (
        <div className="slds-p-vertical--x-large">
            <div className="slds-col slds-grid_vertical slds-align--absolute-center slds-p-around--large slds-theme--default">

                <div className='slds-col slds-p-around--small slds-grid slds-grid--vertical-align-center'>
                    <div className="slds-col slds-p-around--small">
                        <TextField select label="Identity Proof" defaultValue="Aadhaar">
                            <MenuItem value="Aadhaar">Aadhaar</MenuItem>
                            <MenuItem value="PAN">PAN</MenuItem>
                            <MenuItem value="Passport">Passport</MenuItem>
                            <MenuItem value="Voter ID">Voter ID</MenuItem>
                        </TextField>
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>Identity Proof
                            <VisuallyHiddenInput type="file" onChange={(event) => console.log(event.target.files)} multiple />
                        </Button>
                    </div>
                </div>
                
                <div className='slds-col slds-p-around--small slds-grid slds-grid--vertical-align-center'>
                    <div className="slds-col slds-p-around--small">
                        <TextField select label="Address Proof" defaultValue="Rent Agreement">
                            <MenuItem value="Aadhaar">Aadhaar</MenuItem>
                            <MenuItem value="Rent Agreement">Rent Agreement</MenuItem>
                            <MenuItem value="Electricity Bill">Electricity Bill</MenuItem>
                            <MenuItem value="Voter ID">Voter ID</MenuItem>
                        </TextField>
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>Address Proof
                            <VisuallyHiddenInput type="file" onChange={(event) => console.log(event.target.files)} multiple />
                        </Button>
                    </div>
                </div>

                <div className='slds-col slds-p-around--small slds-grid slds-grid--vertical-align-center'>
                    <div className="slds-col slds-p-around--small">
                        <TextField select label="Income Proof" defaultValue="Salary slips">
                            <MenuItem value="Salary slips">Salary slips</MenuItem>
                            <MenuItem value="Form 16">Form 16</MenuItem>
                            <MenuItem value="ITR documents">ITR documents</MenuItem>
                        </TextField>
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>Income Proof
                            <VisuallyHiddenInput type="file" onChange={(event) => console.log(event.target.files)} multiple />
                        </Button>
                    </div>
                </div>

                <div className='slds-col slds-p-around--small slds-grid slds-grid--vertical-align-center'>
{/*                     <div className="slds-col slds-p-around--small">
                        <TextField select label="Photograph" defaultValue="Aadhaar">
                            <MenuItem value="Aadhaar">Aadhaar</MenuItem>
                            <MenuItem value="PAN">PAN</MenuItem>
                            <MenuItem value="Passport">Passport</MenuItem>
                            <MenuItem value="Voter ID">Voter ID</MenuItem>
                        </TextField>
                    </div> */}
                    <div className="slds-col slds-p-around--small">
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>Photograph
                            <VisuallyHiddenInput type="file" onChange={(event) => console.log(event.target.files)} multiple />
                        </Button>
                    </div>
                </div>
                <div className='slds-col slds-p-around--small'>
                    <Button variant="contained" onClick={handleSignUpClick}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}