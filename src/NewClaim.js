import getAllClaims from "./ClaimsData";
 import { useReducer, useState } from "react";
import "./claims.css"
import { addNewClaim } from "./ClaimsData";
import { useNavigate } from "react-router-dom";

const NewClaim = (props) => {
  const navigate = useNavigate();

  const [claimType, setClaimType] = useState("");


    const handleChange = (event) => {

      dispatch({field : event.target.id, value : event.target.value});      

    }

    //console.log(props.newClaimsList.length);

    
    
//policyNumber: props.currentPolicyNumber

  const template ={surname: "", firstName: "", claimDate:"", claimType:"", 
  vehicleMake:"", vehicleModel:"", vehicleYear:"", 
  propertyAddress:"",
  animalType:"", breedType:"",
  claimAmount:0, reasonForClaim:"", otheriInfo:"",
  claimStatus:"Awaiting Assessment", approvedPayoutAmount:"Pending",
  actions:[{actionTaken : new Date().toLocaleString().slice(0,10) + "   - Claim Created", actionPolicyNumber : props.newClaimsList.length}]}

 
  const formReducer = (state, data) => {
    return {...state, [data.field] : data.value}
}


  const [aNewClaim, dispatch] = useReducer(formReducer, template);



  // const addClaim = (event) => {
  //   event.preventDefault();
  //   props.setNewClaimsList([...props.newClaimsList, aNewClaim]);
  //   alert("New claim has been added");    
  //   props.setCurrentPolicyNumber(props.currentPolicyNumber+1);
  //   navigate(`/`);  
  
  // }


  const addClaim = (event) => {
    event.preventDefault();
    console.log(aNewClaim);
    addNewClaim(aNewClaim)
        .then( response => {
            if (response.status === 200) {
                alert("New transaction added with id " + response.data.policyNumber);
                navigate(`/`); 
                props.loadData();
            }
            else {
                console.log("Something went wrong - status code was " + response.status);
            }
            
        } )
        .catch( error => {
            console.log("Something went wrong - " + error);
        })
} 











  const changeClaimType = (event) => {
    setClaimType(event.target.value); 
  }


    return(



        <div>

        <h1 className="heading">Add New Claim</h1>
        <br/>
        <br/>
        <div className="container" id="form-details">
          <form onSubmit={addClaim}>
            <div className="row">
              <div className="col"><label>Policy Number:</label></div>
              <div className="col"><input disabled value={props.currentPolicyNumber} type="text" id="policyNumber" /><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>First Name:</label></div>
              <div className="col"><input required type="text" id="firstName" onChange={handleChange}/><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>Surname:</label></div>
              <div className="col"><input required type="text" id="surname" onChange={handleChange}/><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>Claim date:</label></div>
              <div className="col"><input onChange={handleChange} type="date" id="claimDate" /><br/></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Claim Type:</label></div>
              <div className="col"><select defaultValue="Select" name="claimtype" id="claimType" onBlur={handleChange} onChange={changeClaimType}>
              <option disabled >Select</option>
                <option value="Motor">Motor</option>
                <option value="Property">Property</option>
                <option value="Pet">Pet</option>
              </select></div>
            </div><br/>


           {claimType==="Property" &&
            <> 
                        <div className="row">
              <div className="col"><h3>Property Details</h3></div>
            </div><br/>
            
            
            <div className="row">
              <div className="col"><label>Address of affected Property:</label></div>
              <div className="col"><textarea id="propertyAddress" onChange={handleChange}/><br/></div>
            </div><br/></>}

            {claimType==="Motor" &&
             <>
            <div className="row">
              <div className="col"><h3>Vehicle Details</h3></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Make:</label></div>
              <div className="col"><input onChange={handleChange} type="text" id="vehicleMake" /><br/></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Model:</label></div>
              <div className="col"><input onChange={handleChange} type="text" id="vehicleModel" /><br/></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Year:</label></div>
              <div className="col"><input onChange={handleChange} type="number" id="vehicleYear" /><br/></div>
            </div><br/>
            </>}


            
            {claimType==="Pet" &&
             <>
            <div className="row">
              <div className="col"><h3>Pet Details</h3></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Type of Animal:</label></div>
              <div className="col"><input onChange={handleChange} type="text" id="animalType" /><br/></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Breed:</label></div>
              <div className="col"><input onChange={handleChange} type="text" id="breedType" /><br/></div>
            </div><br/>
            </>}





            {claimType !=="" &&
            <>
            
                        <div className="row">
              <div className="col"><label>Estimated Claim Amount:</label></div>
              <div className="col"><input onChange={handleChange} type="number" id="claimAmount"/><br/></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Reason for Claim:</label></div>
              <div className="col"><textarea onChange={handleChange} id="reasonForClaim"/><br/></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Other Info:</label></div>
              <div className="col"><textarea onChange={handleChange} id="otherInfo"/><br/></div>
            </div><br/> 
            </>}



            



      


            
            <br/>
            <div className="submit-button"><button >Submit</button></div>
          </form>
        </div>

        </div>
      

    )
}

export default NewClaim;