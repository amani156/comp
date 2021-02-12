import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import FullName from './profile/FullName';
import Address from './profile/Address';
import ProfilPhoto from './profile/ProfilPhoto';
import "./style.css";


const card = () => {
    return (
        <div>
            <Card  className="cards">
                <ProfilPhoto />
                <Card.Body>
                    <Card.Title><FullName /></Card.Title>
                    <Card.Text><Address/></Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default card
