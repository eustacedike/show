import './dashboard.css';
import { FaKeyboard } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';


import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DetailSearch from './detailsearch';


function Dashboard() {


    const navigate = useNavigate();
    // const navbar = useRef();

    const [searchTerm, setSearchTerm] = useState("");
    const [accNoSearch, setAccNoSearch] = useState("");

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");



    const handleStatement = (e) => {
        e.preventDefault();
        navigate("/details");
    };

    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });


    return (
        <div className="Dashboard">
            <div className="date-box">
                <p >Infopool</p>
                <p>{formattedDate}</p>
            </div>
            <div className="dashboard-title">
                <p>
                    <FaKeyboard /> Access Bank InfoPool
                </p>
            </div>

            <div className="search-box">
            <DetailSearch />
            </div>

            <div className="set-range">

                <form action="" className='date-form' onSubmit={handleStatement}>
                    <input type="number" placeholder='Account number' value={accNoSearch}
                        onChange={(e) => setAccNoSearch(e.target.value)} />
                    <div>
                        <fieldset>
                            <input type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            /> <legend>Start Date</legend>
                        </fieldset>
                        <fieldset>
                            <input type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            /><legend>End Date</legend>
                        </fieldset>
                    </div>
                    <input type="submit" value='Access Transaction History' />
                </form>
            </div>
        </div>
    );
}

export default Dashboard;