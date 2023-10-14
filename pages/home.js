import React from 'react'
import HomeLeft from './components/Home/homeLeft'
import HomeLeftSm from './components/Home/homeLeftSm'
import HomeRight from './components/Home/homeRight'
import MockupSection from './components/Home/MockupSection'
import ReasonList from './ReasonList'
import LapySection from './LapySection'
import Testimonials from './testimonials'
import FAQs from './FAQs'

const home = () => {
  return (
    <>
    <div className='bg-white'
    style={{
      "display": 'grid',
      "gridTemplateColumns": "3fr 1fr"
    }}>
      <HomeLeft />
      <HomeRight />
    </div>
    <HomeLeftSm />
    <MockupSection />
    <ReasonList />
    <Testimonials />

    <LapySection />
    <FAQs/>


    </>
  )
}

export default home
