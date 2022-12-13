import getAllClaims from "./ClaimsData";
 import { useReducer } from "react";
import "./claims.css"
import { addNewClaim } from "./ClaimsData";

const NewClaim = (props) => {


    const handleChange = (event) => {

      dispatch({field : event.target.id, value : event.target.value});      

    }
    

  const template = {policy_number:"", sname:"", fname:"", status:"open", additional_notes:"" }

 
  const formReducer = (state, data) => {
    return {...state, [data.field] : data.value}
}


  const [aNewClaim, dispatch] = useReducer(formReducer, template);



  const addClaim = (event) => {
    event.preventDefault();
    props.setNewClaimsList([...props.newClaimsList, aNewClaim]);
    alert("New claim has been added");
    
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
              <div className="col"><input required type="text" id="policy_number" onChange={handleChange}/><br/></div>
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
              <div className="col"><label>Email:</label></div>
              <div className="col"><input type="email" id="email" /><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>Phone Number:</label></div>
              <div className="col"><input type="number" id="phone-number"/><br/></div>
            </div><br/>
            <div className="row">
              <div className="col"><label>Additional Notes:</label></div>
              <div className="col"><textarea onChange={handleChange} id="additional_notes"/><br/></div>
            </div><br/>
            
            <br/>
            <div className="submit-button"><button >Submit</button></div>
          </form>
        </div>

        </div>
      

    )
}

export default NewClaim;