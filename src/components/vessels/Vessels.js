import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Vessels = (props) => {
	
	const renderVessels = () => {

		let { vessels } = props

		if (!vessels) { return null }

		//Sort the vessles in alpha order by name
		vessels = vessels.sort((a, b) => a.name.toUpperCase() !== b.name.toUpperCase() ? a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1 : 0)

    return vessels.map( v => {
				if (!v.active) {return null}

				return (<li key={v.id.toString()}><Link to={`/vessels/${v.vessel_id}`}>{`${v.name} -- Operator: ${v.operator}`}</Link></li>)
			}
		)
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
