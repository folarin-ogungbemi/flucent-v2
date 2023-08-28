import React from 'react'
import {Link} from 'react-scroll'

const Nav:React.FC = () => {

  const navLinks:Array<string> = ['about', 'projects', 'experiences', ]

  return (
    <nav className='flex space-x-5 cursor-pointer'>
      {navLinks.map((nav, navIndex)=>
        <Link to={nav} activeClass="active" spy={true} smooth={true} offset={-85} duration={500} key={navIndex} className='nav-link text-md text-skin-link capitalize w-fit hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500'>{nav}</Link>
      )}
    </nav>
  )
}

export default Nav;