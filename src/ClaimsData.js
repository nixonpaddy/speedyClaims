import { useState } from "react";


// const allClaims =[
//     {policy_number: 1, sname: "Nixon", fname: "Paddy", status: "open", additional_notes:"No other party involved"},
//     {policy_number: 2, sname: "Quinn", fname: "Anne Marie", status: "closed", additional_notes:"Skid on ice"},
//     {policy_number: 3, sname: "Temple", fname: "Chris", status: "open", additional_notes:"Vechicle stolen"},
//     {policy_number: 4, sname: "Grimes", fname: "Nathan", status: "open", additional_notes:"" },
//     {policy_number: 5, sname: "Doherty", fname: "Rachel", status: "closed", additional_notes:"Vehicle to be written off"},
//     {policy_number: 6, sname: "Laughlin", fname: "Chris", status: "closed", additional_notes:"Reversed into a wall"},
//     {policy_number: 7, sname: "Williamson", fname: "Mark", status: "awaiting more info", additional_notes:"need proof of MOT"},
//     {policy_number: 8, sname: "Hannigan", fname: "Sinead", status: "open", additional_notes:"Car went on fire"},
//     {policy_number: 9, sname: "Harrison", fname: "Nichola", status: "awaiting more info", additional_notes:""},
//     {policy_number: 10, sname: "Irvine", fname: "Brian", status: "open", additional_notes:"2-car collision"},
//     {policy_number: 11, sname: "Younger", fname: "Louise", status: "open", additional_notes:"Vehicle stolen"}
// ]


const allClaims=[
    {policynumber: 1, sname: "Younger", fname: "Louise", claimdate:"2022-12-14", claimtype:"Motor", 
    vehiclemake:"Honda", vehiclemodel:"Prelude", vehicleyear:1999, 
    propertyaddress:"",
    animaltype:"", breedtype:"",
    claimamount:400, reasonforclaim:"Reversed into a wall, damaged bumper", otherinfo:"",
    claimstatus:"In Progress", approvedpayoutamount:"Pending"},

    {policynumber: 2, sname: "Nixon", fname: "Paddy", claimdate:"2022-10-14", claimtype:"Pet", 
    vehiclemake:"", vehiclemodel:"", vehicleyear:"", 
    propertyaddress:"",
    animaltype:"Hamster", breedtype:"Dwarf",
    claimamount:250, reasonforclaim:"Expensive Hamster. Escaped out the back door", otherinfo:"Hamster imported from Timbucktoo",
    claimstatus:"Awaiting Assessment", approvedpayoutamount:"Pending"},

    {policynumber: 3, sname: "Quinn", fname: "Anne Marie", claimdate:"2022-11-19", claimtype:"Property", 
    vehiclemake:"", vehiclemodel:"", vehicleyear:"", 
    propertyaddress:"123 Up The Road, Ballymac, Derry",
    animaltype:"", breedtype:"",
    claimamount:500, reasonforclaim:"Burnt the kitchen blinds making a pot noodle", otherinfo:"It was a Bombay Badboy flavoured one",
    claimstatus:"Awaiting Assessment", approvedpayoutamount:"Pending"},

    {policynumber: 4, sname: "Temple", fname: "Chris", claimdate:"2021-08-03", claimtype:"Property", 
    vehiclemake:"", vehiclemodel:"", vehicleyear:"", 
    propertyaddress:"45 Around The Corner, Creggan, Belfast",
    animaltype:"", breedtype:"",
    claimamount:350, reasonforclaim:"Golfball came through a large window in the sun-room", otherinfo:"Fore!",
    claimstatus:"Accepted - Awaiting Payment", approvedpayoutamount:200},

    {policynumber: 5, sname: "Doherty", fname: "Rachel", claimdate:"2022-06-25", claimtype:"Pet", 
    vehiclemake:"", vehiclemodel:"", vehicleyear:"", 
    propertyaddress:"",
    animaltype:"Dog", breedtype:"Jack Russell",
    claimamount:500, reasonforclaim:"Vet Bills", otherinfo:"",
    claimstatus:"Rejected", approvedpayoutamount:0},

    {policynumber: 6, sname: "Laughlin", fname: "Chris", claimdate:"2022-10-14", claimtype:"Motor", 
    vehiclemake:"Peugeot", vehiclemodel:"306", vehicleyear:2012, 
    propertyaddress:"",
    animaltype:"", breedtype:"",
    claimamount:200, reasonforclaim:"Wing mirror needs replaced after clipping a lamp post", otherinfo:"The lamp post is ok",
    claimstatus:"Accepted - Paid", approvedpayoutamount:200},

    {policynumber: 7, sname: "Williamson", fname: "Mark", claimdate:"2022-09-28", claimtype:"Motor", 
    vehiclemake:"Lamborghini", vehiclemodel:"Galardo", vehicleyear:2019, 
    propertyaddress:"",
    animaltype:"", breedtype:"",
    claimamount:3000, reasonforclaim:"Rear-ended by uninsured driver", otherinfo:"",
    claimstatus:"Escalated", approvedpayoutamount:"Pending"},

    
]



 export const getAllClaims = () => { 
    return  allClaims;  
}


export const addNewClaim = (newClaim) => {
    const newList = [...allClaims,newClaim];
    console.log(newList); 

}



  export default getAllClaims;