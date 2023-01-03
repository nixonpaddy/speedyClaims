import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskTable from "./TaskTable";

const editing="false";

const PolicyDetails = (props) => {
  const [taskToUpdate, setTaskToUpdate] = useState("");
  const [displayLog, setDisplayLog] = useState(false);

  const navigate = useNavigate();

  const clickEdit = (event) => {
    event.preventDefault();
    navigate(`/editpolicy/${props.policy.policynumber}`);
  };

  const canBeEdited = () => {
    if (
      props.policy.claimstatus == "Rejected" ||
      props.policy.claimstatus == "Accepted - Paid"
    ) {
      return false;
    }
    return true;
  };

  const logDisplay = (event) => {
    event.preventDefault();
    setDisplayLog(!displayLog);
  };

  const tasks = props.policy.tasks;
  console.log(tasks);

  return (
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
              <span> {props.policy.policynumber} </span>
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
                {props.policy.fname} {props.policy.sname}
              </span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden">Claim Type:</label>
            </div>
            <div className="col">
              <span>{props.policy.claimtype}</span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden">Date of Claim:</label>
            </div>
            <div className="col">
              <span>{props.policy.claimdate}</span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden">Reason for Claim:</label>
            </div>
            <div className="col">
              <span>{props.policy.reasonforclaim}</span>
              <br />
            </div>
          </div>
          <br />

          {props.policy.claimtype === "Motor" && (
            <>
              <div className="row">
                <div className="col">
                  <label className="bolden">Vehicle:</label>
                </div>
                <div className="col">
                  <span>
                    {props.policy.vehicleyear} {props.policy.vehiclemake}{" "}
                    {props.policy.vehiclemodel}
                  </span>
                  <br />
                </div>
              </div>
              <br />
            </>
          )}

          {props.policy.claimtype === "Property" && (
            <>
              <div className="row">
                <div className="col">
                  <label className="bolden">Address of Property:</label>
                </div>
                <div className="col">
                  <span>{props.policy.propertyaddress}</span>
                  <br />
                </div>
              </div>
              <br />
            </>
          )}

          {props.policy.claimtype === "Pet" && (
            <>
              <div className="row">
                <div className="col">
                  <label className="bolden">Animal Type:</label>
                </div>
                <div className="col">
                  <span>{props.policy.animaltype}</span>
                  <br />
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col">
                  <label className="bolden">Animal Breed:</label>
                </div>
                <div className="col">
                  <span>{props.policy.breedtype}</span>
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
              <span>£ {props.policy.claimamount}</span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden">Additional Notes:</label>
            </div>
            <div className="col">
              <span>{props.policy.otherinfo}</span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden">Claim Status:</label>
            </div>
            <div className="col">
              <span>{props.policy.claimstatus}</span>
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
                {props.policy.approvedpayoutamount !== "Pending" && `£`}{" "}
                {props.policy.approvedpayoutamount}
              </span>
              <br />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col">
              <label className="bolden">Follow-up Tasks:</label>
            </div>
            <TaskTable editable={true} tasks={tasks} setTaskToUpdate={setTaskToUpdate} />
            {/* <div className="col"><span> {props.policy.task}</span><br/></div> */}
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
              {props.policy.actionslog.map((claim, index) => (
                <div key={index}>
                  <li>
                    <strong>{claim.slice(0, 10)}</strong>
                    {claim.slice(10)}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default PolicyDetails;
