import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook

export default function VerifyDetail() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/journey');
    };

    return (
        <div className="slds-p-vertical--x-large">
            <div className="slds-col slds-grid_vertical slds-align--absolute-center slds-p-around--large slds-theme--default">
                <div className='slds-col slds-p-around--small'>
                    <Button variant="contained" onClick={handleSignUpClick}>
                        verify
                    </Button>
                </div>
            </div>
        </div>
    );
}