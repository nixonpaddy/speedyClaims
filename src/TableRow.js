
import { useParams } from "react-router-dom";
import ResultsTable from "./ResultsTable";

const TableRow = (props) => {

    const params = useParams();


    //console.log(props.claim[0].policy_number);
    //console.log(params);
  
    return(
        <>
        <tr>
            <td>{props.claim[0].policy_number}</td>
            <td>{props.claim[0].sname}</td>
            <td>{props.claim[0].status}</td>
            <td><button >Claim Details</button></td>
            
        </tr>
        
        </>
    )

}

export default TableRow;