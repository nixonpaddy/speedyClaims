


const TableRow = (props) => {

    const showClaimDetails = (event) => {
        event.preventDefault();
        props.setSelectedPolicy(props.position);
        props.setDisplaySearch(false);

      }

  
    return(
        <>
        <tr>
            <td>{props.claim.policyNumber}</td>
            <td>{props.claim.claimType}</td>
            <td>{props.claim.surname}</td>
            <td>{props.claim.claimStatus}</td>
            <td><button onClick={showClaimDetails} >Claim Details</button></td>            
        </tr>        
        </>
    )
}

export default TableRow;