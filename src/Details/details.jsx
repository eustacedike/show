import './details.css';
import { useRef, useState } from 'react';
import Hero from './hero';
import AccountSearch from './accountSearch';
import AccountInfo from './accountInfo';
import CustomerInfo from './customerInfo';
import ViewTransaction from './viewTransaction';
import { FaKeyboard } from 'react-icons/fa';


function Details() {
    // const today = new Date().toISOString().split("T")[0];
    // custom Date Format  "01-Apr-2025"
    function formatDateToCustom(date) {
        const day = String(date.getDate()).padStart(2, '0');

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months[date.getMonth()];
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    const today = new Date();
    //   const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });



    // const [altAcc, setAltAcc] = useState("");
    // const [accNoSearch, setAccNoSearch] = useState("");
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [dashbox, setDashbox] = useState(0);

    const balDetails = {
        "Account Type": "SAVINGS (USD)",
        "Opening Balance": 1025467.1.toLocaleString(),
        "Closing Balance": 1435675.1.toLocaleString(),
        "Date Period": formatDateToCustom(startDate) + " to " + formatDateToCustom(endDate),
        "No of Lodgements": 0,
        "No of Withdrawals": 0,
        "Total Credit": 200000.0.toLocaleString(),
        "Total Debit": 0,
    }

    const detailsOptions = ["View Transaction", "Customer Info", "Account Info", "Mandate", "COT", "Memo", "Notes", "Investments", "Offers"]

    //   const balDetailsT = {
    //     type: "SAVINGS (USD)",
    //     openbal: 1025467.1,
    //     closebal: 1435675.1,
    //    period: startDate + " to " + endDate,
    //     lodgements: 0,
    //     withdrawals: 0,
    //    totalcredit: 200000,
    //     totaldebit: 0,
    //   }



    const highlightStyle = {
        borderBottom: "2px solid orange",
    }



    return (
        <div className="Details">



            <div className="date-box">
                <p >Infopool / <span>Transaction His...</span></p>
                <p>{formattedDate}</p>
            </div>
            <div className="dashboard-title">
                <p>
                    <FaKeyboard /> Transaction History
                </p>
            </div>

            <Hero />

            <AccountSearch />


            <div className="bal-num">
                <div className="bal-num-title">
                    <p>Balances & Numbers</p> <hr />
                </div>
                <div className="bal-num-items">
                    {Object.entries(balDetails).map(([key, value]) => (
                        <div key={key} className="bal-num-item">
                            <strong>{key}:</strong>
                            <p>{value}</p>
                        </div>
                    ))}

                </div>
            </div>


            <div className="details-options">
                {detailsOptions.map((detailsOption, index) => (
                    <button
                        style={dashbox === index ? highlightStyle : null}
                        onClick={() => { setDashbox(index) }}>
                        {detailsOption}
                    </button>
                ))}
            </div>
            <div className="details-display">
                {
                    dashbox === 0 ? <ViewTransaction /> :
                        dashbox === 1 ? <CustomerInfo /> :
                            dashbox === 2 ? <AccountInfo /> :
                                <h1>Nothing to see here</h1>}


            </div>

        </div >


    );
}

export default Details;