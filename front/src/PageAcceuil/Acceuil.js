import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Acceuil() {
    return (    
        <div className='Acceuil-div' >
            <div className='Acceuil'>
                <p></p>
                <Card style={{ width: '18rem',  }}>
                <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Etudiant</Card.Title>
                        <Card.Text>
                            Je suis un étudiant souhaitant récupérer des paniers aliementaires.
                        </Card.Text>
                        <Button variant="secondary" href="http://localhost:3000/pageInscription">Je m'inscris</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Particulier</Card.Title>
                        <Card.Text>
                            Je souhiate faire des dons alimentaires à des étudiants.
                        </Card.Text>
                        <Button variant="secondary" href="http://localhost:3000/pageInscription">Je m'inscris</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Acceuil;