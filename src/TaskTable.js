import { useState } from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({tasks, setTasks, editable, claimId, setOutstandingTasks, outstandingTasks}) => {

    const [taskToUpdate, setTasktoUpdate] = useState(true);

    const markTaskComplete = (position) => {
        const newTasks = [...tasks];
        newTasks[position].taskstatus = 'Completed'
        setTasks(newTasks);
        setOutstandingTasks(false);
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
                {tasks.map((task, index) =>   <TaskRow editable={editable} task={task} markTaskComplete={markTaskComplete} position={index} key={index} taskPosition={index} claimId={claimId} taskToUpdate = {taskToUpdate} setTaskToUpdate={setTasktoUpdate}/>)}

            </tbody>
        </table>
        <br/>


        

        </div></>

        {/* {selectedPolicy !== "" && <><h2 className="center">Claim Details</h2> <PolicyDetails policy={searchResults[selectedPolicy]}/></>} */}

        </>
    )

  
}

export default TaskTable;