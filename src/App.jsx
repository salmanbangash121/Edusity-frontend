import React from 'react'
import Navbar from './component/Navbar/navbar'
import Hero from './component/Hero/Hero'
import Program from './component/Program/program'
import Title from './component/Title/Title'
import About from './component/About/About'
import Gallery from './component/Gallery/Gallery'


const App = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <div className='container'>

      <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Program/>
      <About/>
      <Gallery/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      </div>

    </div>
  )
}

export default App
