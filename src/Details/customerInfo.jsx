import './details.css';

function CustomerInfo() {

    const custDetails = {
        "Customer Full Name": "Eustace Chibuike Dike",
        "Customer ID": 123456789,
        "Customer Type": "IND",
        "Mailing Address": "NO 10 THEO AFINJUMO OWORONSOKI LAGOS STATE",
        "Permanent Address": "NO 10 THEO AFINJUMO OWORONSOKI LAGOS STATE",
        "Nationality": "NG",
        "Phone": "07037230631",
        "Fax": "",
        "Email": "eustacedyke@gmail.com",
        "Date Created": "",
        "KYC Rating": "",
        "Home Branch": "AMAKOHIA BRANCH",
        "Sex": "M",
        "Marital Status": "Single",
        "Date of Birth": "02-Sep-1998",
        "Staff": true,
        "Business Group": "",
        "Profit Center": "AMAKOHIA BRANCH",
        "Account Officer": "Eustace Dike",
        "PEP Status": "",
        "RC Number": "",
       "TIN Number": ""
    }

     return (
        <div className="CustomerInfo">
        
        <div className="bal-num-items">
                    {Object.entries(custDetails).map(([key, value]) => (
                        <div key={key} className="bal-num-item">
                            <strong>{key}:</strong>
                            <p>{value}</p>
                        </div>
                    ))}

                </div>
        </div>
        
        
    );
}

export default CustomerInfo;