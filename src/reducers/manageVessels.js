import cuid from 'cuid'
export const cuidFn = cuid

const defaultState = { vessels: [] }

export default function manageVessels (state = defaultState, action) {
  switch (action.type) {
    case "SET_VESSELS":
      return { vessels: [...action.vessels] }
    default:
      return state
  }
}
