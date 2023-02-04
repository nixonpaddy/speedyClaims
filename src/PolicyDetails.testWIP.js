
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import PolicyDetails from "./PolicyDetails";


jest.mock("./ClaimsData",  () => {
    return {
        searchName : () => {
            return Promise.resolve({status: 200, data : [{claimType:"Pet", tasks:"g"}]});
        },
        addNewClaim : (newClaim)=> {},
        getActionsByPolicy : (policyId) => Promise.resolve({status: 200, data : []})

    }
});




test("check that the search box initially has no classes applied to it" , async () => {
    render(
    <BrowserRouter>
        <PolicyDetails policy=""/>
    </BrowserRouter>);
    const input = await screen.getByLabelText("Claim Type:")
    expect(input).toHaveTextContent(("Pet") || ("Property") || ("Motor"));
});