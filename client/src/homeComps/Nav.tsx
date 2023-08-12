import React from 'react'
import {Link} from 'react-router-dom'

const Nav:React.FC = () => {

  const navLinks:Array<string> = ['about', 'skills', 'experience', 'projects']
  console.log(navLinks);

  return (
    <nav className='flex flex-col space-y-3'>
      {navLinks.map((nav, navIndex)=>
        <Link to={`/${nav}`} key={navIndex} className='capitalize'>{nav}</Link>
      )}
    </nav>
  )
}

export default Nav;