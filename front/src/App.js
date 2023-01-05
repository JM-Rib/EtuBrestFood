import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
//import Navbar from "./Components/Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import './Styles/main.css';


import PageAcceuil from "./PageAcceuil/PageAcceuil";
import PageLogin from "./PageLogin/PageLogin";
import PageInscription from "./PageInscription/PageInscription";
import PageLogout from "./PageLogout/PageLogout";
import PagePaniers from "./PagePaniers/PagePaniers";
import PageAnnonce from "./PageAnnonce/PageAnnonce";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const[user, setUser] = useState("");

  //const[pageAnnonceId, setPageAnnonceId] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageAcceuil idCompte = {user.pk_idCompte} />}/>
            <Route path="/pageLogin" element={<PageLogin />}/>
            <Route path="/pageInscription" element={<PageInscription />}/>
            <Route path="/pageLogout" element={<PageLogout />}/>
            <Route path="/pagePaniers" element={<PagePaniers idCompte = {user.pk_idCompte} />}/>
            <Route path="/pageAnnonce" element={<PageAnnonce idCompte = {user.pk_idCompte} />}/>

            {/*si n'importe quoi dans l'url on redirige vers home */}
            <Route path="/*" element={<PageAcceuil />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
