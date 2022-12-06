import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import "./claims.css";
import NewClaim from "./NewClaim"
import {Routes, Route} from "react-router-dom";
import SearchClaim from "./SearchClaim"
import OpenClaims from './OpenClaims';
import OpenClaimsDetails from './OpenClaimsDetails';
import { useState } from 'react';
import SearchResultsPage from "./SearchResultsPage";

function App() {

  const [searchTerm, setSearchTerm] = useState("");


  return (
  

    <Routes>
      <Route element = {<Navigation />}>
        <Route path="/NewClaim" element={<NewClaim />}/>
        <Route path="/Search" element={<SearchClaim setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>}/>
        <Route path="/OpenClaims" element={<OpenClaims />}/>
        <Route path="/Search/:policyNumber"  element={<SearchResultsPage  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}/>


      </Route>
    </Routes>




  );
}

export default App;
