import { useState } from "react";
import PolicyDetails from "./PolicyDetails";

const ArchivedClaims = (props) => {

  const [backToClaims, setBackToClaims] = useState(false);
  const [policyToDisplay, setPolicyToDisplay] = useState({policynumber: 0, name: "", status: ""});
  const [showDisplay, setShowDisplay] = useState(false);

  //const allClaims = props.allClaims;
  const archivedClaims = props.allClaims.filter((claim,index) =>claim.claimstatus == "Rejected" || claim.claimstatus == "Accepted - Paid" );
 

 const showClaim = (event) => {
  setPolicyToDisplay(archivedClaims.filter((claim,index) => claim.policynumber == event.target.value));
  setShowDisplay(true);  
  setBackToClaims(true);
 }

 const hideClaim = (event) => {
  setPolicyToDisplay(archivedClaims.filter((claim,index) => claim.policynumber == event.target.value));
  setShowDisplay(false);  
  setBackToClaims(false);

 }



  



return(

  <>

<div>

<h1 className="heading">Archived Claims</h1>
<br/>
{backToClaims && <div className="back-button-container">  <button className="back-button" onClick = {hideClaim}>Back to Archived Claims List</button></div>}
<br/>



  {!showDisplay && <div className="oc-select-box" id="form-details-closed"> <ul>
 
  {archivedClaims.map((claim, index) => <div key={index}>
  <li>{claim.claimtype} Policy</li> 
  <li>Policy # {claim.policynumber}</li> 
  <button value = {claim.policynumber} onClick = {showClaim}>View details</button>
 

  <br/><br/>
  </div>)}

  </ul></div>}

{showDisplay && <PolicyDetails policy={policyToDisplay[0]}  />}
</div>           
  </>
)
}
export default ArchivedClaims;