import React from 'react'
import { HeroSection, Navbar,Companies, Achievement,FeedBack,Footer , Backpacks } from './components'

function App() {

  return (
    <div className="app">
        <Navbar/>
        <HeroSection/>
        <Companies/>
        <Backpacks/>
        <Achievement/>
        <FeedBack/>
        <Footer/>
    </div>
  )
}

export default App
