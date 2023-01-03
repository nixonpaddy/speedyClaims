const AddTask = (props) => {
  return(
    <>

    <div className="row">
    <div className="col"><label>Follow-up Task:</label></div>
    <div className="col"><input type="text" defaultValue={props.claimTobeEdited[0].task} id="task"   /><button>Mark Complete</button></div>
  </div><br/>

    </>


  )
}
export default AddTask;