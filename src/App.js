import React from 'react'
import Hero from './components/HeroSection/Hero'
import './App.css'
import Brand from './components/Brand/Brand'
import Work from './components/Work/Work'
import Create from './components/Createpage/Create'
import Feature from './components/Feature/Feature'
import Know from './components/Knowledge/Know'
import Stamp from './components/Stamp/Stamp'
import Resource from './components/Resource/Resource'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Hero />
        <Brand />
        <Work />
        <Create />
        <Feature />
        <Know />
        <Stamp />
        <Resource />
        <Footer />
    </div>
  )
}

export default App