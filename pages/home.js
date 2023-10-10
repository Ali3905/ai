import React from 'react'
import HomeLeft from './components/Home/homeLeft'
import HomeLeftSm from './components/Home/homeLeftSm'
import HomeRight from './components/Home/homeRight'
import MockupSection from './components/Home/MockupSection'

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
    </>
  )
}

export default home
