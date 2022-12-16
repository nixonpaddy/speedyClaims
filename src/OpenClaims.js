import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./claims.css"
import OpenClaimsDetails from "./OpenClaimsDetails";
import PolicyDetails from "./PolicyDetails";





const OpenClaims = (props) => {

    const navigate = useNavigate();


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
<br/>



    {!showDisplay && <div className="oc-select-box"> <ul>
   
    {openClaims.map((claim, index) => <div key={index}>
    {/* <li>{claim.claimtype.charAt(0).toUpperCase() + claim.claimtype.slice(1)} Policy</li>  */}
    <li>{claim.claimtype} Policy</li> 
    <li>Policy # {claim.policynumber}</li> 
    <button value = {claim.policynumber} onClick = {showClaim}>View details</button>
   

    <br/><br/>
    </div>)}

    </ul></div>}



{/* {showDisplay && <OpenClaimsDetails policy_number={policyToDisplay[0].policy_number} sname={policyToDisplay[0].sname} fname={policyToDisplay[0].fname} status={policyToDisplay[0].status} additionalNotes={policyToDisplay[0].additional_notes}/>} */}
{showDisplay && <PolicyDetails policy={policyToDisplay[0]}  />}
</div>  

{backToClaims && <div className="back-button-container">  <button className="back-button" onClick = {hideClaim}>Back to Open Claims List</button></div>}
         
    </>
)
     }
export default OpenClaims;