import { useEffect, useState } from "react";
// import { propTypes } from "react-bootstrap/esm/Image";
// import getAllClaims from "./ClaimsData";
// import PolicyDetails from "./PolicyDetails";
import TaskRow from "./TaskRow";

const TaskTable = ({tasks,setTasks, editable}) => {

    const [taskToUpdate, setTasktoUpdate] = useState("");

    const markTaskComplete = (position) => {
        const newTasks = [...tasks];
        newTasks[position].taskstatus = 'Completed'
        setTasks(newTasks);
    }



    console.log(tasks);



    

    return(
        <>    

         <>
         <br/>
        <div className="container"  >

            <br/>
        <table>
            <thead>
                <tr>
                <th>Task</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) =>  task.taskstatus !=="Completed" && <TaskRow editable={editable} task={task} markTaskComplete={markTaskComplete} position={index} key={index} taskPosition={index} setTaskToUpdate={setTasktoUpdate}/>)}

            </tbody>
        </table>
        <br/>


        

        </div></>

        {/* {selectedPolicy !== "" && <><h2 className="center">Claim Details</h2> <PolicyDetails policy={searchResults[selectedPolicy]}/></>} */}

        </>
    )

  
}

export default TaskTable;