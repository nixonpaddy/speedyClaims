
import { useEffect, useState } from "react";
import {getAllActionsAxios, getAllClaims, getAllClaimsAxios} from "./ClaimsData";
import PolicyDetails from "./PolicyDetails";
import TableRow from "./TableRow";

const ResultsTable = (props) => {

    console.log(props.allClaims);

    

    const allClaims = props.allClaims;

    const[actionsList, setActionsList] = useState();



    const loadActions = () => {
        getAllActionsAxios()
        .then(response => {setActionsList(response.data)})
      }
    
     useEffect(() => {
    
      loadActions();
    
     },[])

     console.log(actionsList);


    

    
    let searchResults = allClaims.filter((claim,index) => claim.policyNumber == props.searchTerm);

    const [selectedPolicy, setSelectedPolicy] = useState("");
    const [displaySearch, setDisplaySearch] = useState("true");

    if(props.searchType == "name"){
        searchResults = allClaims.filter((claim,index) => claim.surname.toLowerCase().includes(props.nameSearch.toLowerCase()));
    }



    

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
                <th>Policy Type</th>
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

        {selectedPolicy !== "" && <><h2 className="center">Claim Details</h2> <PolicyDetails policy={searchResults[selectedPolicy]}/></>}

        </>
    )

  
}

export default ResultsTable;