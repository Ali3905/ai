"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


export const CarouselItem = ({ items, width, active, question, options, enable, updateIndex }) => {
    const [btn, setbtn] = useState(false)
    const router = useRouter()

    const showBtn = () => {
        enable(-"a")
        setbtn(true)
    }

    const next = () => {
        if (active === items.length-1) {
          console.log(items.length);
          router.push("/home")
        }else{

          updateIndex(active + 1)
        }
    }

    useEffect(()=>{
        console.log(options)
    },[])
  return (
    <div className="carousel-item relative" style={{ width: width ,transform: `translateY(-${active * 100}%)` }}>
      {/* <div></div>
      <img className="carousel-img" src={item.icon.default} />
      <div className="carousel-item-text">{item.description}</div> */}
      {/* <div> */}
      <div className="inner-crousel-item">

      <h6>{question}</h6>
      {options.map((ele, i)=>{
          return <label className={`options`} style={{"width": `${ele.length*10}px` }}>
            <input 
            type="radio" 
            name={question} 
            // checked={enable(value)}
            onClick={showBtn}
            />
            <p>{ele}</p>
        </label>
      })}
      {btn && <button className="btn-main" onClick={next}>Ok</button>}
      {/* </div> */}
      </div>
    </div>
  );
};

export default CarouselItem;