import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Teamdetails = () => {

    const { idTeam } = useParams();


    const [team, setTeam] = useState([]);




    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]));
    }, [])


    return (
        <div >
            <div className="row bg-info text-center">
                <div className="col">
                <img src={team.strTeamLogo} alt="" />
                </div>
                
            </div>
            <div className="container ">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h4>{team.strAlternate}</h4>
                    <p>Founded :{team.intFormedYear}</p>
                    <p>Country Name :{team.strCountry}</p>
                    <p>Sport Type :{team.strSport}</p>
                    <p>Gender :{team.strGender}</p>

                </div>
                <div className="col-md-6 ">
                    <img src={team.strTeamBadge} alt="" />
                    
                    <img src={team.strTeamLogo} alt="" />
                                        
                </div>

            </div>

            <div className="row mt-5">
                <div className="col text-center">
                <p>Sport Type :{team.strDescriptionEN}</p>
                </div>
                </div>
            </div>
            <div>
                <a href="http://www.facebook.com"></a>
            </div>



        </div>
    );
};

export default Teamdetails;