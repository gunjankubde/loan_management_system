import React from "react";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

export default function footer() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <div className="slds-grid slds-grid_overflow">
                        <div className="slds-col">
                            Footer Details
                        </div>
                        <div className="slds-col">
                            Footer Details
                        </div>
                        <div className="slds-col">
                            Footer Details
                        </div>
                        <div className="slds-col">
                            Footer Details
                        </div>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}