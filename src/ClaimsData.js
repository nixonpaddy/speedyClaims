import { useState } from "react";


const allClaims =[
    {policy_number: 1, sname: "Nixon", fname: "Paddy", status: "open", additional_notes:"No other party involved"},
    {policy_number: 2, sname: "Quinn", fname: "Anne Marie", status: "closed", additional_notes:"Skid on ice"},
    {policy_number: 3, sname: "Temple", fname: "Chris", status: "open", additional_notes:"Vechicle stolen"},
    {policy_number: 4, sname: "Grimes", fname: "Nathan", status: "open", additional_notes:"" },
    {policy_number: 5, sname: "Doherty", fname: "Rachel", status: "closed", additional_notes:"Vehicle to be written off"},
    {policy_number: 6, sname: "Laughlin", fname: "Chris", status: "closed", additional_notes:"Reversed into a wall"},
    {policy_number: 7, sname: "Williamson", fname: "Mark", status: "awaiting more info", additional_notes:"need proof of MOT"},
    {policy_number: 8, sname: "Hannigan", fname: "Sinead", status: "open", additional_notes:"Car went on fire"},
    {policy_number: 9, sname: "Harrison", fname: "Nichola", status: "awaiting more info", additional_notes:""},
    {policy_number: 10, sname: "Irvine", fname: "Brian", status: "open", additional_notes:"2-car collision"},
    {policy_number: 11, sname: "Younger", fname: "Louise", status: "open", additional_notes:"Vehicle stolen"}
]



 export const getAllClaims = () => { 
    return  allClaims;  
}


export const addNewClaim = (newClaim) => {
    const newList = [...allClaims,newClaim];
    console.log(newList); 

}



  export default getAllClaims;