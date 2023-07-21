import React, { ReactNode } from 'react'
import {Helmet} from "react-helmet";

interface LayoutProps{
    title: string;
    content: string;
    children: ReactNode;
}

const Layout = ({title, content, children}: LayoutProps) => {
  return (
    <>
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={content} />
        </Helmet>
        <div>{children}</div>
    </>
  )
}

export default Layout