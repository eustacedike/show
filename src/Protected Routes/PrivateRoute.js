import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


// import {getCurrentUser} from "../components/actions/getCurrentUser";


function PrivateRoute({ children }) {


    const [auth, setAuth] = useState({ isAuthenticated: "loading" });

    const currAuth = localStorage.getItem("rrc!");
    const item = JSON.parse(currAuth);
    const now = Date.now();


    if (auth.isAuthenticated === 'loading') {
        if (!item) {
            setAuth(false);
        } else {
            if (now > item.expiry) {
                localStorage.removeItem("rrc!");
                setAuth(false);
            } else if (now < item.expiry) {
                setAuth(true);
            }
        }
    }

    if (auth) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }


    // if (auth.isAuthenticated === 'loading') {

    //     if (!item) { setAuth(false) }

    //     if (now > item.expiry) {
    //         localStorage.removeItem("rrc!");
    //         setAuth(false);
    //     }

    //     if (now < item.expiry) { setAuth(true); }

    // }

    // else if (auth) { return children }
    // else { return <Navigate to="/" /> };


}


export default PrivateRoute;