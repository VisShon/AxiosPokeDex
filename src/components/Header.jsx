import React from 'react'
import Logo from '../Pokédex_logo.png'
function Header() {
  return (
    <div className="header">
        <img src={Logo} height={"50vh"}></img>
    </div>
  )
}

export default Header