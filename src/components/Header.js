import React from 'react'

function Header({onDarkModeClick, darkMode}) {
    console.log(onDarkModeClick)
  return (
    <div>
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
            {darkMode ? "Dark Mode": "Light Mode"} 
            </button>
        </header>
    </div>
  )
}

export default Header