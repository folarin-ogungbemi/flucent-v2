import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import SwitchMode from '../components/SwitchMode'

const Header:React.FC = () => {
  return (
    <div className='flex gap-2 shadow shadow-skin-shadow h-fit w-full p-5 z-20 drop-shadow-md'>
      <div className='block w-[35%]'>
        <Logo/>
      </div>
      <div className='flex justify-between px-3 w-[65%] '>
        <Nav/>
        <SwitchMode/>
      </div>
    </div>
  )
}

export default Header;