import React, { useState } from 'react'

const LapySection = () => {
  const [index, setindex] = useState(0)
  const images = [
    "https://media.macphun.com/img/uploads/uploads/skylum/l/01EditviewMacOSEN-min.png",
    "https://media.macphun.com/img/uploads/uploads/skylum/l/02CatalogMacOsEN-min.png",
    "https://media.macphun.com/img/uploads/uploads/skylum/l/03EditviewwithonboardingMacOSEN-min.png",
    "https://media.macphun.com/img/uploads/uploads/skylum/l/04ExtrastabMacOsEN-min.png",
    "https://media.macphun.com/img/uploads/uploads/skylum/l/05PresetsviewMacOSEN-min.png",

  ]
  const changePic = ( func ) => {
    if(func === "inc"){
      if(index<images.length - 1){
        setindex(prev => prev+1)
      }else{
        setindex(0)
      }
    }
    if(func === "dec"){
      if(index>0){
        setindex(prev => prev-1)
      }else{
        setindex(images.length - 1)
      }
    }
  } 

  return (
    <section className='laptop_section'>
      <svg onClick={()=>changePic("dec")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>

      <img 
      className='laptop_img'
      src={images[index]}
      width={100}
      height={200}
      />

      <svg onClick={()=>changePic("inc")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>


    </section>
  )
}

export default LapySection
