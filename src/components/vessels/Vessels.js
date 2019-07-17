import React, {Component} from 'react';
import { connect } from 'react-redux'
import VesselLI from './VesselLI'

class Vessels extends Component {
	constructor(props) {
		super(props)
		this.state = { vesselList: [] }
	}

	createVesselList(forward=1) {

		const { vessels } = this.props

		if (!vessels) { return null }
	
		let vesselsCopy = vessels.slice()
	
		//Sort the vessles by name
		vesselsCopy.sort((a, b) => a.name.toUpperCase() !== b.name.toUpperCase() ? a.name.toUpperCase() < b.name.toUpperCase() ? forward * -1 : forward * 1 : 0)

    const vesselList =  vesselsCopy.map( v => {
				if (!v.active) {return null}

				return (<VesselLI vessel={v} />)
		})

		return vesselList
	}

	setVesselsInState(forward=1) {
		const vesselList = this.createVesselList(forward)
		this.setState( { vesselList } )
	}

	render(){
		return(
			<div id="vessels">
				<h2>Vessels List</h2>
				<button onClick={() => this.setVesselsInState(-1)}>Reverse List</button>
				<ul>
					{(this.state.vesselList.length === 0) ? this.createVesselList() : this.state.vesselList }
				</ul>
			</div>
		)
	}
};

export default connect(state => ({ vessels: state.vessels }))(Vessels);

