import React from 'react'
import {MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew} from 'react-icons/md'
import {GoDotFill} from 'react-icons/go'

interface ITechnology{
    name:string;
    url?:string;
}

interface SkillsProps{
    technologyDict:Array<{[key:string]:Array<ITechnology>}>,
    techSkills:{[key:string]:Array<ITechnology>},
    skillsIndex:number,
    prevSlide: () => void,
    nextSlide: () => void,
    jumpToImage: (i:number) => void,
    setAutoSlide:React.Dispatch<React.SetStateAction<boolean>>,
}

const Skills:React.FC<SkillsProps>= ({techSkills, technologyDict, skillsIndex, prevSlide, nextSlide, setAutoSlide, jumpToImage}) => {
  return (
    <div id='skills' className='w-[90%] drop-shadow-lg'>
        {Object.entries(techSkills).map(([key, values], i) =>(
            <div onMouseEnter={()=>{setAutoSlide(false)}} onMouseLeave={()=>{setAutoSlide(true)}} className='relative text-center flex flex-col justify-center w-full mx-auto rounded-lg p-5 m-5 group' key={i}>
                <span className='text-md font-medium uppercase group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-500'>{key.split('_').join(' ' + '&' + ' ').replace(/([a-z])([A-Z])/g, '$1 $2').split('q').join(', ').split('z').join('/')}</span>
                <div className='my-5 grid grid-rows-2 grid-cols-4 gap-4 self-center h-fit w-fit'>
                    {values.map((value, index)=>
                    <div key={index}>
                        <div className='relative bg-[#fff] h-10 w-10 rounded-full mx-auto'>
                            <img src={value?.url} className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-8 w-8 rounded-full' alt={`${value.name} image`} />
                        </div>
                        <small className='text-center text-xs font-light text-skin-fontSm'>{value.name}</small>
                    </div>
                )}
                </div>
                <span onClick={nextSlide} className='hidden group-hover:block absolute right-0 top-[5%] cursor-pointer bg-[#00000033] hover:bg-[#00000080] rounded-full p-3'><MdOutlineArrowForwardIos className="text-white"/></span>
                <span onClick={prevSlide} className='hidden group-hover:block absolute left-0 top-[5%] cursor-pointer bg-[#00000033] hover:bg-[#00000080] rounded-full p-3'><MdOutlineArrowBackIosNew className="text-white"/></span>
                <span className='absolute left-[50%] translate-x-[-50%] bottom-0 flex space-x-2 mt-2 mb-3'>
                    {technologyDict.map((_, i) =>
                        <span key={i} onClick={() => jumpToImage(i)} className='cursor-pointer'>{i === skillsIndex ? <GoDotFill className="text-slate-800" /> : <GoDotFill className="text-slate-400" />}</span>
                    )}
                </span>
            </div>
        ))}
    </div>
  )
}

export default Skills;