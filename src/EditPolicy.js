import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddTask from "./AddTask";
import TaskTable from "./TaskTable";
import { getClaimById, updateClaim } from "./ClaimsData";

export const EditPolicy = (props) => {



  



  
const { policyNumber } = useParams();
const[loadingData, setLoadingData] = useState(false);
const[claimTobeEdited, setClaimToBeEdited] = useState(props.policyEdit);
const [claimType, setClaimType] = useState(props.policyEdit.claimType);
const [addNewTask, setAddNewTask] = useState(false);
const [claimHandlerNote, setClaimHandlerNote] = useState("");
const [tasks, setTasks] = useState();  
const [newTask, setNewTask] = useState("");



const navigate = useNavigate();






  const formReducer = (state, data) => {
    return { ...state, [data.field]: data.value };
  };
 


  // const initialClaimState = {
  //   policyNumber: 0,
  //   firstName: "",
  //   surname: "",
  //   claimstatus: claimTobeEdited[0].claimStatus,
  //   otherinfo: claimTobeEdited[0].otherInfo,
  //   animaltype: claimTobeEdited[0].animalType,
  //   approvedpayoutamount: claimTobeEdited[0].approvedPayoutAmount,
  //   breedtype: claimTobeEdited[0].breedType,
  //   claimamount: claimTobeEdited[0].claimAmount,
  //   claimdate: claimTobeEdited[0].claimDate,
  //   claimtype: claimTobeEdited.claimType,
  //   propertyaddress: claimTobeEdited[0].propertyAddress,
  //   reasonforclaim: claimTobeEdited[0].reasonForClaim,
  //   vehiclemake: claimTobeEdited[0].vehicleMake,
  //   vehiclemodel: claimTobeEdited[0].vehicleModel,
  //   vehicleyear: claimTobeEdited[0].vehicleYear,
  //   actionslog: claimDiary,
  //   tasks: tasks,
  // };

  let initialClaimState = {
    policyNumber:claimTobeEdited.policyNumber,
    // firstName: claimTobeEdited.firstName,
    // surname: claimTobeEdited.surname,
    // claimStatus: claimTobeEdited.claimStatus,
    // otherInfo: claimTobeEdited.otherInfo,
    // animalType: claimTobeEdited.animalType,
    // approvedpayoutamount: claimTobeEdited.approvedPayoutAmount,
    // breedtype: claimTobeEdited.breedType,
    // claimamount: claimTobeEdited.claimAmount,
    // claimdate: claimTobeEdited.claimDate,
    // claimtype: claimTobeEdited.claimType,
    // propertyaddress: claimTobeEdited.propertyAddress,
    // reasonforclaim: claimTobeEdited.reasonForClaim,
    // vehiclemake: claimTobeEdited.vehicleMake,
    // vehiclemodel: claimTobeEdited.vehicleModel,
    // vehicleyear: claimTobeEdited.vehicleYear,
  //   actionslog: claimDiary,
  //   tasks: tasks,
  };

  

 const [newClaim, dispatch] = useReducer(formReducer, initialClaimState);





 









  





 
  const handleChange = (event) => {
    dispatch({ field: event.target.id, value: event.target.value });
  };

  






  let showApprove = true;



  
 

  

  const handleClaimHandlerNoteChange = (event) => {
    setClaimHandlerNote(
      new Date().toLocaleString().slice(0, 10) + " - " + event.target.value
    );
  };

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  

  const clickNewTask = (event) => {
    event.preventDefault();
    setAddNewTask(true);
  };

  const saveModifications = (event) => {
    event.preventDefault();

    updateClaim(newClaim);

    alert("Claim Details have been modified");
    props.clearSearch();
    navigate("/OpenClaims");
  };

  const policyTypeChange = (event) => {
    setClaimType(event.target.value);
    handleChange(event);
  };



  return (

    
    
    <div>
      
      <div className="container" id="form-details">
        {!loadingData && 
        <form onSubmit={saveModifications}>
          <div className="row">
            <div className="col">
              <label>Policy Number:</label>
            </div>
            <div className="col">
              <div className="col">
                <input
                  disabled={true}
                  type="text"
                  id="policyNumber"
                  defaultValue={claimTobeEdited.policyNumber}
                />
                <br />
              </div>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label>First Name:</label>
            </div>
            <div className="col">
              <input
                type="text"
                onChange={handleChange}
                id="firstName"
                //value={newClaim.firstName}
                defaultValue={claimTobeEdited.firstName}
              />
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label>Surname:</label>
            </div>
            <div className="col">
              <input
                type="text"
                onChange={handleChange}
                id="surname"
                defaultValue={claimTobeEdited.surname}
              />
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label>Claim Date:</label>
            </div>
            <div className="col">
              <input
                type="date"
                id="claimDate"
                defaultValue={claimTobeEdited.claimDate}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label>Claim Type:</label>
            </div>
            <div className="col">
              <select
                defaultValue={claimTobeEdited.claimType}
                name="claimtype"
                id="claimType"
                onChange={policyTypeChange}
              >
                <option disabled>Select</option>
                <option value="Motor">Motor</option>
                <option value="Property">Property</option>
                <option value="Pet">Pet</option>
              </select>
            </div>
          </div>
          <br />

          {claimType == "Property" && (
            <>
              <div className="row">
                <div className="col">
                  <label>Address of Property:</label>
                </div>
                <div className="col">
                  <textarea
                    id="propertyAddress"
                    defaultValue={claimTobeEdited.propertyAddress}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />
            </>
          )}

          {claimType == "Motor" && (
            <>
              <div className="row">
                <div className="col">
                  <label>Vehicle Make:</label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="vehicleMake"
                    defaultValue={claimTobeEdited.vehicleMake}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col">
                  <label>Vehicle Model:</label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="vehicleModel"
                    defaultValue={claimTobeEdited.vehicleModel}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col">
                  <label>Vehicle Year:</label>
                </div>
                <div className="col">
                  <input
                    type="number"
                    id="vehicleYear"
                    defaultValue={claimTobeEdited.vehicleYear}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />
            </>
          )}

          {claimType == "Pet" && (
            <>
              <div className="row">
                <div className="col">
                  <label>Animal Type:</label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="animalType"
                    defaultValue={claimTobeEdited.animalType}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col">
                  <label>Breed:</label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="breedType"
                    defaultValue={claimTobeEdited.breedType}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />
            </>
          )}

          <div className="row">
            <div className="col">
              <label>Claim Amount (£):</label>
            </div>
            <div className="col">
              <input
                type="number"
                id="claimAmount"
                defaultValue={claimTobeEdited.claimAmount}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label>Reason for Claim:</label>
            </div>
            <div className="col">
              <textarea
                id="reasonForClaim"
                defaultValue={claimTobeEdited.reasonForClaim}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label>Additional Notes:</label>
            </div>
            <div className="col">
              <textarea
                onChange={handleChange}
                id="otherInfo"
                defaultValue={claimTobeEdited.otherInfo}
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label>Claim Status:</label>
            </div>
            <div className="col">
              <select
                defaultValue={claimTobeEdited.claimStatus}
                name="claimstatus"
                id="claimStatus"
                onChange={handleChange}
              >
                <option value="Awaiting Assessment">
                  Awaiting Initial Assessment
                </option>
                <option value="In Progress">In Progress</option>
                <option value="Rejected">Rejected</option>
                <option  disabled={!showApprove} value="Accepted - Awaiting Payment">
                  Accepted - Awaiting Payment
                </option>
                <option disabled={!showApprove} value="Accepted - Paid">Accepted - Paid</option>
                <option value="Escalated">Escalated</option>
              </select>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label> Payout Amount (£):</label>
            </div>
            <div className="col">
              <input
                type="text"
                id="approvedPayoutAmount"
                defaultValue={claimTobeEdited.approvedPayoutAmount}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />

          {/* <TaskTable tasks={tasks} editable={false}setTasks={setTasks} /> */}

          <div className="row">
            {addNewTask && (
              <>
                <div className="col">
                  <label>Add New Task:</label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="newTask"
                    onChange={handleNewTaskChange}
                  />
                </div>
              </>
            )}
            {!addNewTask && <button onClick={clickNewTask}>Add Task</button>}
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label>Claims Handler Note:</label>
            </div>
            <div className="col">
              <input
                type="text"
                id=""
                onChange={handleClaimHandlerNoteChange}
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <div className="center">
                <button>Save Changes</button>
              </div>
            </div>

          </div>
          <br />

          {/* <div className="center"><button>Save</button></div> */}

          <br />
        </form>
}
      </div>
      <br />
            
    </div>
  );
;}
export default EditPolicy;
