import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import "./claims.css";
import NewClaim from "./NewClaim"
import {Routes, Route} from "react-router-dom";
import SearchClaim from "./SearchClaim"
import OpenClaims from './OpenClaims';
import { useState } from 'react';
import BottomBorder from "./BottomBorder";
import PolicyDetails from './PolicyDetails';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
 

  return (
    <>
  

    <Routes>
      <Route element = {<Navigation />}>
        <Route path="/NewClaim" element={<NewClaim />}/>
        <Route path="/Search" element={<SearchClaim setSearchTerm={setSearchTerm} searchTerm={searchTerm} />}/>
        <Route path="/OpenClaims" element={<OpenClaims />}/>
        <Route path="/Search/:policyNumber"  element={<SearchClaim setSearchTerm={setSearchTerm} searchTerm={searchTerm} />}/>
        <Route path="/" element = { <h1 className="center">Welcome to the Claims system. Please select an option above.</h1>}/>
        <Route path="/PolicyDetails/:policyNumber"  element={<PolicyDetails />}/>
        <Route path="*"  element={<h1 className="center">This page does not exist</h1>}/>

      </Route>     
    </Routes>
    <BottomBorder />
    </>




  );
}

export default App;