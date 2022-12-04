import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import "./claims.css";
import NewClaim from "./NewClaim"
import {Routes, Route} from "react-router-dom";
import SearchClaim from "./SearchClaim"
import OpenClaims from './OpenClaims';
import OpenClaimsDetails from './OpenClaimsDetails';

function App() {
  return (
  

    <Routes>
      <Route element = {<Navigation />}>
        <Route path="/NewClaim" element={<NewClaim />}/>
        <Route path="/SearchClaim" element={<SearchClaim />}/>
        <Route path="/OpenClaims" element={<OpenClaims />}/>
        <Route path="/OpenClaimsDetails" element={<OpenClaimsDetails  />}/>

      </Route>
    </Routes>




  );
}

export default App;
