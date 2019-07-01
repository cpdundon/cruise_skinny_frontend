const defaultState = { vessels: [] }

export default function manageVessels (state = defaultState, action) {
  switch (action.type) {
    case "SET_VESSELS":
      return { vessels: [...action.vessels] }
		case "ADD_VESSEL":
			const reducedVessels = state.vessels.filter(v => v.vessel_id !== action.vessel.vessel_id)
			return {vessels: [...reducedVessels.concat(action.vessel)]}
		case "ADD_THOUGHT":
			const thisVessel = state.vessels.find(v => (v.vessel_id === action.vesselId))			
			thisVessel.skinny.push(action.thought)
			
			return {vessels: [...state.vessels]}
    default:
      return state
  }
}
