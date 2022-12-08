import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResultsTable from "./ResultsTable";



const SearchClaim = (props) =>{

  const params = useParams();

  if(params.orderId != null && params.orderId !== props.searchTerm) {
    props.setSearchTerm(params.orderId)}

const [policySearchTerm, setPolicySearchTerm] = useState("");
const navigate = useNavigate();


const handleChange = (event) => {
  setPolicySearchTerm(event.target.value);
}

const carryOutSearch = (event) => {
  event.preventDefault();
  props.setSearchTerm(policySearchTerm);
  navigate(`/search/${policySearchTerm}`);
}

const clearSearch = (event) => {
  event.preventDefault();
  props.setSearchTerm("");
  navigate(`/search`);
  setPolicySearchTerm("");

  
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
              <div className="col"><input type="text" onChange={handleChange} value={policySearchTerm}/><br/></div>
            </div><br/>
      
            <p className="center">--OR--</p><br/>
      
      
      
            <div className="row">
              <div className="col"><label>Search by Name:</label></div>
              <div className="col"><input type="text"/><br/></div>
            </div><br/>
      
                  
            <br/>
            <div className="submit-button"><button>Search</button></div>
            <br/>
            <div className="submit-button"><button onClick={clearSearch}>Clear Search</button></div>
          </form>
        </div>
        <br/>  

        {props.searchTerm !== "" && <ResultsTable searchTerm={props.searchTerm} setPasssedResults={props.setPassedResults}/>}

        </>

    )
}

export default SearchClaim;