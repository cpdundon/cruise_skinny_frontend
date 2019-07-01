import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="NavBar">
			<h3>
				<NavLink exact activeClassName="active" to="/about"  >About  |  </NavLink>
				<NavLink exact activeClassName="active" to="/" >Index</NavLink>
			</h3>
    </div>
  )
}

export default NavBar
