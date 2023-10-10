
"use client"
import React, { useEffect, useState } from 'react'
import NavbarSm from '../NavbarSm'

const Menu = ({showMenu, hideShowMenu}) => {

  return (
    <div className={showMenu? "show menu" : "hide menu"}>
      <NavbarSm showMenu={showMenu} hideMenu={hideShowMenu}/>
      <ul className='menu_ul'>
        <li>Home</li>
        <li>Our Services</li>
        <li>About Us</li>
        <li>Portfolio</li>
        <li>Reviews</li>
        <li>Contact Us</li>
      </ul>
      <div className='mt-3'>
        <div className='socials'>
        <p>WatsApp</p>
        <p>Telegram</p>
        </div>
      </div>
    </div>
  )
}

export default Menu
