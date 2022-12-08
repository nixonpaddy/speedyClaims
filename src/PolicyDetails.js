

const PolicyDetails = (props) => {

    return(

        <div>


        <div className="container" id="form-details">
            
          <form>
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
      
            
            <br/>
 
          </form>
        </div>
        <br/>

        

      

        </div>
    )
  
}

export default PolicyDetails;