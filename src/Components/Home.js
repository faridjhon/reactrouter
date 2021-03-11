import React, { useEffect, useState } from 'react';
import Team from './Team';
import './Home.css';

import bannerImage from '../Image/banner.jpg';








const Home = () => {


    const [teams,setTeams]=useState([]);



    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
        .then(res => res.json())
        .then(data => setTeams(data.teams));



    },[])


    return (
        
            
            <div >
                <div>
                    <img className=" img-fluid"style={{ width: '100rem' }} src={bannerImage} alt=""/>

                </div>
                <div className="mapstyle container mt-2">
                {
                teams.map(team => <Team team={team}> </Team>)
                }
                </div>
               
            </div>
           
                
           
        
    );
};

export default Home;