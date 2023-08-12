import React from 'react'
// import Layout from '../components/Layout'
import Intro from '../homeComps/Intro'
import Navigation from '../homeComps/Nav'
import ContactLinks from '../homeComps/ContactLinks'

const Home:React.FC = () => {
  return (
      <>
        <Intro/>
        <Navigation />
        <ContactLinks />
      </>
  )
}

export default Home;