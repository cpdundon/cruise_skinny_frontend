const defaultState = { vessels: [] }

export default function manageVessels (state = defaultState, action) {
  switch (action.type) {
    case "SET_VESSELS":
      return { vessels: [...action.vessels] }
		case "ADD_VESSEL":
			const reducedVessels = state.vessels.filter(v => v.vessel_id === action.vessel.vessel_id)
			return {vessels: [...reducedVessels.concat(action.vessel)]}
    default:
      return state
  }
}
