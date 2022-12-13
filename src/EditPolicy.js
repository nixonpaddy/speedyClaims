import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const EditPolicy = (props) => {

    
const navigate = useNavigate();
const {policyNumber} = useParams();
const claimTobeEdited = props.claimsList.filter((claim,index) => claim.policy_number == policyNumber);
const[policy_number,setPolicyNumber] = useState(claimTobeEdited[0].policy_number);
const[fName, setFName] = useState(claimTobeEdited[0].fname);
const[sName, setSName] = useState(claimTobeEdited[0].sname);
const[status, setStatus] = useState(claimTobeEdited[0].status);
const[notes, setNotes] = useState(claimTobeEdited[0].additional_notes);



// const handlePolicyChange = (event) => {
//   setPolicyNumber(event.target.value);
// }

const handleFNameChange = (event) => {
    setFName(event.target.value);
  }

  const handleSNameChange = (event) => {
    setSName(event.target.value);
  }

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  }

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  }

  









const saveModifications = (event) => {

    event.preventDefault();

    const moddedList = props.claimsList.filter((claim,index) => claim.policy_number !== policy_number);
   
    props.setNewClaimsList([...moddedList, {policy_number:policy_number, fname:fName, sname:sName, status:status, additional_notes:notes}  ]);

    alert("Claim Details have been modified");

    navigate("/OpenClaims");
  
}








  return(

    <div>


    <div className="container" id="form-details">
        
      <form onSubmit = {saveModifications}>
        <div className="row">
          <div className="col"><label>Policy Number:</label></div>
          <div className="col"><div className="col"><input disabled={true} type="text" id="policy_number" defaultValue={claimTobeEdited[0].policy_number}/><br/></div><br/></div>
        </div><br/>
  
        <div className="row">
          <div className="col"><label>First Name:</label></div>
          <div className="col"><input type="text" onChange={handleFNameChange} id="first-name" defaultValue={claimTobeEdited[0].fname}/><br/></div>
        </div><br/>
  
        <div className="row">
          <div className="col"><label>Surname:</label></div>
          <div className="col"><input type="text" onChange={handleSNameChange} id="surname" defaultValue={claimTobeEdited[0].sname}/><br/></div>
        </div><br/>
  
        <div className="row">
          <div className="col"><label>Claim Status:</label></div>
          <div className="col"><input type="text" onChange={handleStatusChange} id="status" defaultValue={claimTobeEdited[0].status}/></div>
        </div><br/>

        <div className="row">
          <div className="col"><label>Additional Notes:</label></div>
          {/* <div className="col"><input type="text" onChange={handleNotesChange} id="add-info" defaultValue={claimTobeEdited[0].additional_notes}/></div> */}
          <div className="col"><textarea onChange={handleNotesChange} id="add-info" defaultValue={claimTobeEdited[0].additional_notes}/></div>
        </div><br/>

        <button>Save</button>
  
        
        <br/>

      </form>
    </div>
    <br/>

    

  

    </div>


  )
}
export default EditPolicy;