import { useState } from "react";
import "./claims.css"
import getAllClaims from "./ClaimsData";
import OpenClaimsDetails from "./OpenClaimsDetails";
import{Outlet, NavLink} from "react-router-dom";
import { useEffect } from "react";




const OpenClaims = () => {


    const [backToClaims, setBackToClaims] = useState(false);
    const [policyToDisplay, setPolicyToDisplay] = useState({policy_number: 0, name: "", status: ""});
    const [showDisplay, setShowDisplay] = useState(false);


    const allClaims = getAllClaims();
    const openClaims = allClaims.filter((claim,index) =>claim.status === "open");
   

   const showClaim = (event) => {
    setPolicyToDisplay(openClaims.filter((claim,index) => claim.policy_number == event.target.value));
    setShowDisplay(true);  
    setBackToClaims(true);
   }

   const hideClaim = (event) => {
    setPolicyToDisplay(openClaims.filter((claim,index) => claim.policy_number == event.target.value));
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
    <li>Policy Number:<br/> {claim.policy_number}</li> 
    <button value = {claim.policy_number} onClick = {showClaim}>View details</button>
   

    <br/><br/>
    </div>)}

    </ul></div>}









{showDisplay && <OpenClaimsDetails policy_number={policyToDisplay[0].policy_number} sname={policyToDisplay[0].sname} fname={policyToDisplay[0].fname} status={policyToDisplay[0].status}/>}

</div>  

{backToClaims && <div className="back-button-container">  <button className="back-button" onClick = {hideClaim}>Back to Open Claims List</button></div>}
         
    </>
)



     }





export default OpenClaims;