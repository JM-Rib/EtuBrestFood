import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import axios from '../api/axios';

function Panier(props) {

    const[url, setUrl] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/annonce/duPanier/"+props.pk_idPanier);
            var rep = response?.data.data[0];
            setUrl(rep.photo);
            console.log(rep.photo);
        }
        
        fetchData()
        // make sure to catch any error
        .catch(console.error);
    }, []);

    return (
        <div className='Panier-div'>
            <div className='Panier'>
                <p></p>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={url} />
                    <Card.Body>
                        <Card.Title>{props.nomPa}</Card.Title>
                        <Card.Text>
                            Disponible au local suivant:<br></br><u>{props.adressePa}</u>
                        </Card.Text>
                        <Button variant="secondary">Consulter le Panier</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Panier;