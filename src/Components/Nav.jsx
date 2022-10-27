import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Button from './Button'

import Style from "./nav.module.css"

const Nav = () => {
  return (
    <section id={Style.nav}>
         <article>
            <div className={Style.logo}><Logo/></div>
            <div className={Style.menu}><Menu/></div>
            <div className={Style.button}><Button/></div>
         </article>
    </section>

  )
}

export default Nav