import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Game from './components/pages/Game';
import Learning from './components/Learning';
import Mentor from './components/Mentor';

function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Switch>
       <Route path="/" exact component={Home}/> 
     </Switch>
    <Route path="/game">
    <Game />
    </Route>
    <Route path="/learning">
    <Learning />
    </Route>
    <Route path="/mentor">
    <Mentor />
    </Route>
     </Router>
   </>
  );
}

export default App;
