import React from 'react'
import VesselCard from '../components/vessels/VesselShow'
import ThoughtsContainer from '../containers/ThoughtsContainer'

const VesselContainer = ({ match, history }) => {

  const vesselId = match.params.vesselId

	return (
		<div>
			<VesselCard vesselId={vesselId} history={history} /><br/>
			<ThoughtsContainer vesselId={vesselId} history={history} />
		</div>
	)
}

export default VesselContainer;                                 
