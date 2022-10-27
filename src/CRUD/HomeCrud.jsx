import React from 'react'
import Style from './home.module.css'

import { Link } from 'react-router-dom'


const HomeCrud = () => {
  return (
   <section id={Style.nav}>
  <Link to="/create">Createuser</Link>
  <Link to="/user">Users</Link>
  {/* <Link to="/edit">Editusers</Link> */}
   </section>
  )
}

export default HomeCrud