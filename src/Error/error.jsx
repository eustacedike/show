import { FaKeyboard } from 'react-icons/fa';
import './error.css';

import { Link } from 'react-router-dom';

function ErrorPage() {

  
    const linkStyle = {
        textDecoration: "none",
        color: "unset"
      }

    return (
        <div className="ErrorPage">
            <div className="dashboard-title">
                <p>
                    <FaKeyboard />Page Not Found
                </p>
            </div>
<div className="error-details">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <button><Link style={linkStyle} to="/en/dashboard">Go to Home Page</Link></button>
</div>
        </div>


    );
}

export default ErrorPage;