
import { useState } from "react";
import getAllClaims from "./ClaimsData";
import PolicyDetails from "./PolicyDetails";
import TableRow from "./TableRow";

const ResultsTable = (props) => {


    const allClaims = getAllClaims();
    const searchResults = allClaims.filter((claim,index) => claim.policy_number == props.searchTerm);

    const [selectedPolicy, setSelectedPolicy] = useState("");
    const [displaySearch, setDisplaySearch] = useState("true");


 
   

    

    return(
        <>    

         { displaySearch && <><h2 className="center">Search Results</h2>
         <br/>
        <div className="container" id="form-details" >

            <br/>
        <table>
            <thead>
                <tr>
                <th>Policy #</th>
                <th>Surname</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>

                {searchResults.map((claim, index) => <TableRow claim={claim} position={index} key={index} setSelectedPolicy={setSelectedPolicy} setDisplaySearch={setDisplaySearch}/>)}

            </tbody>
        </table>
        <br/>


        

        </div></>}

        {selectedPolicy !== "" && <><h2 className="center">Policy Details</h2> <PolicyDetails policy={searchResults[selectedPolicy]}/></>}

        </>
    )

  
}

export default ResultsTable;