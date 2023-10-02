import React from 'react'
import photo from '../assets/images/folarin-photo.jpg'

const About:React.FC = () => {
  return (
    <section id='about' className='mb-10'>
      <h3 className='text-xl font-bold mb-3'>About</h3>
      <div className='flex'>
        <div className='w-[60%] mb-5 text-skin-font'>
          <div className='mb-10 space-y-2'>
            <p>
            I am keen about analysing data with Python and Utilising Django framework to build the server side for software applications
            </p>
            <p>
                Currently, I am learning data analytics through data Preprocessing, Modelling and Evaluation with Python.
            </p>
            <p>
                My programming journey sets me on the path of Leveraging technology to solve real-world challenges. This is my focus.
            </p>
          </div>
          <button className='rounded-full p-3 border'>Read more ...</button>
        </div>
        <div className='w-fit mx-auto'>
          <img src={photo} alt="folarin's picture" className='w-[140px] h-[180px] rounded-md'/>
        </div>
      </div>
    </section>
  )
}

export default About;