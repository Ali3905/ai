import React from 'react'

const NavButton = ({ value }) => {
  return (
    <button class="btnn1">
      <strong className="strong2">{value}</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
    </button>
  )
}

export default NavButton
