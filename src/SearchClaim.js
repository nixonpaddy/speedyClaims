import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SearchClaim = (props) =>{

const [policySearchTerm, setPolicySearchTerm] = useState();
const navigate = useNavigate();


const handleChange = (event) => {
  setPolicySearchTerm(event.target.value);
}

const carryOutSearch = (event) => {
  event.preventDefault();
  props.setSearchTerm(policySearchTerm);
  navigate(`/search/${policySearchTerm}`);
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
              <div className="col"><input type="text" onChange={handleChange}/><br/></div>
            </div><br/>
      
            <p className="center">--OR--</p><br/>
      
      
      
            <div className="row">
              <div className="col"><label>Search by Name:</label></div>
              <div className="col"><input type="text"/><br/></div>
            </div><br/>
      
                  
            <br/>
            <div className="submit-button"><button>Search</button></div>
          </form>
        </div>
        <br/>  

        </>
    )
}

export default SearchClaim;