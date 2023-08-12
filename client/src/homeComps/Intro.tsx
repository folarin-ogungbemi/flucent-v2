import React from 'react'
import wave from '../assets/images/waving-hand-medium-skin-tone-svgrepo-com.svg'

const Intro:React.FC = () => {
  return (
   <div className='max-w-[1400px] mx-auto p-5'>
      <div className='flex py-5 px-10 shadow-lg shadow-[#55555580] h-fit w-fit rounded-lg space-x-5'>
          <img src={wave} height={2.5} width={45} alt="Hello wave" />
          <div className='flex flex-col'>
              <span className='text-sm'>Hi, I am</span><span className=' font-medium text-3xl'>Folarin</span>
          </div>
      </div>
      <section className="mt-5">
        <h2 className="text-2xl">Fullstack Software Developer</h2>
        <p>I am a software engineer with a focus on utilizing Python simplicity and harnessing Javascript's versatility to leverage technology.</p>
      </section>
    </div>
  )
}

export default Intro;