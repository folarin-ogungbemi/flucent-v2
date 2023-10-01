import React from "react";
import {BiSolidMoon, BiSolidSun} from 'react-icons/bi'

const SwitchMode = () => {

  const setDarkMode = () =>{
    document.querySelector('html')?.setAttribute('data-theme', 'dark')
  }

  const setLightMode = () =>{
    document.querySelector('html')?.setAttribute('data-theme', 'light')
  }

  const [mode, setMode] = React.useState(false)

  const handleModeState = () =>{
    setMode(prevState => !prevState)
    
  }

  return (
    <div className='flex space-x-2 text-sm my-auto switch-in-transition'> {!mode ?<span>Light mode </span>: <span>Dark mode</span>}
      <div className="w-10 h-4 bg-slate-500 rounded-full relative cursor-pointer my-auto drop-shadow-md transition-all ease-in-out delay-200" onClick={handleModeState}>
        {!mode ? <>{setLightMode()}<span className="w-3 h-3 bg-[#f6ba00] rounded-full absolute left-1 top-[50%] translate-y-[-50%]"></span>
          <BiSolidSun className="w-3 h-3 text-[#fff] absolute right-1.5 top-[50%] translate-y-[-50%]"/></>
         : <>{setDarkMode()}<span className="w-3 h-3 bg-[#fff] rounded-full absolute right-1 top-[50%] translate-y-[-50%]"></span>
          <BiSolidMoon className="w-3 h-3 text-[#000] absolute left-1.5 top-[50%] translate-y-[-50%]"/></>
        }
      </div>
    </div>
  )
}

export default SwitchMode;