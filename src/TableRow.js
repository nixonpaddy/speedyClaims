


const TableRow = (props) => {

    const showClaimDetails = (event) => {
        event.preventDefault();
        props.setSelectedPolicy(props.position);
        props.setDisplaySearch(false);

      }

  
    return(
        <>
        <tr>
            <td>{props.claim.policy_number}</td>
            <td>{props.claim.sname}</td>
            <td>{props.claim.status}</td>
            <td><button onClick={showClaimDetails} >Claim Details</button></td>            
        </tr>        
        </>
    )
}

export default TableRow;