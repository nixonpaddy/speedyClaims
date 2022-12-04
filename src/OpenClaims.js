import { useState } from "react";
import "./claims.css"
import getAllClaims from "./ClaimsData";
import OpenClaimsDetails from "./OpenClaimsDetails";
import{Outlet, NavLink} from "react-router-dom";
import { useEffect } from "react";




const OpenClaims = () => {


    const [policyToDisplay, setPolicyToDisplay] = useState({policy_number: 0, name: "", status: ""});
    const [showDisplay, setShowDisplay] = useState(false);


    const allClaims = getAllClaims();
    const openClaims = allClaims.filter((claim,index) =>claim.status === "open");
   

   const showClaim = (event) => {
    setPolicyToDisplay(openClaims.filter((claim,index) => claim.policy_number == event.target.value));
    setShowDisplay(true);  
   }
   

     console.log(policyToDisplay);  
     console.log(showDisplay); 


return(

    <>

<div>

<h1 className="heading">Open Claims</h1>
<br/>
<br/>

<div className="oc-select-box">

    {!showDisplay &&     <ul>
   
    {openClaims.map((claim, index) => <>
    <li key={index}>Policy Number:<br/> {claim.policy_number}</li> 


<button value = {claim.policy_number} onClick = {showClaim}>View details</button>
   

    <br/><br/>
    </>)}

    </ul>}


</div>




{showDisplay && <OpenClaimsDetails policy_number={policyToDisplay[0].policy_number} sname={policyToDisplay[0].sname} fname={policyToDisplay[0].fname} status={policyToDisplay[0].status}/>}

</div>  

         
    </>
)



     }





export default OpenClaims;