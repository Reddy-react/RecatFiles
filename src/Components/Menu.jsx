import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./nav.module.css"

const Menu = () => {
  return (
    <ol id={Style.olMenu}>
        <li><Link to="/hirepath">Hire Talents</Link></li>
        <li><Link to="/explorepath">Explore Work</Link></li>
        <li><Link to="/challengepath">Challenges</Link></li>
    </ol>
  )
}

export default Menu