import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import Navigation from './Navigation';
import "./claims.css";
import NewClaim from "./NewClaim"
import {Routes, Route, BrowserRouter} from "react-router-dom";
import SearchClaim from "./SearchClaim"
import OpenClaims from './OpenClaims';
import { useEffect, useState } from 'react';
import BottomBorder from "./BottomBorder";
import PolicyDetails from './PolicyDetails';
import {getAllClaims, getAllClaimsAxios, getClaimById, searchName } from './ClaimsData';
import EditPolicy from './EditPolicy';
import ArchivedClaims from './ArchivedClaims';
import store from './store';
import { UserContext } from './UserContext';
import Login from './Login';

function App() {

  const[searchType,setSearchType] = useState("policy");
  const [NameSearchTerm, setNameSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const[newClaimsList, setNewClaimsList] = useState();
  const [currentPolicyNumber, setCurrentPolicyNumber] =useState();
  const[policyEdit, setPolicyEdit] = useState("");
  
  const [currentUser, setCurrentUser] = useState({ name : "", role : ""});

  console.log(policyEdit);

  const clearSearch = () => {
    setSearchTerm(""); 
    setNameSearchTerm("");
  }

 


  const loadData = () => {
    getAllClaimsAxios()
    .then(response => {setNewClaimsList(response.data)});      
  }



 useEffect(() => {

  loadData();

 },[])

 console.log(searchTerm)



  useEffect(() => {
        

    getClaimById(searchTerm)
    .then(response =>(setPolicyEdit(response.data)));

    
  
   },[searchTerm])
 
  


   
 
 

  return (
    <BrowserRouter>
    

<Provider store={store} >
<UserContext.Provider value={{user:currentUser, setUser:setCurrentUser }}>

    <Routes>
      <Route element = {<Navigation />}>
      <Route path="/login" element = {<Login />} />
        <Route path="/NewClaim" element={<NewClaim setNewClaimsList={setNewClaimsList} newClaimsList={newClaimsList} currentPolicyNumber={currentPolicyNumber} setCurrentPolicyNumber={setCurrentPolicyNumber} loadData={loadData}/>}/>
        <Route path="/Search" element={<SearchClaim  searchType={searchType} setSearchType={setSearchType} setSearchTerm={setSearchTerm} searchTerm={searchTerm} nameSearchTerm={NameSearchTerm} setNameSearchTerm={setNameSearchTerm} allClaims={newClaimsList} policyEdit={policyEdit} setPolicyEdit={setPolicyEdit}/>}/>
        <Route path="/OpenClaims" element={<OpenClaims setPolicyEdit={setPolicyEdit} allClaims={newClaimsList} />}/>
        <Route path="/Search/:policyNumber"  element={<SearchClaim setPolicyEdit={setPolicyEdit} policyEdit={policyEdit} searchType={searchType} setSearchType={setSearchType} setSearchTerm={setSearchTerm} searchTerm={searchTerm} allClaims={newClaimsList} nameSearchTerm={NameSearchTerm} setNameSearchTerm={setNameSearchTerm}/>}/>
        <Route path="/" element = { <h1 className="center">Welcome to the Claims system. Please select an option above.</h1>}/>
        <Route path="/PolicyDetails/:policyNumber"  element={<PolicyDetails  />}/>
        <Route path="*"  element={<h1 className="center">This page does not exist</h1>}/>
        <Route path="/editpolicy/:policyNumber"  element={<EditPolicy  policyEdit={policyEdit} claimsList={newClaimsList} setNewClaimsList={setNewClaimsList} clearSearch={clearSearch} />}/>
        <Route path="/archived"  element={<ArchivedClaims allClaims={newClaimsList} />}/>
      </Route>     
    </Routes>
    <BottomBorder />
    </UserContext.Provider> 
    </Provider>
    
    </BrowserRouter>




  );
}

export default App;
