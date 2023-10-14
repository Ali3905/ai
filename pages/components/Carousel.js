import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import testimonials from "../testimonials";


export const Carousel = ({ testimonials, items, width, active, question, options, enable, updateIndex }) => {
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
    <div className="carousel-item relative" style={{ width: "100%" ,transform: `translateX(-${active * 100}%)` }}>
      <div className="inner-crousel-item">

      <h6>"ABC</h6>
      {testimonials.map((ele, i)=>{
          return <label className={`options`} style={{"width": `${ele.length*10}px` }}>
            
        </label>
      })}
      {btn && <button className="btn-main" onClick={next}>Ok</button>}
      {/* </div> */}
      </div>
    </div>
  );
};

export default Carousel;