
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
             <Route path="*">
                <NoMatch/>
             </Route>
             <Route>
                <Home/>
             </Route>
          </Switch>
            
        </Router>
          
        
  );
}

export default App;
