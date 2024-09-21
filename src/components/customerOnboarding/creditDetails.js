import React from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { NetworkCheck } from "@mui/icons-material";
import { AccountBalance } from "@mui/icons-material";
import { PaymentSharp } from "@mui/icons-material";
import { CreditCard } from "@mui/icons-material";

export default function CreditDetails() {
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
                        <Button variant="contained" startIcon={<NetworkCheck />}>
                            Get Credit Score
                        </Button>
                    </div>
                    <p>
                        Complete this detail later
                    </p>
                </div>
                <div className='slds-col slds-p-around--small slds-grid slds-grid--vertical-align-center'>
                    <div className="slds-col slds-p-around--small">
                        <Button variant="contained" startIcon={<AccountBalance />}>
                            Existing Loans:
                        </Button>
                    </div>
                    <p>
                        Complete this detail later
                    </p>
                </div>
                <div className='slds-col slds-p-around--small slds-grid slds-grid--vertical-align-center'>
                    <div className="slds-col slds-p-around--small">
                        <Button variant="contained" startIcon={<CreditCard />}>
                        Credit Card Dues:
                        </Button>
                    </div>
                    <p>
                        Complete this detail later
                    </p>
                </div>
                <div className='slds-col slds-p-around--small slds-grid slds-grid--vertical-align-center'>
                    <div className="slds-col slds-p-around--small">
                        <Button variant="contained" startIcon={<PaymentSharp />}>
                            Liabilities:
                        </Button>
                    </div>
                    <p>
                        Complete this detail later
                    </p>
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