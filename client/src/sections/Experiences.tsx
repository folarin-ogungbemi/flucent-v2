import React from 'react'
import {ExperienceData} from '../components/ExperienceData'
import {Link} from 'react-router-dom'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { GiDiamonds } from 'react-icons/gi'
import { HiArrowLongRight } from 'react-icons/hi2'

const Experiences:React.FC = () => {
  return (
    <section id='experiences' className='my-10'>
        <h3 className='text-xl font-bold mb-5'>Experiences & Voluntary Services</h3>
        <div className='block'>
            {ExperienceData.map((service, serviceIndex) => 
            <Link to={service.url} target='_blank' className='grid grid-cols-3 mb-5 hover:bg-[#0000000d] hover:backdrop-blur-lg hover:drop-shadow-md p-3 rounded-md group' key={serviceIndex}>
                <div className='flex uppercase space-x-5'>
                  <small>{service.startDate}</small> 
                  <HiArrowLongRight/>
                  <small>{service.endDate}</small>
                </div>
                <div className='flex flex-col space-y-3 col-span-2 cursor-pointer'>
                    <div className='flex space-x-2'>
                        <span className='font-medium text-md group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-500'>{service.position}</span>
                        <GiDiamonds className='my-auto text-xs'/>
                        <span className='font-medium text-md group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-500'>{service.company}</span>
                        <span className='my-auto group-hover:text-[#8a2be2d3]'><BsBoxArrowUpRight/></span>
                    </div>
                    <div className='flex flex-col space-y-2'>
                      <p className='text-skin-highlight'>{service.role}</p>
                      <p>{service.content}</p>
                    </div>
                    <ul className='flex flex-wrap gap-2'>
                        {service.technology.map((tech, index) =>
                        <li key={index} className='bg-skin-oFill backdrop-blur-lg rounded-full text-xs font-medium px-4 py-1'>
                            {tech}
                        </li>
                    )}
                    </ul>
                </div>
            </Link>
            )}
        </div>
    </section>
  )
}

export default Experiences;