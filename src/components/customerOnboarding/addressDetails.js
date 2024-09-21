import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

export default function AddressDetails() {
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

                <div className='slds-col slds-p-around--small slds-grid'>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="addressLine1" label="Address Line 1" variant="outlined" required />
                    </div>
                </div>
                <div className='slds-col slds-p-around--small slds-grid'>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="addressLine2" label="Address Line 2" variant="outlined" required />
                    </div>
                </div>
                <div className='slds-col slds-p-around--small slds-grid'>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="city" label="City" variant="outlined" required />
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="state" label="State" variant="outlined" required />
                    </div>
                </div>
                <div className='slds-col slds-p-around--small slds-grid slds-grid--vertical-align-center'>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="pincode" label="Pincode" variant="outlined" required />
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>Address Proof
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