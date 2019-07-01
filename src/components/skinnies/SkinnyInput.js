import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createOrUpdateThought } from '../../actions/skinnies.js'
	
const initState = { thought: '',  } 

class SkinnyInput extends Component {
	constructor(props) {
		super(props)
		this.state = initState
	}

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()
		const thought = {...this.state}
		thought.vessel_id = this.props.vessels.find(v => (v.vessel_id === this.props.vesselId)).id  //this.props.vessel_id

    this.props.createOrUpdateThought(thought, this.props.vesselId)
    this.setState(initState)
  }

  render() {
    return (
      <div>
        <h2>New Skinny</h2>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
						placeholder="Your skinny"
						name="thought"
            type="text"
            value={this.state.thought}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default connect((state => ({vessels: state.vessels})), { createOrUpdateThought })(SkinnyInput);
