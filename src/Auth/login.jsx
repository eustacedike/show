import './auth.css';
import accessLogo from '../Images/access.png'


import { useRef, useState } from 'react';
import useAuthStore from "./auth";
import { useNavigate } from "react-router-dom";


function Loginscrn() {

    //const navbar = useRef();


    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [eToken, setEtoken] = useState("");

    const { login, loginMessage, isAuthenticated } = useAuthStore();
    const navigate = useNavigate();

    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(name, password, eToken);



        // Use setTimeout to access the updated state values from the store
        setTimeout(() => {
            const currentState = useAuthStore.getState();
            // console.log(currentState.loginMessage);
            console.log(currentState.isAuthenticated);
            setError(currentState.loginMessage);

            // Redirect after successful login
            if (currentState.isAuthenticated === "yes") {
               
                const expiration = Date.now() + 30 * 60 * 1000;
                const item = {
                    value: "yes",
                    expiry: expiration,
                    username: name,
                    readOnly: true, // Set readOnly to true
                };
                localStorage.setItem("rrc!", JSON.stringify(item));
                navigate("/");
            }
        }, 0);

        // if (isAuthenticated === "yes") {           navigate("/dashboard");     }
    };

    const testAuth = (e) => {
        e.preventDefault();

        //   setTimeout(() => {
        const currentState = useAuthStore.getState();
        console.log(currentState.isAuthenticated);
        //   }, 0);

    };

    return (
        <div className="Loginscrn">
            <div className='logo-container'>
                <img src={accessLogo} alt="logo" className='logo' />

            </div>
            <div className="auth-container-1">
                {/* <button onClick={testAuth}>testAuth</button> */}
                <div className="welcome-text">
                    <h2>welcome to</h2>
                    {/* <br /> */}
                    <h1>Access Bank Infopool</h1>
                </div>
            </div>
            <div className="auth-container-2">
                <div className="welcome-text">
                    <h2>welcome to</h2>
                    {/* <br /> */}
                    <h1>Access Bank Infopool</h1>
                </div>
                <form className='login-form' onSubmit={handleSubmit}>
                    <p className='form-title'>LOGIN</p> <hr />
                    <p className='login-error'>{error}</p>
                    <fieldset>


                        <input
                            type="text"
                            placeholder='Username'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        /><legend>Username</legend>
                    </fieldset>
                    <fieldset>

                        <input
                            type="text"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />  <legend>Password</legend>
                    </fieldset>
                    <fieldset>

                        <input
                            type="number"
                            placeholder='Entrust Token'
                            value={eToken}
                            onChange={(e) => setEtoken(e.target.value)}
                        /><legend>Entrust Token</legend>
                    </fieldset>
                    <input type="submit" />

                </form>
            </div>
        </div>

    );
}

export default Loginscrn;