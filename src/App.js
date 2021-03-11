import React from 'react';
import './App.css';

/*React Router import file*/
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home';
import NoMatch from './Components/NoMatch';
import Teamdetails from './Components/Teamdetails';




function App() {
  return (
     
        <Router>
          <Switch>
             <Route path="/home">
                <Home/>
             </Route>
             <Route exact path="/">
                <Home/>
             </Route>
             <Route path="/team/:idTeam">
                <Teamdetails/>
             </Route>
             <Route path="*">
                <NoMatch/>
             </Route>
             
             
          </Switch>
            
        </Router>
          
        
  );
}

export default App;
