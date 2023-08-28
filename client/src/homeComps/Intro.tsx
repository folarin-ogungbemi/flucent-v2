import React from 'react'
// import wave from '../assets/images/waving-hand-medium-skin-tone-svgrepo-com.svg'

const Intro:React.FC = () => {
  return (
    <div className='h-fit 2xl:w-[80%] mt-20'>
      <h2 className='font-bold text-4xl mb-3'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Folarin Ogungbemi</span>
      </h2>
      <section className="space-y-2">
        <h3 className="text-2xl font-medium">Fullstack Software Developer</h3>
        <p className='w-[80%] text-skin-fontSm font-light text-sm'>I am a software developer with a focus on utilizing Python simplicity and harnessing Javascript's versatility to leverage technology.</p>
      </section>
    </div>
  )
}

export default Intro;