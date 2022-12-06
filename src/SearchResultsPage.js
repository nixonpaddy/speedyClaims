import { useParams } from "react-router-dom";
import ResultsTable from "./ResultsTable";


const SearchResultsPage = (props) => {

    const params = useParams();

    //props.setSearchTerm(params.policyNumber);

    return(
        <>        
        <ResultsTable searchTerm={params.policyNumber}/>           
        
        </>
    )

}
export default SearchResultsPage;