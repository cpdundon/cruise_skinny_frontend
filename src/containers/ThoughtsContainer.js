import React from 'react'
import { connect } from 'react-redux'
import SkinnyInput from '../components/skinnies/SkinnyInput'
import Skinnies from '../components/skinnies/Skinnies'

const ThoughtsContainer = ({ vesselId, vessels }) => {

		const thisVessel = vessels.find(v => (v.vessel_id === vesselId))

		if (!thisVessel) {return null}

    return (
      <div>
				<h1>Vessel Name: {thisVessel.name}</h1>
				<SkinnyInput vesselId={vesselId} /><br/>
				<Skinnies vesselId={vesselId} /><br/>
      </div>
    )
}

export default connect(state => ({vessels: state.vessels}))(ThoughtsContainer);
