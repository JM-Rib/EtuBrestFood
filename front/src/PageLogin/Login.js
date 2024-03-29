import React from 'react';
//import Navbar from "../Components/Navbar"
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../Context/AuthProvider";
//import '../Styles/login.css';

import axios from '../api/axios';
const LOGIN_URL = '/compte/login';

function Login(){

    /*function handleChangeStateClick(props) {
        onChangeSomeState(1);
    }*/

    const { setAuth } = useContext(AuthContext);
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [motDePasse, setmotDePasse] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, motDePasse])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, motDePasse }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            var rep = response?.data.data[0]['resultat'];
            var idrep = (response?.data.data[0]['pk_idCompte']);
            //console.log(JSON.stringify(response));
            // store the user in localStorage
            localStorage.setItem("user", JSON.stringify(response?.data.data[0]));
            console.log(response?.data);

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ email, motDePasse, roles, accessToken });
            setEmail('');
            setmotDePasse('');
            setSuccess(true);
        } catch (err) {
            if(rep === "TRUE"){
                setSuccess(true);
                
            } else if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Emailname or motDePasse');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <div className='Login'>
            {success ? ( 
                <section>
                    <h1>Vous êtes connecté !</h1>
                    <br />
                    <p>
                        <a href="http://localhost:3000">Retour à l'acceuil</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Connexion</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            ref={emailRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />

                        <label htmlFor="motDePasse">Mot de passe:</label>
                        <input
                            type="motDePasse"
                            id="motDePasse"
                            onChange={(e) => setmotDePasse(e.target.value)}
                            value={motDePasse}
                            required
                        />
                        <button>Connexion</button>
                    </form>
                </section>
            )}
        </div>
    )
}

export default Login;