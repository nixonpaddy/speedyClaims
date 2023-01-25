
import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation'


test("menu contains a link to the find page", ()=> {
    //step1 - render the component
    render(<BrowserRouter><Navigation /></BrowserRouter>);

    //step2 - get the object we want to inspect
    const findLink = screen.getByText("Search", {exact: false});

    //step3 - user interaction (click / type)

    //step4 - what do we expect to happen
    expect(findLink).toBeInTheDocument();
    expect(findLink).toHaveAttribute('href', '/search');


})


// test("menu contains a link to the find page", ()=> {
   
//     render(<BrowserRouter><Navigation /></BrowserRouter>);

    
//     const findLink = screen.getByText("Add New Claim", {exact: false});

  
//     expect(findLink).toBeInTheDocument();
//     expect(findLink).toHaveAttribute('href', '/newclaim');


// })