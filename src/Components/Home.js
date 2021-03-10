import React, { useEffect, useState } from 'react';
import Team from './Team';

const Home = () => {


    const [teams,setTeams]=useState([]);



    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
        .then(res => res.json())
        .then(data => setTeams(data.teams));



    },[])



    return (
        <div className="text-center">
            <h1>Home page</h1>
            <h2>Team : {teams.length}</h2>
            <div>
               {
                teams.map(team => <Team team={team}> </Team>)
                }
            </div>
           
                
           
        </div>
    );
};

export default Home;