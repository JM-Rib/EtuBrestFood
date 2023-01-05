import React from 'react';
import Navbar from "../Components/Navbar"

function PageLogout(props) {
    localStorage.clear();
    console.log('OK');

    return (
        <div className='Logout-div'>
            <Navbar />
            <div className='Login'>
                <section>
                    <h1>Vous vous êtes déconnecté !</h1>
                    <br />
                    <p>
                            <a href="http://localhost:3000">Retour à l'acceuil</a>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default PageLogout;