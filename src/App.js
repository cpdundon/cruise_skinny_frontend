import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { getVessels } from './actions/vessels'
import './App.css';

class App extends React.Component {

	componentDidMount = () => {
		this.props.getVessels()
	}

  render(){
    return (
      <div className="App">
        { /* <Route exact path='/' component={Home}/>
				<Route exact path='/vessels/:vessel_id/update' component={ < CreateOrUpdateVessel /> } />
        <Route exact path='/vessels/:vessel_id/show' component={VesselCard}/>
				*/ }
      </div>
    );

  }
}

export default withRouter(connect(null, { getVessels })(App));
