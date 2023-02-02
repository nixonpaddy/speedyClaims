import { useEffect, useState } from "react";
import { archivedClaims } from "./ClaimsData";
import PolicyDetails from "./PolicyDetails";

const ArchivedClaims = (props) => {

  const [backToClaims, setBackToClaims] = useState(false);
  const [policyToDisplay, setPolicyToDisplay] = useState({policynumber: 0, name: "", status: ""});
  const [showDisplay, setShowDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  const [allArchivedClaims, setAllArchivedClaims] = useState("");
  //const allClaims = props.allClaims;




  //const archivedClaims = props.allClaims.filter((claim,index) =>claim.claimstatus == "Rejected" || claim.claimstatus == "Accepted - Paid" );



  const loadData = () => {
    archivedClaims()
    .then(response => {setAllArchivedClaims(response.data)});  
    setIsLoading(false);   
  }



  useEffect(() => {

loadData();

 },[]);




 

 const showClaim = (event) => {
  if(!isLoading){
  setPolicyToDisplay(allArchivedClaims.filter((claim,index) => claim.policyNumber == event.target.value));
  setShowDisplay(true);  
  setBackToClaims(true);
  }
 }

 const hideClaim = (event) => {
  if(!isLoading){
  setPolicyToDisplay(allArchivedClaims.filter((claim,index) => claim.policyNumber == event.target.value));
  setShowDisplay(false);  
  setBackToClaims(false);
  }

 }



  



return(

  <>
  {!isLoading && 

<div>

<h1 className="heading">Archived Claims</h1>
<br/>

{backToClaims && <div className="back-button-container">  <button className="back-button" onClick = {hideClaim}>Back to Archived Claims List</button></div>}
<br/>

{allArchivedClaims != "" && <> 

  {!showDisplay && <div className="oc-select-box" id="form-details-closed"> <ul>
 
  {allArchivedClaims.map((claim, index) => <div key={index}>
  <li>{claim.claimtype} Policy</li> 
  <li>Policy # {claim.policyNumber}</li> 
  <button value = {claim.policyNumber} onClick = {showClaim}>View details</button>
 

  <br/><br/>
  </div>)}

  </ul></div>}
  </>}

{showDisplay && <PolicyDetails policy={policyToDisplay[0]}  />}
</div>           
}</>
)
}
export default ArchivedClaims;