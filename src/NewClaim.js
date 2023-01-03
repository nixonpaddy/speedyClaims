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

    
    


  const template ={policynumber: props.currentPolicyNumber, sname: "", fname: "", claimdate:"", claimtype:"", 
  vehiclemake:"", vehiclemodel:"", vehicleyear:"", 
  propertyaddress:"",
  animaltype:"", breedtype:"",
  claimamount:0, reasonforclaim:"", otherinfo:"",
  claimstatus:"Awaiting Assessment", approvedpayoutamount:"Pending",
  actionslog:[new Date().toLocaleString().slice(0,10) + "- Claim Created"],
  tasks:[]}

 
  const formReducer = (state, data) => {
    return {...state, [data.field] : data.value}
}


  const [aNewClaim, dispatch] = useReducer(formReducer, template);



  const addClaim = (event) => {
    event.preventDefault();
    props.setNewClaimsList([...props.newClaimsList, aNewClaim]);
    alert("New claim has been added");    
    props.setCurrentPolicyNumber(props.currentPolicyNumber+1);
    navigate(`/`);
    
  
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
              <div className="col"><input disabled value={props.currentPolicyNumber} type="text" id="policynumber" /><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>First Name:</label></div>
              <div className="col"><input required type="text" id="fname" onChange={handleChange}/><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>Surname:</label></div>
              <div className="col"><input required type="text" id="sname" onChange={handleChange}/><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>Claim date:</label></div>
              <div className="col"><input onChange={handleChange} type="date" id="claimdate" /><br/></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Claim Type:</label></div>
              <div className="col"><select defaultValue="Select" name="claimtype" id="claimtype" onBlur={handleChange} onChange={changeClaimType}>
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
              <div className="col"><textarea id="propertyaddress" onChange={handleChange}/><br/></div>
            </div><br/></>}

            {claimType==="Motor" &&
             <>
            <div className="row">
              <div className="col"><h3>Vehicle Details</h3></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Make:</label></div>
              <div className="col"><input onChange={handleChange} type="text" id="vehiclemake" /><br/></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Model:</label></div>
              <div className="col"><input onChange={handleChange} type="text" id="vehiclemodel" /><br/></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Year:</label></div>
              <div className="col"><input onChange={handleChange} type="number" id="vehicleyear" /><br/></div>
            </div><br/>
            </>}


            
            {claimType==="Pet" &&
             <>
            <div className="row">
              <div className="col"><h3>Pet Details</h3></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Type of Animal:</label></div>
              <div className="col"><input onChange={handleChange} type="text" id="animaltype" /><br/></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Breed:</label></div>
              <div className="col"><input onChange={handleChange} type="text" id="breedtype" /><br/></div>
            </div><br/>
            </>}





            {claimType !=="" &&
            <>
            
                        <div className="row">
              <div className="col"><label>Estimated Claim Amount:</label></div>
              <div className="col"><input onChange={handleChange} type="number" id="claimamount"/><br/></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Reason for Claim:</label></div>
              <div className="col"><textarea onChange={handleChange} id="reasonforclaim"/><br/></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Other Info:</label></div>
              <div className="col"><textarea onChange={handleChange} id="otherinfo"/><br/></div>
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