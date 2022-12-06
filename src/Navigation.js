import "./claims.css"
import{Outlet, NavLink} from "react-router-dom";


const Navigation = () =>{

    return(

        <div>

    <div className="title-bar">
    <h1>SpeedyClaims</h1>
   <img className="logo" height="100%" src="crash.jpg"/>
</div>

<div id="button-bar">    
  <div className="container">
 <div className="row">
    <div className="col-md-3 col-6"><NavLink to="/newclaim" ><button className="btn btn-secondary">New Claim</button></NavLink></div> 
    <div className="col-md-3 col-6"><NavLink to="/openclaims" ><button className="btn btn-secondary">Open Claims</button></NavLink></div> 
    <div className="col-md-3 col-6"><NavLink to="/search" ><button className="btn btn-secondary">Search</button></NavLink></div> 
    <div className="col-md-3 col-6"><NavLink to="/newclaim" ><button className="btn btn-secondary">Archive</button></NavLink></div> 

 </div>     
</div>
</div>
<br/>
<Outlet />
</div>
    )

}
export default Navigation;