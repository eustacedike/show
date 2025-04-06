import './details.css';
import placeholder from '../Images/eustace.jpg';

function Hero() {


    const custImg = placeholder

    const mainCustDetails = {
        "Name": "Eustace Chibuike Dike",
        "Customer ID": "013456789",
        "BVN": "22345678981",
        "Email": "eustacedyke@gmail.com",
        "Telephone": "07037230631"
    }

    const otherCustDetails = {
        "Permanent Address": "NO 10 THEO AFINJUMO OWORONSOKI LAGOS STATE",
        "Current/Temporary Address": "NO 10 THEO AFINJUMO OWORONSOKI LAGOS STATE",
        "Branch": "AMAKOHIA BRANCH",
        "Date Opened": "4/19/2015 12:00:00AM",
        "Channels": "ATM, POS, USSD, Mobile App",
    }

    return (
        <div className="Hero">

            <div className="hero-div-1">
                {Object.entries(mainCustDetails).map(([key, value]) => (
                    <div key={key} className="hero-div-item">
                        <strong>{key}:</strong>
                        <p>{value}</p>
                    </div>
                ))}

            </div>
            <div className="hero-img">
                <img src={placeholder} alt="" />
            </div>
            <div className="hero-div-2">
                {Object.entries(otherCustDetails).map(([key, value]) => (
                    <div key={key} className="hero-div-item">
                        <strong>{key}:</strong>
                        <p>{value}</p>
                    </div>
                ))}
            </div>

        </div>


    );
}

export default Hero;