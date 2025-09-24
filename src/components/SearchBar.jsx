import "../styles/SearchBar.css"
import Input from "./Input";
function SearchBar({searchQuery,setSearchQuery}){
    return (
        <div >
            <Input
            placeholder="Search Patients"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
        
        </div>
    )
}

export default SearchBar;