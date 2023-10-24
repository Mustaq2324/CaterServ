import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Menu from './Menu/Menu'
import Team from './Team/Team'
import Table from './Table/Table'
import Blog from './blog/Blog'
import Event from './Event'
import Count from './Count'
function Home() {
  return (
    <div>
        
        <Hero/>
        <About/>
        <Count/>
        <Services/>
        <Event/>
        <Menu/>
        <Table/>
        <Team/>
        <Blog/>

    </div>
  )
}

export default Home