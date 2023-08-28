import React, { ReactNode } from 'react'
import {Helmet} from "react-helmet";
import ContactLinks from '../homeComps/ContactLinks'

interface LayoutProps{
    title: string;
    content: string;
    children: ReactNode;
}

const Layout:React.FC<LayoutProps> = ({title, content, children}) => {
  return (
    <div className='realtive h-fit'>
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={content} />
        </Helmet>
        <div>{children}</div>
        <div className='fixed bottom-[5%] left-[50%] translate-x-[-50%] bg-[#F5F5DC0d] backdrop-blur-lg px-5 py-2 shadow-md shadow-skin-shadow rounded-full'>
          <ContactLinks/>
        </div>
    </div>
  )
}
 
export default Layout;