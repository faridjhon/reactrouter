import { faDirections, faGrinTongue, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';





const Teamdetails = () => {

    const { idTeam } = useParams();


    const [team, setTeam] = useState([]);




    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]));
    }, [idTeam])


    return (
        <div >
            <div className="row bg-info text-center">
                <div className="col-md-12">

                    <img src={team.strTeamBadge} alt="" />
                </div>

            </div>
            <div className="container  ">
                <div className="row  ">
                    <div className="col-md-6">

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <h4>{team.strAlternate}</h4>
                                <p>Founded :{team.intFormedYear}</p>
                                <p>Country Name :{team.strCountry}</p>
                                <p>Sport Type :{team.strSport}</p>
                                <p>Gender :{team.strGender}</p>

                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-md-6 ">

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={team.strTeamBadge} />
                            <Card.Body>


                            </Card.Body>
                        </Card>



                    </div>

                </div>

                <div className="row mt-5 bg-info">
                    <div className="col text-center">
                        <p>Sport Type :{team.strDescriptionEN}</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5 bg-dark">
                <div className="col text-center">
                    <div>
                    <p></p>
                    
                    
                     <a href="https://wwww.facebook.com" target="_blank"><FontAwesomeIcon icon={faDirections} />  Facebook  </a> 
                     <a href="https://wwww.youtube.com" target="_blank"><FontAwesomeIcon icon={faGrinTongue} />  Youtube  </a> 
                     <a href="https://wwww.microsoft.com" target="_blank"><FontAwesomeIcon icon={faMicrophone} />  Microsoft  </a> 

                     
                    </div>
                </div>
            </div>
            <div>

            </div>



        </div>
    );
};

export default Teamdetails;