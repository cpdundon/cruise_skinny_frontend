import { cuidFn } from './vessels.js'

// synchronous actions
export const addThought = (thought, vesselId) => {
  return {
    type: "ADD_THOUGHT",
    thought,
		vesselId,
  }
}

// async actions

export const createOrUpdateThought = (skinny, vesselId) => {
  let method
  let path = "http://localhost:3001/skinnies"

  if (!!skinny.id) {
    method = "PATCH"
    path += `/${skinny.id}`
  } else {
    method = "POST"
    skinny.skinny_id = cuidFn()
  }

  return dispatch => {
    return fetch(path, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ skinny })
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(addThought(response, vesselId))
        }
      })
      .catch(console.log)
  }
}

