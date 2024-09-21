import * as React from 'react';
import PersonalDetails from './personalDetails';
import AddressDetails from './addressDetails';
import IncomeDetails from './incomeDetails.js';
import DocumentUpload from './documentUpload.js';
import CreditDetails from './creditDetails.js';
import VerifyDetail from './verifyDetails.js';

const journerMap = new Map([
    ['Personal Details', PersonalDetails],
    ['Address Details', AddressDetails],
    ['Income Details', IncomeDetails],
    ['Document Upload', DocumentUpload],
    ['Credit Details', CreditDetails],
    ['Verify', VerifyDetail]
  ]);

export default function JournerHandler(props) {

    
    return {
        
    }
}