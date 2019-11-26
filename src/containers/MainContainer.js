import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import PirateList from '../components/pirates/PirateList';
import PirateContainer from './pirates/PirateContainer';
import ShipList from '../components/ships/ShipList';
import ShipContainer from './ships/ShipContainer';
import RaidList from '../components/raids/RaidList';
import RaidContainer from './raids/RaidContainer';
import Request from '../helpers/request';

class MainContainer extends Component {

  render(){
    return (
      <div>
      <Router>
      <React.Fragment>
      <NavBar/>
      <Switch>
      {/* GET ALL PIRATES */}
      <Route path="/pirates" component={PirateContainer}/>
      {/* GET ALL SHIPS */}
      <Route path="/ships" component={ShipContainer}/>
      {/* GET ALL RAIDS */}
      <Route path="/raids" component={RaidContainer}/>
      </Switch>
      </React.Fragment>
      </Router>
      </div>
    )
  }
}

export default MainContainer;
