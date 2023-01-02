import React from 'react';
//import Navbar from "./Components/Navbar"
import './App.css';

import PageAcceuil from "./PageAcceuil/PageAcceuil";
import PageLogin from "./PageLogin/PageLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageAcceuil />}/>
          <Route path="/pageLogin" element={<PageLogin />}/>
  
          {/*si n'importe quoi dans l'url on redirige vers home */}
          <Route path="/*" element={<PageAcceuil />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
