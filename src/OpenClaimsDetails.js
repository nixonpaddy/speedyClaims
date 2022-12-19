// import { useNavigate } from "react-router-dom";
// import "./claims.css"
// import { getAllClaims } from "./ClaimsData";


// const OpenClaimsDetails = (props) => {
//   const navigate = useNavigate();

//     const allClaims = getAllClaims();
//     const policyNumber = props.policy_number;

//     const openClaims = allClaims.filter((claim,index) =>claim.status === "open");

//     const clickEdit = (event) => {
//       event.preventDefault();
      
//       navigate(`/editpolicy/${policyNumber}`);
//     }




//     return(

//         <div>


//         <div className="container" id="form-details">
            
//           <form onSubmit = {clickEdit}>
//             <div className="row">
//               <div className="col"><label>Policy Number:</label></div>
//               <div className="col"><span> {props.policy_number} </span><br/></div>
//             </div><br/>
      
//             <div className="row">
//               <div className="col"><label>First Name:</label></div>
//               <div className="col"><span>{props.fname}</span><br/></div>
//             </div><br/>
      
//             <div className="row">
//               <div className="col"><label>Surname:</label></div>
//               <div className="col"><span>{props.sname}</span><br/></div>
//             </div><br/>
      
//             <div className="row">
//               <div className="col"><label>Claim Status:</label></div>
//               <div className="col"><span>{props.status}</span><br/></div>
//             </div><br/>

//             <div className="row">
//               <div className="col"><label>Additional Notes:</label></div>
//               <div className="col"><span>{props.additionalNotes}</span><br/></div>
//             </div><br/>

//             <button className="edit-button">Edit Details</button>
      
            
//             <br/>
 
//           </form>
//         </div>
//         <br/>

        

      

//         </div>

    
      

//     )
// }

// export default OpenClaimsDetails;