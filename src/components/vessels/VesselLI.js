import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class VesselLI extends Component {
  constructor (props) {
    super(props)
    this.state = { vote: 0, }
  }


  render () {
		const { vessel } = this.props

		const clickUpVote = () => {
		
			this.setState ({
											vote: this.state.vote + 1,
										})
			
			return null
		}
	
    return(
      <li key ={vessel.id.toString()}>
        <Link to={`/vessels/${vessel.vessel_id}`}>
          {`${vessel.name} -- Operator: ${vessel.operator}`}
        </Link>
        <div> </div>
        <button onClick={clickUpVote}>Up-Vote</button>
        <div>{this.state.vote}</div>
      </li>
    )
  }

}; 

export default VesselLI;
