import { useState } from "react";

const SearchClaim = () =>{

const [policySearchTerm, setPolicySearchTerm] = useState();


  const changePolicySearch = (event) => {

    

    const searchTerm = event.target.value;
    setPolicySearchTerm(searchTerm);
    console.log(policySearchTerm);

  }

  const search = () => {
   //const searchTerm = document.getElementById("search-policy-number").value;
  }




    return(

        <>

        <h1 className="heading">Search for an Existing Claim</h1>
        <br/>
        <br/>
        <div className="container" id="form-details">
          <form>
            <div className="row">
              <div className="col"><label>Search by Policy Number:</label></div>
              <div className="col"><input type="text" onChange={changePolicySearch}/><br/></div>
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
      
        <h2 className="center">Results</h2>
      
        <table>
          <thead>
          <tr>
              <th>Policy Number</th>
              <th>Name</th>
              <th>Claim Status</th>
          </tr>
          </thead><tbody>
          <tr>
              <td>ABC123</td>
              <td>Nixon</td>
              <td>Pending</td>
          </tr>
          <tr>
              <td>DEF456</td>
              <td>Quinn</td>
              <td>Processing</td>
          </tr>
          </tbody>
        </table>

        </>
    )
}

export default SearchClaim;