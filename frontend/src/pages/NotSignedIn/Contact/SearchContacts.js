import './contact.css';
import { Search } from 'react-bootstrap-icons';

const SearchContacts = () => {
    return (
        <div className="search-bar">
            <Search style={{marginLeft: "5px", marginRight: "3px"}}/>
            {" "}Search
        </div>
    );
}

export default SearchContacts;