import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AddTask from "./AddTask";
import TaskTable from "./TaskTable";

export const EditPolicy = (props) => {
  const formReducer = (state, data) => {
    return { ...state, [data.field]: data.value };
  };

 
  const handleChange = (event) => {
    dispatch({ field: event.target.id, value: event.target.value });
    //console.log(newClaim);
  };

  const navigate = useNavigate();
  const { policyNumber } = useParams();
  const claimTobeEdited = props.claimsList.filter(
    (claim, index) => claim.policynumber == policyNumber
  );
  const [claimType, setClaimType] = useState(claimTobeEdited[0].claimtype);
  const [claimHandlerNote, setClaimHandlerNote] = useState("");
  const [claimDiary, setClaimDiary] = useState(
    props.claimsList.filter(
      (claim, index) => claim.policynumber == claimTobeEdited[0].policynumber
    )[0].actionslog
  );
  const [tasks, setTasks] = useState(claimTobeEdited[0].tasks);
  
  const [newTask, setNewTask] = useState("");

  const initialClaimState = {
    policynumber: claimTobeEdited[0].policynumber,
    fname: claimTobeEdited[0].fname,
    sname: claimTobeEdited[0].sname,
    claimstatus: claimTobeEdited[0].claimstatus,
    otherinfo: claimTobeEdited[0].otherinfo,
    animaltype: claimTobeEdited[0].animaltype,
    approvedpayoutamount: claimTobeEdited[0].approvedpayoutamount,
    breedtype: claimTobeEdited[0].breedtype,
    claimamount: claimTobeEdited[0].claimamount,
    claimdate: claimTobeEdited[0].claimdate,
    claimtype: claimTobeEdited[0].claimtype,
    propertyaddress: claimTobeEdited[0].propertyaddress,
    reasonforclaim: claimTobeEdited[0].reasonforclaim,
    vehiclemake: claimTobeEdited[0].vehiclemake,
    vehiclemodel: claimTobeEdited[0].vehiclemodel,
    vehicleyear: claimTobeEdited[0].vehicleyear,
    actionslog: claimDiary,
    tasks: tasks,
  };

  const outstandingTasks = claimTobeEdited[0].tasks.filter((task,index) => task.taskstatus == "Outstanding");


  let showApprove = true;

  if(outstandingTasks.length > 0){
    showApprove=false;
  }

  
  console.log(outstandingTasks.length)

  
 

  const [newClaim, dispatch] = useReducer(formReducer, initialClaimState);

  const handleClaimHandlerNoteChange = (event) => {
    setClaimHandlerNote(
      new Date().toLocaleString().slice(0, 10) + " - " + event.target.value
    );
  };

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const [addNewTask, setAddNewTask] = useState(false);

  const clickNewTask = (event) => {
    event.preventDefault();
    setAddNewTask(true);
  };

  const saveModifications = (event) => {
    event.preventDefault();

    const moddedList = props.claimsList.filter(
      (claim, index) => claim.policynumber !== claimTobeEdited[0].policynumber
    );

    setClaimDiary(claimDiary.push(claimHandlerNote));
    if (newTask !== "") {
      setTasks(tasks.push({ task: newTask, taskstatus: "Outstanding" }));
    }
    newClaim.actionslog = claimDiary;

    props.setNewClaimsList([...moddedList, newClaim]);

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
                  id="policynumber"
                  defaultValue={claimTobeEdited[0].policynumber}
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
                id="fname"
                value={newClaim.fname}
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
                id="sname"
                defaultValue={claimTobeEdited[0].sname}
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
                id="claimdate"
                defaultValue={claimTobeEdited[0].claimdate}
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
                defaultValue={claimTobeEdited[0].claimtype}
                name="claimtype"
                id="claimtype"
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
                    id="propertyaddress"
                    defaultValue={claimTobeEdited[0].propertyaddress}
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
                    id="vehiclemake"
                    defaultValue={claimTobeEdited[0].vehiclemake}
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
                    id="vehiclemodel"
                    defaultValue={claimTobeEdited[0].vehiclemodel}
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
                    id="vehicleyear"
                    defaultValue={claimTobeEdited[0].vehicleyear}
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
                    id="animaltype"
                    defaultValue={claimTobeEdited[0].animaltype}
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
                    id="breedtype"
                    defaultValue={claimTobeEdited[0].breedtype}
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
                id="claimamount"
                defaultValue={claimTobeEdited[0].claimamount}
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
                id="reasonforclaim"
                defaultValue={claimTobeEdited[0].reasonforclaim}
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
                id="otherinfo"
                defaultValue={claimTobeEdited[0].otherinfo}
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
                defaultValue={claimTobeEdited[0].claimstatus}
                name="claimstatus"
                id="claimstatus"
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
                id="approvedpayoutamount"
                defaultValue={claimTobeEdited[0].approvedpayoutamount}
                onChange={handleChange}
              />
            </div>
          </div>
          <br />

          <TaskTable tasks={tasks} editable={false}setTasks={setTasks} />

          <div className="row">
            {addNewTask && (
              <>
                <div className="col">
                  <label>Add New Task:</label>
                </div>
                <div className="col">
                  <input
                    type="text"
                    id="newtask"
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
      </div>
      <br />
    </div>
  );
};
export default EditPolicy;
