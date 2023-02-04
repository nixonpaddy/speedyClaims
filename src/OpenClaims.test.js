import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import OpenClaims from './OpenClaims';
import SearchClaim from "./SearchClaim";




jest.mock("./ClaimsData",  () => {
    return {
    
        openClaims : () => Promise.resolve({status: 200, data : [{
            policyNumber: 1,
            surname: "Nixon",
            firstName: "Paddy",
            claimDate: "2022-10-10",
            claimType: "Pet",
            vehicleMake: "",
            vehicleModel: "",
            vehicleYear: null,
            propertyAddress: "",
            animalType: "Hamster",
            breedType: "Dwarf",
            claimAmount: 250,
            reasonForClaim: "Expensive Hamster. Escaped out the back door",
            otherInfo: "Hamster imported from Timbucktoo",
            claimStatus: "Awaiting Assessment",
            approvedPayoutAmount: "Pending",
            actions: [
            {
            actionId: 1,
            actionTaken: "10/10/2022 - Claim Created",
            actionPolicyNumber: 1,
            actionDate: "2022-10-10T00:00:00.000+00:00"
            }
            ]
            }, {
                policyNumber: 2,
                surname: "Younger",
                firstName: "Louise",
                claimDate: "2022-12-14",
                claimType: "Motor",
                vehicleMake: "Honda",
                vehicleModel: "Prelude",
                vehicleYear: 1999,
                propertyAddress: "",
                animalType: "",
                breedType: "",
                claimAmount: 400,
                reasonForClaim: "Reversed into a wall, damaged bumper",
                otherInfo: "",
                claimStatus: "In Progress",
                approvedPayoutAmount: "Pending",
                actions: [
                {
                actionId: 2,
                actionTaken: "12/14/2022 - Claim Created",
                actionPolicyNumber: 2,
                actionDate: "2022-12-14T00:00:00.000+00:00"
                },
                {
                actionId: 3,
                actionTaken: "19/12/2022 - Claim reviewed. Awaiting photographs of damage",
                actionPolicyNumber: 2,
                actionDate: "2022-12-19T00:00:00.000+00:00"
                }
                ]
                }]})
    }
});

test ("correct number of buttons are displayed when all unreviewed/open claims are loaded" , async () => {
    render(<BrowserRouter><OpenClaims /></BrowserRouter>)
    const arrayOfButtons = await screen.findAllByRole("button"); 
    expect(arrayOfButtons).toHaveLength(2);
})


test ("The first button in the list has a value which matches the policy ID" , async () => {
    render(<BrowserRouter><OpenClaims /></BrowserRouter>)
    const arrayOfButtons = await screen.findAllByRole("button"); 
    expect(arrayOfButtons[0]).toHaveValue("1");
})