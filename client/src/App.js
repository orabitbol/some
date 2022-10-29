
import './App.css';
import Home from './component/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import AddUser from './component/AddUser';



function App() {
  return (
    <div className="App">
      <Router >

        <Switch>
          <Route exact path="/" component={props => <Home {...props} />}></Route>
          <Route path="/adduser" component={props => <AddUser {...props} />}></Route>
         
        </Switch>

      </Router>

    </div>
  );
}

export default App;
