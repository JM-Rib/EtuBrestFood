import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar"
import Panier from "./Panier"

import axios from '../api/axios';

function PagePaniers(props) {

    const[paniers, setPaniers] = useState([]);

    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/panier");
            var rep = response?.data.data;
            setPaniers(rep);
            console.log(paniers);
        }
        
        fetchData()
        // make sure to catch any error
        .catch(console.error);
    }, []);

    return (
        <div className='Paniers-div'>
            <Navbar idCompte={props.idCompte}/>
            <div className='Paniers'>
                {paniers.map( (variable, key) => {
                    console.log(variable);
                    return(
                        <Panier pk_idPanier={variable.pk_idPanier}
                                nomPa={variable.nomPa}
                                adressePa={variable.adressePa}
                                typePa={variable.typePa}
                                quantitePa={variable.quantitePa}
                                key={key} />
                    )
                }) }
            </div>
        </div>
    );
}

export default PagePaniers;