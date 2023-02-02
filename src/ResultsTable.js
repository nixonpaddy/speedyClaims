
import { useEffect, useState } from "react";
import {getAllActionsAxios, getAllClaims, getAllClaimsAxios, searchName} from "./ClaimsData";
import PolicyDetails from "./PolicyDetails";
import TableRow from "./TableRow";

const ResultsTable = (props) => {



    const[actionsList, setActionsList] = useState();
  

    let searchResults = [];
    
    searchResults.push(props.thePolicy);

    const [selectedPolicy, setSelectedPolicy] = useState("");
    const [displaySearch, setDisplaySearch] = useState("true");

    if(props.searchType == "name"){
        searchResults = props.nameResults.filter((claim,index) => claim.surname.toLowerCase().includes(props.nameSearch.toLowerCase()));
    }

    



    useEffect(() => {

        if(selectedPolicy !== ""){

        if(searchResults.length>1){
            props.setPolicyEdit(searchResults[selectedPolicy]);
            }
        }
            
             },[selectedPolicy]);




    




    

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