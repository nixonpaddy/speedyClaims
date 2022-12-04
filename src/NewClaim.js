import "./claims.css"

const NewClaim = () => {
    return(

        <div>

        <h1 className="heading">New Claim</h1>
        <br/>
        <br/>
        <div className="container" id="form-details">
          <form>
            <div className="row">
              <div className="col"><label>Policy Number:</label></div>
              <div className="col"><input type="text"/><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>First Name:</label></div>
              <div className="col"><input type="text"/><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>Surname:</label></div>
              <div className="col"><input type="text"/><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>Email:</label></div>
              <div className="col"><input type="email"/><br/></div>
            </div><br/>
      
            <div className="row">
              <div className="col"><label>Phone Number:</label></div>
              <div className="col"><input type="number"/><br/></div>
            </div><br/>
            
            <br/>
            <div className="submit-button"><button>Submit</button></div>
          </form>
        </div>

        </div>
      

    )
}

export default NewClaim;