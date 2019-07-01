import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createOrUpdateVessel } from '../../actions/vessels.js'
	
const initState = { name: '', operator: '',  } 

class VesselInput extends Component {
	state = initState

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
    this.props.createOrUpdateVessel({ ...this.state })
    this.setState(initState)
  }

  render() {
    return (
      <div>
        <h2>Vessel Input</h2>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
						placeholder="Name"
						name="name"
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
          <input
						placeholder="Operator"
						name="operator"
            type="text"
            value={this.state.operator}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default connect(null, { createOrUpdateVessel })(VesselInput);
