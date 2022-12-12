import "./claims.css"
import { getAllClaims } from "./ClaimsData";


const OpenClaimsDetails = (props) => {

    const allClaims = getAllClaims();

    const openClaims = allClaims.filter((claim,index) =>claim.status === "open");




    return(

        <div>


        <div className="container" id="form-details">
            
          <form>
            <div className="row">
              <div className="col"><label>Policy Number:</label></div>
              <div className="col"><span> {props.policy_number} </span><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>First Name:</label></div>
              <div className="col"><span>{props.fname}</span><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>Surname:</label></div>
              <div className="col"><span>{props.sname}</span><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>Claim Status:</label></div>
              <div className="col"><span>{props.status}</span><br/></div>
            </div><br/>
      
            
            <br/>
 
          </form>
        </div>
        <br/>

        

      

        </div>

    
      

    )
}

export default OpenClaimsDetails;