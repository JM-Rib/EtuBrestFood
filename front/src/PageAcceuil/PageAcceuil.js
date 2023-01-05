import React from 'react';
import Navbar from "../Components/Navbar"
import Acceuil from "./Acceuil"

function PageAcceuil(props) {
    return (    
        <>
            <Navbar idCompte={props.idCompte}/>
            <Acceuil />
        </>
    );
}

export default PageAcceuil;