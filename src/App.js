import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'

import { getVessels } from './actions/vessels'
import VesselsContainer from './containers/VesselsContainer'
import About from './components/About'
import VesselContainer from './containers/VesselContainer'
import NavBar from './components/NavBar'
import './App.css';

class App extends React.Component {

	componentDidMount = () => {
		this.props.getVessels()
	}

  render(){
    return (
      <div className="App">
				<NavBar />

				<Switch>
					<Route exact path='/' render={ props => <VesselsContainer { ...props }/>} />
					<Route path='/vessels/:vesselId' render={ props => <VesselContainer { ...props }/> } />
					<Route exact path='/about' component={About}/>
				</Switch>
      </div>
    );

  }
}

export default withRouter(connect(null, { getVessels })(App));
