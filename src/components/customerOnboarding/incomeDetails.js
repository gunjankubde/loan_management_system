import React from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function IncomeDetails() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/journey');
    };

    const employmentStatus = [
        {
            value: 'salaried',
            label: 'Salaried',
        },
        {
            value: 'selfEmployed',
            label: 'Self Employed',
        },
        {
            value: 'business',
            label: 'Business',
        },
    ];

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
                        <TextField select label="Employment Status" defaultValue="salaried">
                            {employmentStatus.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        {/* <InputLabel id="employmentStatusLabel">Employment Status</InputLabel> //another way to do select
                        <Select label="employmentStatusLabel" defaultValue="salaried">
                            <MenuItem value="salaried">salaried</MenuItem>
                        </Select> */}
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <TextField id="employerName" label="Employer Name" variant="outlined" required />
                    </div>
                </div>
                <div className='slds-col slds-p-around--small slds-grid slds-grid_vertical slds-grid--vertical-align-center'>
                    <div className="slds-col slds-p-around--small">
                        <InputLabel ><strong>Salaried:</strong> Recent salary slips, Form 16, Bank Statement (3-6 months).</InputLabel>
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>Income Proof
                            <VisuallyHiddenInput type="file" onChange={(event) => console.log(event.target.files)} multiple />
                        </Button>
                    </div>
                </div>
                <div className='slds-col slds-p-around--small slds-grid slds-grid_vertical slds-grid--vertical-align-center'>
                    <div className="slds-col slds-p-around--small">
                        <InputLabel ><strong>Self-employed:</strong> Latest ITR, Profit & Loss Statement, Bank Statement (6-12 months).</InputLabel>
                    </div>
                    <div className="slds-col slds-p-around--small">
                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>Income Proof
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