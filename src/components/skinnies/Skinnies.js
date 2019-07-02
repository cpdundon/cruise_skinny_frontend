import React from 'react';
import { connect } from 'react-redux'

const Skinnies = (props) => {
	
	const renderSkinnies = () => {

		const { vesselId } = props
		const thisVessel = props.vessels.find(v => (v.vessel_id === vesselId))

		if (!thisVessel) { return null }

    return thisVessel.skinny.map( s => {
				if (!s.active) {return null}

				return <li key={s.skinny_id}>{s.thought}</li>
			}
		)
	}

	return(
		<ul>
			<h2>Skinnies</h2>
			{renderSkinnies()}
		</ul>
	)
};

export default connect(state => ({ vessels: state.vessels }))(Skinnies);
