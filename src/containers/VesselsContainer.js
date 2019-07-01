import React, { Component } from 'react'
import VesselInput from '../components/vessels/VesselInput'
import Vessels from '../components/vessels/Vessels'

class VesselsContainer extends Component {

  render() {
    return (
      <div>
        <VesselInput /><br/>
        <Vessels />
      </div>
    )
  }
}

export default VesselsContainer; 
