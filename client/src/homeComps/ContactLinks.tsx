import React, { ReactNode } from 'react'
// import {Link} from 'react-router-dom'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const ContactLinks:React.FC= () => {

    interface IContact{
        name:ReactNode;
        url:string;
    }

    const contacts:Array<IContact> = [
        {
            name: <FaGithub/>,
            url:'https://github.com/folarin-ogungbemi'
        },
        {
            name: <FaLinkedin/>,
            url:'https://www.linkedin.com/in/folarin-ogungbemi/'
        },
        {
            name: <FaTwitter/>,
            url:'https://twitter.com/ftogungbemi'
        },
        {
            name: <MdEmail/>,
            url:'mailto:ftogungbemi@gmail.com'
        },
    ]
  return (
    <ul className='flex justify-between w-[50%] mx-auto '>
        {contacts.map((contact, contactIndex) => 
        <li key={contactIndex}>
            <div className='text-2xl'>{contact.name}</div>
        </li>
        )}
    </ul>
  )
}

export default ContactLinks;