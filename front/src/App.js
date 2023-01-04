import React from 'react';
//import Navbar from "./Components/Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import './Styles/main.css';


import PageAcceuil from "./PageAcceuil/PageAcceuil";
import PageLogin from "./PageLogin/PageLogin";
import PageInscription from "./PageInscription/PageInscription";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageAcceuil />}/>
            <Route path="/pageLogin" element={<PageLogin />}/>
            <Route path="/pageInscription" element={<PageInscription />}/>

            {/*si n'importe quoi dans l'url on redirige vers home */}
            <Route path="/*" element={<PageAcceuil />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
