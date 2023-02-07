import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getActionsByPolicy, getTasksByPolicy } from "./ClaimsData";
import TaskTable from "./TaskTable";

const editing="false";

const PolicyDetails = (props) => {
  const [taskToUpdate, setTaskToUpdate] = useState("");
  const [displayLog, setDisplayLog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const[actionsList, setActionsList] = useState("");
  const [tasksList, setTasksList] = useState("");

  let actions = [];



  if(actionsList !== ""){
     actions = [...actionsList].sort((d1,d2) => new Date(d1.actionDate).getTime() - new Date(d2.actionDate).getTime());
  }

  


  useEffect(() => {
    if(actionsList == ""){

     getActionsByPolicy(props.policy.policyNumber)
   .then(response => {setActionsList(response.data)})  
   
    }

    getTasksByPolicy(props.policy.policyNumber)
    .then(response => {setTasksList(response.data)})

    setIsLoading(false);

 },[props.policy])





 useEffect(() => {
  if(tasksList == ""){

    console.log(props.policy)


  getTasksByPolicy(props.policy.policyNumber)
  .then(response => {setTasksList(response.data)})
 
  }



  setIsLoading(false);

},[props.policy])













 
  const navigate = useNavigate();

  const clickEdit = (event) => {
    event.preventDefault();
    navigate(`/editpolicy/${props.policy.policyNumber}`);
  };

  const canBeEdited = () => {
    if (
      props.policy.claimStatus == "Rejected" ||
      props.policy.claimStatus == "Accepted - Paid"
    ) {
      return false;
    }
    return true;
  };

  const logDisplay = (event) => {
    event.preventDefault();
    setDisplayLog(!displayLog);
  };

  const tasks = tasksList;
  //console.log("Tasks are .. " + tasks);

  return (

    <>
    {!isLoading &&

   
    <div>
      <div
        className="container"
        id={canBeEdited() ? "form-details" : "form-details-closed"}
      >
        <form onSubmit={clickEdit}>
          <div className="row">
            <div className="col">
              <label className="bolden">Policy Number:</label>
            </div>
            <div className="col">
              <span> {props.policy.policyNumber} </span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden">Name:</label>
            </div>
            <div className="col">
              <span>
                {props.policy.firstName} {props.policy.surname}
              </span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden" htmlFor="claimType" >Claim Type:</label>
            </div>
            <div className="col">
              <span id="claimType" name="claimType">{props.policy.claimType}</span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden">Date of Claim:</label>
            </div>
            <div className="col">
              <span>{props.policy.claimDate}</span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden">Reason for Claim:</label>
            </div>
            <div className="col">
              <span>{props.policy.reasonForClaim}</span>
              <br />
            </div>
          </div>
          <br />

          {props.policy.claimType === "Motor" && (
            <>
              <div className="row">
                <div className="col">
                  <label className="bolden">Vehicle:</label>
                </div>
                <div className="col">
                  <span>
                    {props.policy.vehicleYear} {props.policy.vehicleMake}{" "}
                    {props.policy.vehicleModel}
                  </span>
                  <br />
                </div>
              </div>
              <br />
            </>
          )}

          {props.policy.claimType === "Property" && (
            <>
              <div className="row">
                <div className="col">
                  <label className="bolden">Address of Property:</label>
                </div>
                <div className="col">
                  <span>{props.policy.propertyAddress}</span>
                  <br />
                </div>
              </div>
              <br />
            </>
          )}

          {props.policy.claimType === "Pet" && (
            <>
              <div className="row">
                <div className="col">
                  <label className="bolden">Animal Type:</label>
                </div>
                <div className="col">
                  <span>{props.policy.animalType}</span>
                  <br />
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col">
                  <label className="bolden">Animal Breed:</label>
                </div>
                <div className="col">
                  <span>{props.policy.breedType}</span>
                  <br />
                </div>
              </div>
              <br />
            </>
          )}

          <div className="row">
            <div className="col">
              <label className="bolden">Claim Amount:</label>
            </div>
            <div className="col">
              <span>£ {props.policy.claimAmount}</span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden">Additional Notes:</label>
            </div>
            <div className="col">
              <span>{props.policy.otherInfo}</span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden">Claim Status:</label>
            </div>
            <div className="col">
              <span>{props.policy.claimStatus}</span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden">Payout Amount:</label>
            </div>
            <div className="col">
              <span>
                {" "}
                {props.policy.approvedPayoutAmount !== "Pending" && `£`}{" "}
                {props.policy.approvedPayoutAmount}
              </span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden">Follow-up Tasks:</label>
            </div>
            {tasksList !== "" && <><TaskTable editable={true} tasks={tasks} setTaskToUpdate={setTaskToUpdate} /> 
             <div className="col"><span> {props.policy.task}</span><br/></div> </>}
          </div>

          <div className="row">
            <div className="col">
              {canBeEdited() && (
                <div className="center">
                  <button>Edit Claim</button>
                </div>
              )}
            </div>
            <div className="col">
              <div className="center">
                <button onClick={logDisplay}>
                  {!displayLog ? "Show" : "Hide"} Log Details
                </button>
              </div>
              <br />
            </div>
          </div>

          {!canBeEdited() && (
            <div className="center">
              <h1>Claim Closed</h1>
            </div>
          )}

          <br />
        </form>
      </div>
      <br />

      {displayLog && (
        <>
          <h2 className="center">Log</h2>
          <div className="container" id="form-details">
            <ul>
              
              
              {actions.map((claim, index) => (
                <div key={index}>                  

                      <li>
                    <strong>{claim.actionTaken.slice(0, 10)}</strong>
                    {claim.actionTaken.slice(10)}
                  </li>
                  

                </div>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
}</>);
};

export default PolicyDetails;
