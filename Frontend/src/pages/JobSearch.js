import NavBar from '../components/NavBar';
import SearchBar from "../components/SearchBar";

function JobSearch() {
    return (
        <div>
            <NavBar />
            <div className='px-24'>
                <SearchBar />
            </div>
        </div>
    )
};

export default JobSearch;