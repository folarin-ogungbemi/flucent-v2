import React from 'react'

const About:React.FC = () => {
  return (
    <section id='about' className='mb-10'>
      <h3 className='text-xl font-bold mb-3'>About</h3>
      <div className='space-y-3 w-[90%] mb-5 text-skin-font'>
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
    </section>
  )
}

export default About;