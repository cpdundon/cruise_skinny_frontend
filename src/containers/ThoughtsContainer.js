import React from 'react'
import { connect } from 'react-redux'

const ThoughtsContainer = ({ vesselId, history, vessels }) => {

		const thisVessel = vessels.find(v => (v.vessel_id === vesselId))

		if (!thisVessel) {return null}

    return (
      <div>
				<h1>Vessel Name: {thisVessel.name}</h1>
				<h2>New Thought Input Goes Here</h2><br/>
				<h2>Existing Thoughts Go Here</h2>
      </div>
    )
}

export default connect(state => ({vessels: state.vessels}))(ThoughtsContainer);
