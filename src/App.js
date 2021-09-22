import Tracker from './components/Tracker/Tracker';
import Common from './components/Common/Common';
import Home from './components/Home/Home';
import Prevention from './components/Prevention/Prevention';
import List from './components/HelpList/List';

import { Switch,BrowserRouter as Router, Route} from 'react-router-dom';
import { Deta } from 'deta';
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  AOS.init();
  const deta = Deta("c018wkf2_8mwePsygcQZcMAZEPyBWLSjz8xTUx6d5")
  const db =  deta.Base("help")
  return (
    <div className="App">
      <Router>
      <Common db={db} />
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
        <Route exact path="/tracker">
          <Tracker/>

        </Route>
        <Route exact path="/steps">
          <Prevention />
        </Route>
        <Route exact path="/help">
          <List db={db}/>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
