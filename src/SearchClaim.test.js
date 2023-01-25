import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchClaim from "./SearchClaim";


test("check that the search button is not enabled initially", () => {

    render(
        <BrowserRouter>
    <SearchClaim />
    </BrowserRouter>);

const buttons = screen.getAllByRole("button");



const searchButton = buttons.find( b => b.textContent == "Search" );
console.log(buttons);
//expect().toBeInTheDocument();
expect(searchButton).toBeDisabled();

  
})