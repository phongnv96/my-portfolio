import About from '../components/About'
import Banner from '../components/Banner'
import ProcessList from '../components/Process/ProcessList'
import React from 'react'

function HomeContainer() {
  return (
    <>
        <Banner />
        <ProcessList />
        <About />
    </>
  )
}

export default HomeContainer