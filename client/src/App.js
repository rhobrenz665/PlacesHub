import React, { Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hooks';

import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';

// Code Splitting
const Users = React.lazy(() => import('./user/containers/Users'));
const Newplace = React.lazy(() => import('./places/containers/NewPlace'));
const UserPlaces = React.lazy(() => import('./places/containers/UserPlaces'));
const UpdatePlace = React.lazy(() => import('./places/containers/UpdatePlace'));
const Auth = React.lazy(() => import('./user/containers/Auth'));

const App = () => {
  const { token, login, logout, userId } = useAuth();

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
        <Route path="/auth" component={Auth} />
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Suspense fallback={<LoadingSpinner />}>{routes}</Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
