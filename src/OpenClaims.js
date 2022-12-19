import { useState } from "react";
import "./claims.css"
import PolicyDetails from "./PolicyDetails";





const OpenClaims = (props) => {


    const [backToClaims, setBackToClaims] = useState(false);
    const [policyToDisplay, setPolicyToDisplay] = useState({policynumber: 0, name: "", status: ""});
    const [showDisplay, setShowDisplay] = useState(false);

    const allClaims = props.allClaims;
    const openClaims = allClaims.filter((claim,index) =>claim.claimstatus == "Awaiting Assessment");
   

   const showClaim = (event) => {
    setPolicyToDisplay(openClaims.filter((claim,index) => claim.policynumber == event.target.value));
    setShowDisplay(true);  
    setBackToClaims(true);
   }

   const hideClaim = (event) => {
    setPolicyToDisplay(openClaims.filter((claim,index) => claim.policynumber == event.target.value));
    setShowDisplay(false);  
    setBackToClaims(false);

   }

  

    



return(

    <>

<div>

<h1 className="heading">Open Claims</h1>
<br/>
{backToClaims && <div className="back-button-container">  <button className="back-button" onClick = {hideClaim}>Back to Open Claims List</button></div>}
<br/>



    {!showDisplay && <div className="oc-select-box"> <ul>
   
    {openClaims.map((claim, index) => <div key={index}>
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
export default OpenClaims;