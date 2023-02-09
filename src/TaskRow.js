import { useState } from "react";
import { updateTask } from "./ClaimsData";



const TaskRow = (props) => {
    const[claimStatus, setclaimStatus] = useState(props.task.taskStatus);    


    const clickComplete = (event) => {
        event.preventDefault();        
        updateTask(props.task);
        props.setTaskToUpdate(!props.taskToUpdate);
        setclaimStatus("Completed"); 
    }

  
    return(
        <>
        {claimStatus == "Outstanding" && <>
        <tr>
            
            <td>{props.task.taskDetails}</td>
            <td><button disabled={props.task.taskStatus == "Completed" || !props.editable ? true : false} value={props.position} onClick={clickComplete}>Mark Complete</button></td>            
        
        </tr>        
        </>}</>
    )
}

export default TaskRow;

