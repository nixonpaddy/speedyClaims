import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResultsTable from "./ResultsTable";



const SearchClaim = (props) =>{

const [displayTable, setDisplayTable] = useState(false);
const [searchBoxes, setSearchBoxes] = useState(false);
const [policySearchTerm, setPolicySearchTerm] = useState("");
const [nameSearch, setNameSearch] = useState("");
const [oneTerm, setOneTerm] = useState(false);
const navigate = useNavigate();
const allClaims = props.allClaims;

const handleChange = (event) => {
  setPolicySearchTerm(event.target.value);
}


const handleNameChange = (event) => {  
  setNameSearch(event.target.value);  
}


const carryOutSearch = (event) => {  
  event.preventDefault();
  props.setSearchTerm(policySearchTerm);
  props.setNameSearchTerm(nameSearch);

  if(nameSearch!==""){
    props.setSearchType("name");
    navigate(`/search/${nameSearch}`);
  }else{
    props.setSearchType("policy");
    navigate(`/search/${policySearchTerm}`);
  }

  setDisplayTable(true);
  setSearchBoxes(true);
}


const clearSearch = (event) => {
  event.preventDefault();
  props.setSearchTerm("");
  navigate(`/search`);
  setPolicySearchTerm(""); 
  setNameSearch("");
  setOneTerm(false);  
  setDisplayTable(false);
  setSearchBoxes(false);
}


const oneTermEntered = () => {  
  if((nameSearch !== "" && policySearchTerm !== "") || (nameSearch === "" && policySearchTerm === "") ){
    setOneTerm(false);    
  }else{
    setOneTerm(true);
  }  
}







    return(

        <>

        <h1 className="heading">Search for an Existing Claim</h1>
        <br/>
        <br/>
        <div className="container" id="form-details">
          <form onSubmit={carryOutSearch}>
            <div className="row">
              <div className="col"><label>Search by Policy Number:</label></div>
              <div className="col"><input type="text" disabled={searchBoxes} onChange={handleChange} onKeyUp={oneTermEntered} value={policySearchTerm}/><br/></div>
            </div><br/>
      
            <p className="center">--OR--</p><br/>
      
      
      
            <div className="row">
              <div className="col"><label>Search by Name:</label></div>
              <div className="col"><input disabled={searchBoxes} type="text" onChange={handleNameChange} onKeyUp={oneTermEntered} value={nameSearch}/><br/></div>
            </div><br/>
      
                  
            <br/>
            <div className="submit-button"><button disabled={!oneTerm}>Search</button></div>
            <br/>
            <div className="submit-button"><button onClick={clearSearch}>Clear Search</button></div>
          </form>
        </div>
        <br/>  

        {displayTable && <ResultsTable setPolicyToEdit={props.setPolicyToEdit} nameSearch={nameSearch} searchTerm={props.searchTerm} allClaims={allClaims} searchType={props.searchType}/>}

        </>

    )
}

export default SearchClaim;