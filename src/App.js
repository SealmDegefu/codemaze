import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Game from './components/pages/Game';

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
     </Router>
   </>
  );
}

export default App;
