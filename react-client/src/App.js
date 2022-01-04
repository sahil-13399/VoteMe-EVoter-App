import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './components/Main';
import Event from './components/Event';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "/login">

          </Route>
          <Route path = "/event">
            <Event />
          </Route>

          <Route path= "/">
            <Main />
          </Route>
        </Switch>    
      </div>
    </Router>
  );
}

export default App;
