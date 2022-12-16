


const TableRow = (props) => {

    const showClaimDetails = (event) => {
        event.preventDefault();
        props.setSelectedPolicy(props.position);
        props.setDisplaySearch(false);

      }

  
    return(
        <>
        <tr>
            <td>{props.claim.policynumber}</td>
            <td>{props.claim.claimtype}</td>
            <td>{props.claim.sname}</td>
            <td>{props.claim.claimstatus}</td>
            <td><button onClick={showClaimDetails} >Claim Details</button></td>            
        </tr>        
        </>
    )
}

export default TableRow;