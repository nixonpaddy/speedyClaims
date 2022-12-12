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
import getAllClaims from './ClaimsData';

function App() {

  const[searchType,setSearchType] = useState("policy");
  const [NameSearchTerm, setNameSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const[newClaimsList, setNewClaimsList] = useState(getAllClaims);
  
 
 

  return (
    <>
  

    <Routes>
      <Route element = {<Navigation />}>
        <Route path="/NewClaim" element={<NewClaim setNewClaimsList={setNewClaimsList} newClaimsList={newClaimsList}/>}/>
        <Route path="/Search" element={<SearchClaim searchType={searchType} setSearchType={setSearchType} setSearchTerm={setSearchTerm} searchTerm={searchTerm} nameSearchTerm={NameSearchTerm} setNameSearchTerm={setNameSearchTerm} allClaims={newClaimsList}/>}/>
        <Route path="/OpenClaims" element={<OpenClaims allClaims={newClaimsList}/>}/>
        <Route path="/Search/:policyNumber"  element={<SearchClaim searchType={searchType} setSearchType={setSearchType} setSearchTerm={setSearchTerm} searchTerm={searchTerm} allClaims={newClaimsList} nameSearchTerm={NameSearchTerm} setNameSearchTerm={setNameSearchTerm}/>}/>
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
