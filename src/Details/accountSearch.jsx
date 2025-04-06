import './details.css';
import { useState } from 'react';


function AccountSearch() {


        const today = new Date();
     
          
    
        const [altAcc, setAltAcc] = useState("");
        const [accNoSearch, setAccNoSearch] = useState("");
        const [startDate, setStartDate] = useState(today);
        const [endDate, setEndDate] = useState(today);

        const handleStatement = (e) => {
            e.preventDefault();
    
        };

        return (
            <div className="txn-range">

            <form action="" className='' onSubmit={handleStatement}>
                <fieldset className='search-fieldset'>


                    <input
                        type="number"
                        placeholder='Account Number'
                        value={accNoSearch}
                        onChange={(e) => setAccNoSearch(e.target.value)}
                    />
                    <legend>Account Number</legend>
                </fieldset>
                <fieldset className='search-fieldset'>


                    <input
                        type="number"
                        placeholder='Alt. Account Number'
                        value={altAcc}
                        onChange={(e) => setAltAcc(e.target.value)}
                    />
                    <legend>Alt. Account Number</legend>
                </fieldset>
                <fieldset className='date-fieldset'>
                    <input type="date"
                        // value={startDate}
                        onChange={(e) => setStartDate(new Date(e.target.value))}
                    /> <legend>Start Date</legend>
                </fieldset>
                <fieldset className='date-fieldset'>
                    <input type="date"
                        // value={endDate}
                        onChange={(e) => setEndDate(new Date(e.target.value))}
                    /><legend>End Date</legend>
                </fieldset>

                <input type="submit" value='Transactions' />
            </form>
        </div >
        
        
    );
}

export default AccountSearch;