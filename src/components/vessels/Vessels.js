import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Vessels extends Component {
	
	renderVessels = () => {

		let { vessels } = this.props

		if (!vessels) { return null }

		//Sort the vessles in alpha order by name
		vessels = vessels.sort((a, b) => a.name.toUpperCase() !== b.name.toUpperCase() ? a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1 : 0)

    return vessels.map( v => {
				if (!v.active) {return null}

				return (<><NavLink exact activeClassName="active" key={v.vessel_id} to={`/vessels/${v.vessel_id}`}>{`${v.name} -- Operator: ${v.operator}`}</NavLink><br/></>)
			}
		)
	}

  render() {
    return(
      <ul>
        <h2>Vessels List </h2>
				{this.renderVessels()}
      </ul>
    );
  }
};

export default connect(state => ({ vessels: state.vessels }))(Vessels);
