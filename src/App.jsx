import React from 'react'
import { HeroSection, Navbar,Companies, Achievement,FeedBack,Footer , Backpacks, Contact} from './components'

function App() {

  return (
    <div className="app">
        <Navbar/>
        <HeroSection/>
        <Companies/>
        <Backpacks/>
        <Achievement/>
        <FeedBack/>
        <Contact />
        <Footer/>
    </div>
  )
}

export default App
