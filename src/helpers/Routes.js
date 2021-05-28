import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeView from '../views/HomeView';
import BioView from '../views/BioView';
import ContactView from '../views/ContactView';
import ProjectsView from '../views/ProjectsView';
import ResumeView from '../views/ResumeView';
import ReviewView from '../views/ReviewView';
import TechnologiesView from '../views/TechnologiesView';

const PrivateRoute = ({
  component: Component,
  user,
  admin,
  ...rest
}) => {
  const routeChecker = (taco) => (admin
    ? (<Component {...taco} admin={admin}/>)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  const routeChecker2 = (taco) => (user
    ? (<Component {...taco} user={user}/>)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  return <Route {...rest} render={(props) => (routeChecker(props) || routeChecker2(props))} />;
};

PrivateRoute.propTypes = {
  admin: PropTypes.any,
  setAdmin: PropTypes.func,
  component: PropTypes.func,
  user: PropTypes.any,
  setUser: PropTypes.func,
};
export default function Routes({
  user,
  setUser,
  admin,
  setAdmin,
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={() => <HomeView
        user={user}
        admin={admin}
        setUser={setUser}
        setAdmin={setAdmin}
        />}
        admin={admin}
        user={user}
        setUser={setUser}
        setAdmin={setAdmin}
        />
        <Route exact path='/biography'
        component={() => <BioView
        admin={admin}
        user={user}
        setUser={setUser}
        setAdmin={setAdmin}
        />}
        admin={admin}
        user={user}
        setUser={setUser}
        setAdmin={setAdmin}
        />
        <PrivateRoute exact path='/contact'
        component={() => <ContactView
          user={user}
          admin={admin}
          setUser={setUser}
          setAdmin={setAdmin}
          />}
          user={user}
          admin={admin}
          setUser={setUser}
          setAdmin={setAdmin}
        />
        <Route exact path='/projects'
        component={() => <ProjectsView
        user={user}
        admin={admin}
        setUser={setUser}
        setAdmin={setAdmin}
        />}
        user={user}
        admin={admin}
        setUser={setUser}
        setAdmin={setAdmin}
        />
        <Route exact path='/resume'
        component={() => <ResumeView
        user={user}
        admin={admin}
        setUser={setUser}
        setAdmin={setAdmin}
        />}
        user={user}
        admin={admin}
        setUser={setUser}
        setAdmin={setAdmin}
        />
        <PrivateRoute exact path='/reviews'
        component={() => <ReviewView
          user={user}
          admin={admin}
          setUser={setUser}
          setAdmin={setAdmin}
        />}
        user={user}
        admin={admin}
        setUser={setUser}
        setAdmin={setAdmin}
        />
        <Route exact path='/technologies'
        component={() => <TechnologiesView
        user={user}
        admin={admin}
        setUser={setUser}
        setAdmin={setAdmin}
        />}
        user={user}
        admin={admin}
        setUser={setUser}
        setAdmin={setAdmin}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func,
};
