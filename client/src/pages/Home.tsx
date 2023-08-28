import React from 'react'
import {NavLink} from 'react-router-dom'
import Layout from '../components/Layout'

import Intro from '../homeComps/Intro'
import Header from '../homeComps/Header'
import Skills from '../homeComps/Skills';

import {
  frontendT,
  backendT,
  dataBaseT,
  dataAnalysisT,
  versionControl_cloudServicesT,
  otherT} from '../components/SkillsData'
import ProjectData from '../components/ProjectData'

import About from '../sections/About';
import Projects from '../sections/Projects'


interface ITechnology{
    name:string;
    url?:string;
}


const Home:React.FC = () => {

const TechnologyDict:Array<{[key:string]:Array<ITechnology>}> =[
    {frontend_frameworks:frontendT},
    {backend_frameworks:backendT},
    {database:dataBaseT},
    {dataAnalysis:dataAnalysisT},
    {testingqcizcd_cloudServices:versionControl_cloudServicesT},
    {design_idezcli:otherT}
  ]

 const [skillsIndex, setSkillsIndex] = React.useState<number>(0)
 const [autoSlide, setAutoSlide] = React.useState<boolean>(true)

 React.useEffect(()=>{
  let timeOut:number;
  if (autoSlide){
    timeOut = setTimeout(() => {
    nextSlide();
  }, 3500);} 

  return () =>{
    clearTimeout(timeOut)
  }
 });

  const prevSlide = () =>{
    const targetIndex = skillsIndex === 0 ? TechnologyDict.length - 1 : skillsIndex - 1
    setSkillsIndex(targetIndex)
  }
  const nextSlide = () =>{
    const targetIndex = skillsIndex === TechnologyDict.length - 1 ? 0 : skillsIndex + 1
    setSkillsIndex(targetIndex)
  }

  const jumpToImage = (i:number) =>{
    setSkillsIndex(i)
  }

  return (
      <Layout title='flucent Dev | Home' content='flucent developer portfolio website homepage'>
        <div className='relative text-skin-font bg-skin-fill flex flex-col xl:grid xl:grid-cols-2 grid-rows-2 gap-2 max-w-[1400px] mx-auto'>
            <div className='col-span-2'>
              <Header/>
            </div>
            <aside className='flex flex-col justify-between max-w-[35%] 2xl:w-[25%] bg-[rgba(0,0,0,0.05)] pl-5 xl:fixed xl:h-[100dvh]'>
              <div>
                <Intro/>
                <Skills 
                  techSkills={TechnologyDict[skillsIndex]}
                  setAutoSlide={setAutoSlide}
                  technologyDict={TechnologyDict}
                  skillsIndex={skillsIndex}
                  prevSlide={prevSlide}
                  nextSlide={nextSlide}
                  jumpToImage={jumpToImage}/> 
              </div>
              <div className='mb-5'>
                <small>Built and Designed by <NavLink to='https://github.com/folarin-ogungbemi/flucent-v2' className='text-skin-link font-bold'>Folarin Ogungbemi</NavLink></small>
              </div>
            </aside>
            <div className='flex flex-col p-5 max-w-[65%] xl:absolute right-0 top-16'>
              <About />
              <Projects />
            </div>
          </div>
      </Layout>
  )
}

export default Home;