import React from 'react'
import { BsFillMoonFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <h1>Where in the world ?</h1>
        </div>
        <div>
          <i className="fas fa-moon"></i> <BsFillMoonFill /> Dark mode
        </div>
        
      </header>
    </>
  )
}

export default Header
