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
  const routeChecker = (taco) => (admin || user
    ? (<Component {...taco} admin={admin} user={user}/>)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  return <Route {...rest} render={(props) => (routeChecker(props))} />;
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
