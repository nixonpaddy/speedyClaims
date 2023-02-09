import { useEffect, useState } from "react";
import "./claims.css"
import { openClaims } from "./ClaimsData";
import PolicyDetails from "./PolicyDetails";





const OpenClaims = (props) => {


    const [backToClaims, setBackToClaims] = useState(false);
    const [policyToDisplay, setPolicyToDisplay] = useState("");
    const [showDisplay, setShowDisplay] = useState(false);
    const [allOpenClaims, setAllOpenClaims] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // const allClaims = props.allClaims;
    // const openClaims = allClaims.filter((claim,index) =>claim.claimstatus == "Awaiting Assessment");

    //const openClaims = openClaims();

    const loadData = () => {
        openClaims()
        .then(response => {setAllOpenClaims(response.data)});  
        setIsLoading(false);   
      }



      useEffect(() => {

loadData();
    
     },[]);

     



     useEffect(() => {
        if(policyToDisplay !== ""){

        props.setPolicyEdit(policyToDisplay[0])
        }
            
             },[policyToDisplay]);

    




      

      
   

   const showClaim = (event) => {
    if(!isLoading){

    setPolicyToDisplay(allOpenClaims.filter((claim,index) => claim.policyNumber == event.target.value));
    setShowDisplay(true);  
    setBackToClaims(true);
    
    }

   }

   const hideClaim = (event) => {
    if(!isLoading){
    //setPolicyToDisplay(allOpenClaims.filter((claim,index) => claim.policyNumber == event.target.value));
    setShowDisplay(false);  
    setBackToClaims(false);
    }

   }

  

    



return(

    <>
    {!isLoading && 

<div>

<h1 className="heading">Open Claims</h1>
<br/>
{backToClaims && <div className="back-button-container">  <button className="back-button" onClick = {hideClaim}>Back to Open Claims List</button></div>}
<br/>



    {allOpenClaims != ""  && <>
    
    


    {!showDisplay && <>
        <div className="oc-select-box"> <ul>
   
    {allOpenClaims.map((claim, index) => <div key={index}>
    <li>{claim.claimType} Claim</li> 
    <li>Policy # {claim.policyNumber}</li> 
    <li> {claim.claimStatus}</li> 
    <button value = {claim.policyNumber} onClick = {showClaim}>View details</button>
   

    <br/><br/>
    </div>)}  
    
    </ul></div>

    </> }
    
    </> }

{showDisplay && <PolicyDetails policy={policyToDisplay[0]}  />}
</div> 
}          
    </>
)
     }
export default OpenClaims;