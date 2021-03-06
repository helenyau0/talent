import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

import css from '../public/index.scss'
import {tempInfo, userTempInfo, fakeDB, fakeProjects} from './db/mock-data'

import TalentNavbar from './components/talentNavbar';
import CollectionPage from './pages/collection/index';
import ProfilePage from './pages/profile/index';
import NotFound from './components/notFound';

ReactDOM.render(
  <div>
    <TalentNavbar/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() =>
          <CollectionPage data={fakeDB} info={tempInfo[0]} projects={fakeProjects}/>} />
        <Route path="/learners/:githubHandle" render={() =>
          <ProfilePage info={userTempInfo} projects={fakeProjects}/>} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
  , document.querySelector('.container'));
