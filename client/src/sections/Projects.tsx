import React from 'react'
import {projectData} from '../components/ProjectData'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import { Link } from 'react-router-dom';

// const [projects, setProjects] = React.useState(ProjectsData)

const Projects:React.FC = () => {
  return (
    <section id='projects' className='my-10'>
        <h3 className='text-xl font-bold mb-5'>Projects</h3>
        <div className='block'>
            {projectData.map((projects, projectsIndex) => 
            <Link to={projects.github} target='_blank' className='grid grid-cols-3 mb-5 hover:bg-[#0000000d] hover:backdrop-blur-lg hover:drop-shadow-md p-3 rounded-md group' key={projectsIndex}>
                <div
                style={{backgroundImage:`url(${projects.image})`}}
                className='bg-cover bg-center w-48 h-24 border border-slate-100 rounded-md'>
                </div>
                <div className='flex flex-col space-y-3 col-span-2 cursor-pointer'>
                    <div className='flex space-x-2'>
                        <span className='font-medium text-md group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-500'>{projects.name}</span>
                        <span className='my-auto group-hover:text-[#8a2be2d3]'><BsBoxArrowUpRight/></span>
                    </div>
                    <div className='flex'>
                        {projects.description}
                    </div>
                    <ul className='flex flex-wrap gap-2'>
                        {projects.technology.map((tech, index) =>
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

export default Projects;