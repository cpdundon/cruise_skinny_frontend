import React from 'react';
import { connect } from 'react-redux'
import { createOrUpdateVessel } from  '../../actions/vessels'

const VesselShow = (props) => {

	const { vesselId, vessels, createOrUpdateVessel, history } = props
	const thisVessel = vessels.find(v => (v.vessel_id === vesselId))

	if (!thisVessel) { return null }
	
	const deleteThisVessel = () => {
		const tVessel = {...thisVessel }
		tVessel.active = false
		createOrUpdateVessel(tVessel, history)
	}

	return (

		<div>
			<h1>Vessel Name: {thisVessel.name}</h1>
			<h2>Operator: {thisVessel.operator}</h2>
			{(!!thisVessel.splash_date) ? <h2>Splash Date: {thisVessel.splash_date}</h2> : null}
			<br/>
			<button onClick={() => (deleteThisVessel())}>DELETE</button>
		</div>

	)
}

export default connect(state => ({ vessels: state.vessels }), { createOrUpdateVessel })(VesselShow);                                            
