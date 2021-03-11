import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card,Button, Image } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Team.css';




const Team = (props) => {

    
    const { strAlternate, strTeamBadge, strTeam,strGender,strCountry ,idTeam} = props.team;

    const history = useHistory();
    const handleClick= (idTeam) => {
        history.push(`/team/${idTeam}`);
    }
    return (
        
        <div>
            
                       
                <div  >
                    < Card  border="info " style={{ width: '20rem' }} >
                    <Card.Img  style={{ width: '12rem' }} variant="top" src={strTeamBadge} />
                    <Card.Body>
                        <Card.Title>{strAlternate}</Card.Title>                        
                        <Card.Text>Team Name: {strTeam}</Card.Text>                        
                        <Card.Text>Gender Name : {strGender}</Card.Text>
                        <Card.Text>Country Name : {strCountry}</Card.Text>
                                                
                        <Button onClick={()=> handleClick(idTeam)} variant="primary" >Team Details  <FontAwesomeIcon icon={faDirections} /></Button>
                    </Card.Body>
                    </Card>
                    </div>
            </div>
        
    );
};

export default Team;