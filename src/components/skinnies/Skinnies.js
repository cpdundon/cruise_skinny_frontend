import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Skinnies extends Component {
	
	renderSkinnies = () => {

		const { vesselId } = this.props
		const thisVessel = this.props.vessels.find(v => (v.vessel_id === vesselId))

		if (!thisVessel) { return null }

    return thisVessel.skinny.map( s => {
//				if (!s.active) {return null}

				return <li key={s.skinny_id}>{s.thought}</li>
			}
		)
	}

  render() {
    return(
      <ul>
        <h2>Skinny Thoughts</h2>
				{this.renderSkinnies()}
      </ul>
    );
  }
};

export default connect(state => ({ vessels: state.vessels }))(Skinnies);
