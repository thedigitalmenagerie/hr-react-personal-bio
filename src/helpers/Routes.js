import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from '../views/HomeView';
import BioView from '../views/BioView';
import ContactView from '../views/ContactView';
import ProjectsView from '../views/ProjectsView';
import ResumeView from '../views/ResumeView';
import ReviewView from '../views/ReviewView';
import TechnologiesView from '../views/TechnologiesView';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={HomeView}
        />
        <Route exact path='/biography'
        component={BioView}
        />
        <Route exact path='/contact'
        component={ContactView}
        />
        <Route exact path='/projects'
        component={ProjectsView}
        />
        <Route exact path='/resume'
        component={ResumeView}
        />
        <Route exact path='/reviews'
        component={ReviewView}
        />
        <Route exact path='/technologies'
        component={TechnologiesView}
        />
      </Switch>
    </div>
  );
}
