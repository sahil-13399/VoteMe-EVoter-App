import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './components/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path= "/login">
    
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
