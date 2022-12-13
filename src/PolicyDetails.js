import { useNavigate } from "react-router-dom";



const PolicyDetails = (props) => {

  const navigate = useNavigate();

  const clickEdit = (event) => {
    event.preventDefault();
    navigate(`/editpolicy/${props.policy.policy_number}`);
  
}

    return(

        <div>


        <div className="container" id="form-details">
            
          <form onSubmit={clickEdit}>
            <div className="row">
              <div className="col"><label>Policy Number:</label></div>
              <div className="col"><span> {props.policy.policy_number} </span><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>First Name:</label></div>
              <div className="col"><span>{props.policy.fname}</span><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>Surname:</label></div>
              <div className="col"><span>{props.policy.sname}</span><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>Claim Status:</label></div>
              <div className="col"><span>{props.policy.status}</span><br/></div>
            </div><br/>

            <div className="row">
              <div className="col"><label>Additional Notes:</label></div>
              <div className="col"><span>{props.policy.additional_notes}</span><br/></div>
            </div><br/>

            <button>Edit Details</button>
      
            
            <br/>
 
          </form>
        </div>
        <br/>

        

      

        </div>
    )
  
}

export default PolicyDetails;