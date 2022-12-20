import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const EditPolicy = (props) => {

    
const navigate = useNavigate();
const {policyNumber} = useParams();
const claimTobeEdited = props.claimsList.filter((claim,index) => claim.policynumber == policyNumber);
const[policy_number,setPolicyNumber] = useState(claimTobeEdited[0].policynumber);
const[fName, setFName] = useState(claimTobeEdited[0].fname);
const[sName, setSName] = useState(claimTobeEdited[0].sname);
const[status, setStatus] = useState(claimTobeEdited[0].claimstatus);
const[notes, setNotes] = useState(claimTobeEdited[0].otherinfo);
const[animalType, setAnimalType] = useState(claimTobeEdited[0].animaltype);
const[approvedPayoutAmount, setApprovedPayoutAmount] = useState(claimTobeEdited[0].approvedpayoutamount);
const[breedType, setBreedType] = useState(claimTobeEdited[0].breedtype);
const[claimAmount, setClaimAmount] = useState(claimTobeEdited[0].claimamount);
const[claimDate, setClaimDate] = useState(claimTobeEdited[0].claimdate);
const[claimType, setClaimType] = useState(claimTobeEdited[0].claimtype);
const[propertyAddress, setPropertyAddress] = useState(claimTobeEdited[0].propertyaddress);
const[reasonForClaim, setReasonForClaim] = useState(claimTobeEdited[0].reasonforclaim);
const[vehicleMake, setVehicleMake] = useState(claimTobeEdited[0].vehiclemake);
const[vehicleModel, setVehicleModel] = useState(claimTobeEdited[0].vehiclemodel);
const[vehicleYear, setVehicleYear] = useState(claimTobeEdited[0].vehicleyear);
const[claimHandlerNote, setClaimHandlerNote] = useState("");
const[claimDiary, setClaimDiary] = useState(props.claimsList.filter((claim,index) => claim.policynumber == policy_number)[0].actionslog);



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

  const handleAnimalTypeChange = (event) => {
    setAnimalType(event.target.value);
  }

  const handleApprovedPayoutChange = (event) => {
    setApprovedPayoutAmount(event.target.value);
  }

  const handleBreedTypeChange = (event) => {
    setBreedType(event.target.value);
  }

  const handleClaimAmountChange = (event) => {
    setClaimAmount(event.target.value);
  }

  const handleClaimDateChange = (event) => {
    setClaimDate(event.target.value);
  }

  const handleClaimTypeChange = (event) => {
    setClaimType(event.target.value);
  }

  const handlePropertyAddressChange = (event) => {
    setPropertyAddress(event.target.value);
  }

  const handleReasonForClaimChange = (event) => {
    setReasonForClaim(event.target.value);
  }

  const handleVehicleMakeChange = (event) => {
    setVehicleMake(event.target.value);
  }

  const handleVehicleModelChange = (event) => {
    setVehicleModel(event.target.value);
  }

  const handleVehicleYearChange = (event) => {
    setVehicleYear(event.target.value);
  }

  const handleClaimHandlerNoteChange = (event) => {
    setClaimHandlerNote(new Date().toLocaleString().slice(0,10) + " - " + event.target.value);
  }

  



  

  









const saveModifications = (event) => {

    event.preventDefault();

    const moddedList = props.claimsList.filter((claim,index) => claim.policynumber !== policy_number);

    setClaimDiary(claimDiary.push(claimHandlerNote));
   
    props.setNewClaimsList([...moddedList, {policynumber:policy_number, fname:fName, sname:sName, claimstatus:status, otherinfo:notes, animaltype:animalType, approvedpayoutamount:approvedPayoutAmount, breedtype:breedType, claimamount:claimAmount, claimdate:claimDate, claimtype:claimType, propertyaddress:propertyAddress, reasonforclaim:reasonForClaim, vehiclemake:vehicleMake, vehiclemodel:vehicleModel, vehicleyear:vehicleYear, actionslog:claimDiary}  ]);

    
    
    alert("Claim Details have been modified");
    navigate("/OpenClaims");

    console.log(claimDiary);


}



  return(

    <div>


    <div className="container" id="form-details">
        
      <form onSubmit = {saveModifications}>
        <div className="row">
          <div className="col"><label>Policy Number:</label></div>
          <div className="col"><div className="col"><input disabled={true} type="text" id="policy_number" defaultValue={claimTobeEdited[0].policynumber}/><br/></div><br/></div>
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
          <div className="col"><label>Claim Date:</label></div>
          <div className="col"><input type="date"  id="claimdate" defaultValue={claimTobeEdited[0].claimdate} onChange={handleClaimDateChange}/></div>
        </div><br/>

        <div className="row">
          <div className="col"><label>Claim Type:</label></div>
          <div className="col"><select defaultValue={claimTobeEdited[0].claimtype} name="claimtype" id="claimtype" onChange={handleClaimTypeChange}>
              <option disabled >Select</option>
                <option value="Motor">Motor</option>
                <option value="Property">Property</option>
                <option value="Pet">Pet</option>
              </select></div>
        </div><br/>






        {claimType == "Property" && 
        <>
        
        <div className="row">
          <div className="col"><label>Address of Property:</label></div>
          <div className="col"><textarea  id="address" defaultValue={claimTobeEdited[0].propertyaddress} onChange={handlePropertyAddressChange}/></div>
        </div><br/>        
        </>
        
        }


        {claimType == "Motor" &&

        <>
                <div className="row">
          <div className="col"><label>Vehicle Make:</label></div>
          <div className="col"><input type="text"  id="vehiclemake" defaultValue={claimTobeEdited[0].vehiclemake} onChange={handleVehicleMakeChange}/></div>
        </div><br/>

        <div className="row">
          <div className="col"><label>Vehicle Model:</label></div>
          <div className="col"><input type="text"  id="vehiclemodel" defaultValue={claimTobeEdited[0].vehiclemodel} onChange={handleVehicleModelChange}/></div>
        </div><br/>

        <div className="row">
          <div className="col"><label>Vehicle Year:</label></div>
          <div className="col"><input type="number"  id="vehicleyear" defaultValue={claimTobeEdited[0].vehicleyear} onChange={handleVehicleYearChange}/></div>
        </div><br/>

        </>
        
        
        }


         {claimType == "Pet" &&

         <>
          <div className="row">
          <div className="col"><label>Animal Type:</label></div>
          <div className="col"><input type="text"  id="animaltype" defaultValue={claimTobeEdited[0].animaltype} onChange={handleAnimalTypeChange}/></div>
        </div><br/>

        <div className="row">
          <div className="col"><label>Breed:</label></div>
          <div className="col"><input type="text"  id="breed" defaultValue={claimTobeEdited[0].breedtype} onChange={handleBreedTypeChange}/></div>
        </div><br/>
         </>


         }







        <div className="row">
          <div className="col"><label>Claim Amount (£):</label></div>
          <div className="col"><input type="number"  id="claimamount" defaultValue={claimTobeEdited[0].claimamount} onChange={handleClaimAmountChange}/></div>
        </div><br/>

        <div className="row">
          <div className="col"><label>Reason for Claim:</label></div>
          <div className="col"><textarea  id="animaltype" defaultValue={claimTobeEdited[0].reasonforclaim} onChange={handleReasonForClaimChange}/></div>
        </div><br/>






        <div className="row">
          <div className="col"><label>Additional Notes:</label></div>         
          <div className="col"><textarea onChange={handleNotesChange} id="add-info" defaultValue={claimTobeEdited[0].otherinfo}/></div>
        </div><br/>

        <div className="row">
          <div className="col"><label>Claim Status:</label></div>
          <div className="col"><select defaultValue={claimTobeEdited[0].claimstatus} name="claimstatus" id="claimstatus" onChange={handleStatusChange}>
                <option value="Awaiting Assessment">Awaiting Initial Assessment</option>
                <option value="In Progress">In Progress</option>
                <option value="Rejected">Rejected</option>
                <option value="Accepted - Awaiting Payment">Accepted - Awaiting Payment</option>
                <option value="Accepted - Paid">Accepted - Paid</option>
                <option value="Escalated">Escalated</option>
              </select></div>
        </div><br/>

        <div className="row">
          <div className="col"><label>Approved Payout Amount (£):</label></div>
          <div className="col"><input type="text" id="animaltype" defaultValue={claimTobeEdited[0].approvedpayoutamount} onChange={handleApprovedPayoutChange}/></div>
        </div><br/>


        <div className="row">
          <div className="col"><label>Claims Handler Note:</label></div>
          <div className="col"><input type="text" id="animaltype"  onChange={handleClaimHandlerNoteChange}/></div>
        </div><br/>




        <div className="center"><button>Save</button></div>
        
        <br/>

      </form>
    </div>
    <br/>

    

  

    </div>


  )
}
export default EditPolicy;