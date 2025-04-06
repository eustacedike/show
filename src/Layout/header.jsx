import './layout.css';
import { Link } from 'react-router-dom';
// import temp from '../Images/image4.png';
import placeholder from '../Images/placeholder.png';

import { FaBrush } from 'react-icons/fa';
import { BsUiChecksGrid } from 'react-icons/bs';


import { useRef, useState } from 'react';
import { useNavigate, useLocation} from "react-router-dom";
import useAuthStore from '../Auth/auth';

import DetailSearch from '../Dashboard/detailsearch';

function Header() {

    const navigate = useNavigate();
    const location = useLocation();



    const { logout } = useAuthStore();
    const currAuth = localStorage.getItem("rrc!");
    const item = JSON.parse(currAuth);


    const username = item?.username;

    const [profilePopup, setProfilePopup] = useState(false);

    const openProfilePopup = () => {
        // console.log(profilePopup)
        setProfilePopup(true)
    }

    window.onclick = (event) => {

        if (!event.target.closest(".profile-box")) {
            setProfilePopup(false);

        }

    }

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/login");
    }



// const navbar = useRef();

const [menu, setMenu] = useState(false);



return (
    <div className="Header">
        {/* <img src={temp} alt="logo" className='logo' /> */}
        <div className="menu"
        //   onClick={openMobile}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>

<div className="search-bar">
{location.pathname === "/details" ? <DetailSearch/> : null}
{/* <DetailSearch /> */}
</div>


        <div className="profile-box">
            <img src={placeholder}
                onClick={openProfilePopup}
                alt="" />



            <div className="profile-box-popup"
                style={{ display: profilePopup ? "" : "none" }}
            >
                <div className="div-1">
                    <img src={placeholder} alt="" /> <p>{username}</p>
                </div>
                <div className="div-2">
                    <button onClick={handleLogout}>Log Off</button>
                    <p>@{username}</p>
                </div>
            </div>
        </div>
    </div>


);
}

export default Header;