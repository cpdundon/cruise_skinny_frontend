// synchronous actions
export const setVessels = vessels => {
  return {
    type: "SET_VESSELS",
    vessels,
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
        }
      })
      .catch(console.log)
  }
}
