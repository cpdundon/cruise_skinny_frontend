import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Vessels = (props) => {
	const clickUpVote = (e) => {
		alert(e.target.id)
		return null
	}

	const renderVessels = () => {

		const { vessels } = props

		if (!vessels) { return null }
		
		//Sort the vessles in alpha order by name
		const vesselsCopy = vessels.sort((a, b) => a.name.toUpperCase() !== b.name.toUpperCase() ? a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1 : 0)

    return vessels.map( v => {
				if (!v.active) {return null}

				return (<VesselLI vessel={v} />)
		})
	}

	return(
		<div id="vessels">
			<h2>Vessels List</h2>
			<ul>
				{renderVessels()}
			</ul>
		</div>
	)
};

export default connect(state => ({ vessels: state.vessels }))(Vessels);

const VesselLI = (props) => {
	const { vessel } = props

	const clickUpVote = () => {
		return null
	}

	return(
		<li key ={vessel.id.toString()}>
			<Link to={`/vessels/${vessel.vessel_id}`}>
				{`${vessel.name} -- Operator: ${vessel.operator}`}
			</Link>
			<div> </div>
			<button onClick={clickUpVote}>Up-Vote</button>
			<div>{'COUNTER'}</div>
		</li>
	)

}; 
