
import { useEffect, useState } from "react";
import getAllClaims from "./ClaimsData";
import TableRow from "./TableRow";

const ResultsTable = (props) => {


    const allClaims = getAllClaims();
    const claim = allClaims.filter((claim,index) => claim.policy_number == props.searchTerm);


    const [foundClaim, setFoundClaim] = useState(claim);




    return(
        <>           
         <h2 className="center">Search Results</h2>
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
                <TableRow claim={foundClaim} />

            </tbody>
        </table>
        </div>
        </>
    )

  
}

export default ResultsTable;