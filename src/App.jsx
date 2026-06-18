import React from 'react'

import Navbar from './component/Navbar/navbar'
import Hero from './component/Hero/Hero'
import Program from './component/Program/program'
import Title from './component/Title/Title'
import About from './component/About/About'
import Gallery from './component/Gallery/Gallery'
import Testimonials from './component/Testimonials/Testimonials'


const App = () => {
  return (
    <div>

      <Navbar />
      <Hero />
      <div className='container'>

      <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Program/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Gallery/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      </div>
     <Testimonials/>

    </div>
  )
}

export default App
