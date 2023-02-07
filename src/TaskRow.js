

const TaskRow = (props) => {

    let buttonDisabled = true;


    const clickComplete = (event) => {
        event.preventDefault();
        props.markTaskComplete(props.position)
        console.log(props.position)
    }

  
    return(
        <>
        <tr>
            <td>{props.task.taskDetails}</td>
            <td><button disabled={props.editable} value={props.position} onClick={clickComplete}>Mark Complete</button></td>            
        </tr>        
        </>
    )
}

export default TaskRow;