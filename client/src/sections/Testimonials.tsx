import React from 'react'
import {testimonials} from '../components/TestimonialData'
import {MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew} from 'react-icons/md'
import {BiSolidQuoteAltLeft} from 'react-icons/bi'

const Testimonials:React.FC = () => {

  const [testimonialIndex, setTestimonialIndex] = React.useState<number>(0);
  const [autoSlide, setAutoSlide] = React.useState<boolean>(true)

   const prevSlide = () =>{
    const targetIndex = testimonialIndex === 0 ? testimonials.length - 1 : testimonialIndex - 1
    setTestimonialIndex(targetIndex)
  }

  const nextSlide = () =>{
    const targetIndex = testimonialIndex === testimonials.length - 1 ? 0 : testimonialIndex + 1
    setTestimonialIndex(targetIndex)
  }

  React.useEffect(()=>{
    let timeOut:number;
    if (autoSlide){
      timeOut = window.setTimeout(() => {
      nextSlide();
    }, 3500);} 

  return () =>{
    clearTimeout(timeOut)
  }
 },[]);
  return (
    <section id='testimonials' className='my-10'>
        <h3 className='text-xl font-bold mb-5'>Testimonials</h3>
        <div className='flex mx-auto w-fit space-x-5'
        onMouseEnter={()=>{setAutoSlide(false)}}
        onMouseLeave={()=>{setAutoSlide(true)}}
      >
        <span onClick={nextSlide}  className='cursor-pointer bg-[#00000033] hover:bg-[#00000080] rounded-full p-3'><MdOutlineArrowForwardIos className="text-skin-btnText"/></span>
        <span onClick={prevSlide}  className='cursor-pointer bg-[#00000033] hover:bg-[#00000080] rounded-full p-3'><MdOutlineArrowBackIosNew className="text-skin-btnText"/></span>
      </div>
      <div className='relative flex space-x-5 w-[80%] mx-auto p-3 cursor-pointer'>
        <div className='relative w-full bg-skin-fill rounded-md drop-shadow-lg '>
          <span className='absolute left-[5%] top-[5%]'><BiSolidQuoteAltLeft className='text-3xl text-skin-btnText'/></span>
          <div className='text-left p-10'>
            <p>{testimonials[testimonialIndex].content}</p>
            <p className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-md font-bold mt-2'>{testimonials[testimonialIndex].name}</p> 
            <small className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>{testimonials[testimonialIndex].company}</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;