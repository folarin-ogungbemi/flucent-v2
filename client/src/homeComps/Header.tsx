import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import SwitchMode from '../components/SwitchMode'

const Header:React.FC = () => {

  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState<boolean>(true);

  React.useEffect(() =>{

    const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const navBar = document.getElementsByTagName('header')[0];

    (prevScrollPos > currentScrollPos || currentScrollPos === 0) ? (setVisible(true), navBar.style.top = '0')
    : (setVisible(false), navBar.style.top = `-${navBar.offsetHeight}px`)
      setPrevScrollPos(currentScrollPos);

      currentScrollPos === 0 ? (navBar.style.boxShadow = 'none', navBar.style.background = 'transparent')
      : (navBar.style.boxShadow = '0px 0.1px 3px 0.5px #0000001a', navBar.style.background = '#fff')
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, [prevScrollPos, visible]);

  return (
    <header className='flex gap-2 fixed h-fit w-full max-w-[1400px] p-5 z-20 transition-all delay-200 duration-500 ease-in-out'>
      <div className='block w-[35%]'>
        <Logo/>
      </div>
      <div className='flex justify-between px-3 w-[65%] '>
        <Nav/>
        <SwitchMode/>
      </div>
    </header>
  )
}

export default Header;