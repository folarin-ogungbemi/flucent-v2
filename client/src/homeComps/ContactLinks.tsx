import React, { ReactNode } from 'react'
import {NavLink} from 'react-router-dom'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const ContactLinks:React.FC= () => {

    interface IContact{
        name:ReactNode;
        color: string
        url:string;
    }

    const contacts:Array<IContact> = [
        {
            name: <FaGithub/>,
            color: '#4078c0',
            url:'https://github.com/folarin-ogungbemi'
        },
        {
            name: <FaLinkedin/>,
            color: '#0e76a8',
            url:'https://www.linkedin.com/in/folarin-ogungbemi/'
        },
        {
            name: <FaTwitter/>,
            color: '#1da1f2',
            url:'https://twitter.com/ftogungbemi'
        },
        {
            name: <MdEmail/>,
            color: '#4285f4',
            url:'mailto:ftogungbemi@gmail.com'
        },
    ]
  return (
    <ul className='flex gap-4 '>
        {contacts.map((contact, contactIndex) => 
        <li key={contactIndex} className='transition delay-100 ease-in-out hover:-translate-y-2'>
            <NavLink to={contact.url} className='text-2xl cursor-pointer' style={{ color: contact.color }}>{contact.name}</NavLink>
        </li>
        )}
    </ul>
  )
}

export default ContactLinks;