import cuid from 'cuid'
export const cuidFn = cuid

// synchronous actions
export const setVessels = vessels => {
  return {
    type: "SET_VESSELS",
    vessels,
  }
}

export const addVessel = vessel => {
  return {
    type: "ADD_VESSEL",
    vessel,
  }
}

// async actions

export const getVessels = () => {
  return dispatch => {
    return fetch("http://localhost:3001/vessels", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          console.log(response)
          dispatch(setVessels(response))
//					dispatch(createOrUpdateVessel({name: "Orca", operator: "Clint Eastwood", splash_date: "1995-07-04"}, ""))
        }
      })
      .catch(console.log)
  }
}

export const createOrUpdateVessel = (vessel, history) => {
  let method
	let path = "http://localhost:3001/vessels" 

	if (!!vessel.id) {
		method = "PATCH"
		path += `/${vessel.id}` 
	} else {
		method = "POST"
		vessel.vessel_id = cuid()
	} 
	
	return dispatch => {
    return fetch(path, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ vessel })
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(addVessel(response))
//          dispatch(resetLoginForm())
//          history.push('/')
        }
      })
      .catch(console.log)
  }
}
