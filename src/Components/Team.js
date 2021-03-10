import React from 'react';
import { Card,Button } from 'react-bootstrap';
import './Team.css';

const Team = (props) => {

    const { strAlternate, strTeamBadge, strLeague2,strTeam,strGender,strCountry } = props.team;
    return (


        
        <div className="container" >
            <div className="row">
                <div className="col-md-4  " >
                    < Card  >
                    <Card.Img variant="top" src={strTeamBadge} />
                    <Card.Body>
                        <Card.Title>{strAlternate}</Card.Title>
                        
                        <Card.Text>Team Name: {strTeam}</Card.Text>
                        
                        <Card.Text>{strLeague2}</Card.Text>
                        <Card.Text>Gender Name : {strGender}</Card.Text>
                        <Card.Text>Country Name :{strCountry}</Card.Text>
                        
                        <Button variant="primary">Team Details</Button>
                    </Card.Body>
                    </Card>
                    </div>
                    </div>               
            
            
        </div>
    );
};

export default Team;