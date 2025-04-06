import { FaSearch } from 'react-icons/fa';
import './dashboard.css';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function DetailSearch() {

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [accNoSearch, setAccNoSearch] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();

        navigate("/details");
    };

     return (
        // <div className="search-box">
                <form className='search-form' onSubmit={handleSearch}>
                    <fieldset>

                        <p><FaSearch /></p>
                        <input
                            type="text"
                            placeholder='Enter search term'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </fieldset>
                    <select name="search-type" id="search-type">
                        <option value="acctno">Account Number</option>
                        <option value="acctname">Account Name</option>
                        <option value="cstid">Customer ID</option>
                        <option value="bvn">BVN</option>
                    </select>
                    <input type="submit" value='Search' />

                </form>
            // </div>
    );
}

export default DetailSearch;