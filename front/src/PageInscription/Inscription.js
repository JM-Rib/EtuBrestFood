import React from 'react';
//import Navbar from "../Components/Navbar"
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../Context/AuthProvider";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
//import '../Styles/login.css';

import axios from '../api/axios';

const Inscription = () => {
    var LoginURL;
    const { setAuth } = useContext(AuthContext);

    const date = new Date();

    const emailRef = useRef();

    const errRef = useRef();

    const [type, setType] = useState('Etudiant');
    const [email, setEmail] = useState('');
    const [motDePasse, setmotDePasse] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nTelEtu, setNTelEtu] = useState('');
    const [numeroEtu, setNumeroEtu] = useState('');
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

        //LoginURL = ( (type === "Etudiant") ? "/etudiant/new" : "/partenaire/new");

        try {
            const response = await axios.post("/etudiant/new",
                JSON.stringify({ email, motDePasse, nom, prenom, nTelEtu, numeroEtu }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            var rep = response?.data['message'];
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ email, motDePasse, nom, prenom, nTelEtu, numeroEtu, roles, accessToken });
            setEmail('');
            setmotDePasse('');
            setSuccess(true);
        } catch (err) {
            if(rep === "etudiant created successfully" || rep === "partenaire created successfully"){
                setSuccess(true);
            } else if (err.response?.status === 500) {
                setErrMsg('Cet Email existe déjà!');
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
        <div className='Inscription'>
            {success ? (
                <section>
                    <h1>Inscription réussie !</h1>
                    <br />
                    <p>
                        <a href="http://localhost:3000">Retour à l'acceuil</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Inscription</h1>

                    <div id="type">
                        <div id="dropdown-type">
                            <DropdownButton
                                id="dropdown-basic-button"
                                title={type}
                                onSelect={ (e) => setType(e)}
                            >
                                <Dropdown.Item eventKey="Etudiant">Etudiant</Dropdown.Item>
                                <Dropdown.Item eventKey="Partenaire">Partenaire</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>

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

                        {/* type === "Etudiant" ? (
                            <section>
                                <div id="type">
                                    <div id="dropdown-type">
                                        <DropdownButton
                                            id="dropdown-basic-button"
                                            title={type}
                                            onSelect={ (e) => setType(e)}
                                        >
                                            <Dropdown.Item eventKey="Etudiant">Etudiant</Dropdown.Item>
                                            <Dropdown.Item eventKey="Partenaire">Partenaire</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </div>
                            </section>
                        ) : (<section></section>) */}

                        <label htmlFor="nom">Nom:</label>
                        <input
                            type="text"
                            id="nom"
                            autoComplete="off"
                            onChange={(e) => setNom(e.target.value)}
                            value={nom}
                            required
                        />

                        <label htmlFor="prenom">Prenom:</label>
                        <input
                            type="text"
                            id="prenom"
                            onChange={(e) => setPrenom(e.target.value)}
                            value={prenom}
                            required
                        />

                        <label htmlFor="nTelEtu">Numero de Téléphone:</label>
                        <input
                            type="text"
                            id="nTelEtu"
                            autoComplete="off"
                            onChange={(e) => setNTelEtu(e.target.value)}
                            value={nTelEtu}
                            required
                        />

                        <label htmlFor="numeroEtu">Numero Etudiant:</label>
                        <input
                            type="text"
                            id="numeroEtu"
                            onChange={(e) => setNumeroEtu(e.target.value)}
                            value={numeroEtu}
                            required
                        />
                        <button>Inscription</button>
                    </form>
                </section>
            )}
        </div>
    )
}

export default Inscription;