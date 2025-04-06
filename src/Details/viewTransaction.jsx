import './details.css';
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

//Export Dependencies
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';





import excel from '../Images/icons/excel.png';
import pdf from '../Images/icons/pdf.png';

function ViewTransaction() {

    // const response = fetch("/transactions.json"); // Fetch mock transactions
    //         const transactions = response.json();
    //         console.log(transactions);

    const [acctInView, setAcctInView] = useState("0068994407");
    const [acctTxns, setAcctTxns] = useState([]);

    useEffect(() => {
        fetch('/transactions.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data[acctInView]); 
                setAcctTxns(data[acctInView]);
                // console.log(acctTxns)
            });
    }, []);


    const [narrSearch, setNarrSearch] = useState("");

    const handleNarrSearch = (e) => {
        e.preventDefault();

    };

    // const takeUp = () => {
    //     window.scroll(0,0)
    //   }


    const [PageSize, setPageSize] = useState(5);
    //   const PageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const txnsToDisplay = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return acctTxns?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, acctTxns, PageSize]);


    function ExportToExcel({ data, filename }) {
          // Create a new workbook
          const workbook = XLSX.utils.book_new();
      
          // Convert data to worksheet
          const worksheet = XLSX.utils.json_to_sheet(data);
      
          // Add worksheet to workbook
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      
          // Generate Excel file
          XLSX.writeFile(workbook, `${filename}.xlsx`);

        //   console.log("Exported to Excel:", filename);
    };


    const ExportToPDF = ({ data }) => {
        const doc = new jsPDF();

        doc.text('Customer Transaction History', 14, 10);
    
        const tableColumn = [
          "T. Date", 
          "Ref Number", 
          "Tran. Narration", 
          "Value Date", 
          "Total Withdrawal", 
          "Total Lodgement", 
          "Balance"
        ];
    
        // `data` is already in the correct format: array of arrays
        autoTable(doc, {
            head: [tableColumn],
            body: data,
            startY: 20,
            styles: { fontSize: 8 },
          });
    
        doc.save("customer_transaction_history.pdf");
      };
     
      

      

    const disabledStyle = {
        color: "#ccc",
        cursor: "not-allowed",
    };

    return (
        <div className="ViewTransaction">
            <div className="viewTransaction-header">
                <form action="" className='' onSubmit={handleNarrSearch}>
                    <label>Search: </label>
                    <input
                        type="text"

                        value={narrSearch}
                        onChange={(e) => setNarrSearch(e.target.value)}
                    />
                </form>
                <div className="vt-print-div">
                    <form action="">
                        <p>Show </p>
                        <select name="" id="" onChange={(e) => setPageSize(e.target.value)}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </select>
                        <p> entries</p>
                    </form>
                    <button
                    className='vt-print'
                    onClick={() => ExportToExcel({ data: acctTxns, filename: 'transactions' })}
                    ><img src={excel} /></button>
                    <button
                    className='vt-print'
                    onClick={() => ExportToPDF({ data: acctTxns})} 
                    ><img src={pdf} /></button>
                </div>
            </div>
            <hr />
            <table>
                <thead>
                <tr>
                    <th>T. Date</th>
                    <th>Ref Number</th>
                    <th>Tran. Narration</th>
                    <th>Value Date</th>
                    <th>Total Withdrawal</th>
                    <th>Total Lodgement</th>
                    <th>Balance</th>
                </tr>
                </thead>
                <hr />
                {txnsToDisplay.map((txn, index) => (
                    <tr key={index}>
                        <td>{txn[0]}</td>
                        <td>{txn[1]}</td>
                        <td><Link>{txn[2]}</Link></td>
                        <td>{txn[3]}</td>
                        <td>{txn[4].toLocaleString()}</td>
                        <td>{txn[5].toLocaleString()}</td>
                        <td>{txn[6].toLocaleString()}</td>
                    </tr>

                ))}

            </table>
            <hr />

            <div className="paging">
                <div className="page-details">
                    <p>Showing {(currentPage * PageSize) - PageSize + 1} to {Math.min(currentPage * PageSize, acctTxns.length)} of {acctTxns.length} entries</p>
                </div>
                <div className="page-control">
                    <button
                    className='page-control-btn'
                    style={currentPage === 1 ? disabledStyle : null}
                    onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : null}>Previous</button>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={acctTxns.length}
                        pageSize={PageSize}
                        onPageChange={page => { setCurrentPage(page) }}
                    />
                    <button
                    className='page-control-btn'
                    style={currentPage === Math.ceil((acctTxns?.length || 0) / PageSize) ? disabledStyle : null}
                    onClick={() => currentPage < Math.ceil((acctTxns?.length || 0) / PageSize) ? setCurrentPage(currentPage + 1) : null}>Next</button>
                </div>
            </div>



        </div>


    );
}

export default ViewTransaction;