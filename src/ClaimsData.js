import axios from "axios";
import { useState } from "react";



const allClaims=[
    {policynumber: 1, sname: "Younger", fname: "Louise", claimdate:"2022-12-14", claimtype:"Motor", 
    vehiclemake:"Honda", vehiclemodel:"Prelude", vehicleyear:1999, 
    propertyaddress:"",
    animaltype:"", breedtype:"",
    claimamount:400, reasonforclaim:"Reversed into a wall, damaged bumper", otherinfo:"",
    claimstatus:"In Progress", approvedpayoutamount:"Pending",
    actionslog:["12/07/2022 - Claim Created", "12/19/2022 - Claim reviewed. Awaiting update from third party"],
    tasks:[{task: "await return of evidence", taskstatus: "Outstanding"}, {task: "send in driving license", taskstatus: "Outstanding"}, {task: "send in ID", taskstatus: "Outstanding"}]},

    {policynumber: 2, sname: "Nixon", fname: "Paddy", claimdate:"2022-10-14", claimtype:"Pet", 
    vehiclemake:"", vehiclemodel:"", vehicleyear:"", 
    propertyaddress:"",
    animaltype:"Hamster", breedtype:"Dwarf",
    claimamount:250, reasonforclaim:"Expensive Hamster. Escaped out the back door", otherinfo:"Hamster imported from Timbucktoo",
    claimstatus:"Awaiting Assessment", approvedpayoutamount:"Pending",
    actionslog:["10/29/2022 - Claim Created"],
    tasks:[{task: "send picture of animal", taskstatus: "Completed"}, {task: "send in proof of ownership", taskstatus: "Outstanding"}, {task: "send in ID", taskstatus: "Outstanding"}]},

    {policynumber: 3, sname: "Quinn", fname: "Anne Marie", claimdate:"2022-11-19", claimtype:"Property", 
    vehiclemake:"", vehiclemodel:"", vehicleyear:"", 
    propertyaddress:"123 Up The Road, Ballymac, Derry",
    animaltype:"", breedtype:"",
    claimamount:500, reasonforclaim:"Burnt the kitchen blinds making a pot noodle", otherinfo:"It was a Bombay Badboy flavoured one",
    claimstatus:"Awaiting Assessment", approvedpayoutamount:"Pending",
    actionslog:["11/12/2022 - Claim Created"],
    tasks:[]},

    {policynumber: 4, sname: "Temple", fname: "Chris", claimdate:"2021-08-03", claimtype:"Property", 
    vehiclemake:"", vehiclemodel:"", vehicleyear:"", 
    propertyaddress:"45 Around The Corner, Creggan, Belfast",
    animaltype:"", breedtype:"",
    claimamount:350, reasonforclaim:"Golfball came through a large window in the sun-room", otherinfo:"Fore!",
    claimstatus:"Accepted - Awaiting Payment", approvedpayoutamount:200,
    actionslog:["09/19/2022 - Claim Created", "10/01/2022 - Claim reviewed. Passed to adjustors", "10/07/2022 - Requested photo evidence from claimant", "11/10/2022 - evidence received, passed for approval", "11/25/2022 - 200 approved"],
    tasks:[{task: "send photos of damage", taskstatus: "Completed"}, {task: "send in quote for repairs", taskstatus: "Completed"}]},

    {policynumber: 5, sname: "Doherty", fname: "Rachel", claimdate:"2022-06-25", claimtype:"Pet", 
    vehiclemake:"", vehiclemodel:"", vehicleyear:"", 
    propertyaddress:"",
    animaltype:"Dog", breedtype:"Jack Russell",
    claimamount:500, reasonforclaim:"Vet Bills", otherinfo:"",
    claimstatus:"Rejected", approvedpayoutamount:0,
    actionslog:[ "12/17/2022 - Claim Created", "12/19/2022 - Dog recovered without needing surgery"],
    tasks:[{task: "Send in Vets report", taskstatus: "Completed"}]},

    {policynumber: 6, sname: "Laughlin", fname: "Chris", claimdate:"2022-10-14", claimtype:"Motor", 
    vehiclemake:"Peugeot", vehiclemodel:"306", vehicleyear:2012, 
    propertyaddress:"",
    animaltype:"", breedtype:"",
    claimamount:200, reasonforclaim:"Wing mirror needs replaced after clipping a lamp post", otherinfo:"The lamp post is ok",
    claimstatus:"Accepted - Paid", approvedpayoutamount:200,
    actionslog:["10/19/2022- Claim Created", "10/22/2022 - Evidence requested from claimant", "11/01/2022 - Evidenced received, passed for approval", "11/09/2022 - Approval confirmed for £200", "11/15/2022 - Funds sent to claimand bank. Claim closed down"],
    tasks:[{task: "send photos of damage", taskstatus: "Completed"}, {task: "send in quote for repairs", taskstatus: "Completed"}]},

    {policynumber: 7, sname: "Williamson", fname: "Mark", claimdate:"2022-09-28", claimtype:"Motor", 
    vehiclemake:"Lamborghini", vehiclemodel:"Galardo", vehicleyear:2019, 
    propertyaddress:"",
    animaltype:"", breedtype:"",
    claimamount:3000, reasonforclaim:"Rear-ended by uninsured driver", otherinfo:"",
    claimstatus:"Escalated", approvedpayoutamount:"Pending",
    actionslog:["11/03/2022- Claim Created", "11/06/2022 - Escalated to main platform"],
    tasks:[]},

    
]



 export const getAllClaims = () => { 
    return  allClaims;  
}


// export const addNewClaim = (newClaim) => {
//     const newList = [...allClaims,newClaim];
//     console.log(newList); 

// }


export const addNewClaim = (claim) => {
    return axios({url : "http://localhost:8080/api/claim",
                    method: "POST",
                    headers: {"Accept" : "application/json", "Content-Type": "application/json"},
                    data : claim
                })
            }



export const getClaimById = (claimId) => {
  return axios({url : "http://localhost:8080/api/claim/" + claimId,
  method:"GET",
  headers:{"Accept" : "application/json"}
  })
}





export const getAllClaimsAxios = () => {
  return axios({url : "http://localhost:8080/api/claim",
                method:"GET",
                headers:{"Accept" : "application/json"}
                })
                


}


export const getAllActionsAxios = () => {
    return axios({url : "http://localhost:8080/api/actions",
                 method:"GET",
                 headers:{"Accept" : "application/json"}
                })
          }



 // export default getAllClaims;