import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Home from "./pages/Home/Home";
import Project from "./pages/Project";
import Error from "./pages/Error";
import Pomodoro from "./components/Pomodoro/Pomodoro";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Pomodoro} />
        <Route exact path="/:project" component={Project} />
        <Route exact path="*" component={Error}/>
      </Switch>
    </Router>
  );
}

export default App;
