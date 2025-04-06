import './details.css';

function AccountInfo() {

    const accDetails = {
        "Account Name": "Eustace Dike",
        "Account No": "0068994407",
        "Alt. Account No.": "",
        "Customer ID": "123456789",
        "Product Type": "PREMIER SAVINGS (020003)",
        "ATM Status": "Y",
        "Last Serial of Cheque": "1",
        "Last used Cheque No": "1",
        "Date Opened": "4/19/2015 12:00:00AM",
        "Mainenance type (PND, Hold funds etc.)": "",
        "Last Maintained By": "SYSTEM",
        "Maintained Authorised By": "SYSTEM",
         "Profit Center": "AMAKOHIA BRANCH",
         "Account Officer": "Eustace Dike",
         "Book Balance": 271890.22.toLocaleString(),
         "Balance Available": 271090.22.toLocaleString(),
         "Uncleared Balance": 800.00.toLocaleString(),
         "Hold Balance": 4.30.toLocaleString(),
        "Amount Debit MTD": 0.00.toLocaleString(),
        "Amount Credit MTD": 0.00.toLocaleString(),
        "Amount Debit YTD": 0.00.toLocaleString(),
        "Amount Credit YTD": 0.00.toLocaleString(),
        "Amount Last Debit": 0.00.toLocaleString(),
        "Date Last Debited" : "2025-04-01T13:00:00",
        "Amount Last Credit": 0.00.toLocaleString(),
        "Date Last Credited" : "2025-04-03T13:00:00"
    }

     return (
        <div className="AccountInfo">
        
        <div className="bal-num-items">
                    {Object.entries(accDetails).map(([key, value]) => (
                        <div key={key} className="bal-num-item">
                            <strong>{key}:</strong>
                            <p>{value}</p>
                        </div>
                    ))}

                </div>
        </div>
        
        
    );
}

export default AccountInfo;