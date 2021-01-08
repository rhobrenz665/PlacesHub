import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Users from './user/containers/Users';
import Newplace from './places/containers/NewPlace';
import UserPlaces from './places/containers/UserPlaces';
import UpdatePlace from './places/containers/UpdatePlace';
// import MainNavigation from './shared/components/Navigation/MainNavigation';\

const App = () => {
  const token = false;
  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/:userId/places" exact component={UserPlaces} />
        <Route path="/places/new" exact component={Newplace} />
        <Route path="/places/:placeId" component={UpdatePlace} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/:userId/places" exact component={UserPlaces} />
        {/* <Route path="/auth" component={Auth} /> */}
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <Router>
      {/* <MainNavigation /> */}
      <main>{routes}</main>
    </Router>
  );
};

export default App;
