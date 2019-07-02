import React from 'react'
import { NavLink } from 'react-router-dom'

const style = {
    fontWeight: "bold",
    color: "red" //"#53B0AE" //Blue Turquoise
  }

const NavBar = () => {
  return (
    <div className="NavBar">
			<h3>
				<NavLink exact activeClassName="active" activeStyle={style} to="/about"  >About  |  </NavLink>
				<NavLink exact activeClassName="active" activeStyle={style} to="/" >Index</NavLink>
			</h3>
    </div>
  )
}

export default NavBar
