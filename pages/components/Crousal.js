"use client"

import React, { useState } from "react";
import  CarouselItem from "./CarouselItem";
import { useRouter } from "next/router";
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState('')
  const items = [
    {
      title: "Baseball",
      question:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
        options: ['aalso known as ambulation) is one of the main gait', 'balso known as ambulation) is one of the main gait', 'calso known as ambulation) is one of the main gait'],
      icon: "./williamstown-1057646.jgp"
    },
    {
      title: "Walking",
      question:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
        options: ['aalso known as ambulation) is one of the main gait', 'bkldfjd;l', 'calso known as ambulation) is one of the main gait'],
      icon: "./williamstown-1057646.jgp"
    },
    {
      title: "Weights",
      question:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
        options: ['aalso known as ambulation) is one of the main gait', 'balso known as ambulation) is one of the main gait', 'calso known as ambulation) is one of the main gait'],
      icon: "./williamstown-1057646.jgp"
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  const enable = (val) =>{
    setSelectedValue(val)
    console.log(val);
  }
  return (
    <div className="carousel px-10">
      <div
        className="inner"
        
      >
        {items.map((item, i) => {
          return <CarouselItem key={i} items={items} width={"100%"} active={activeIndex} options={item.options} question={item.question} enable={enable} updateIndex={updateIndex}/>;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
           <span>
          <img src="/angle-up-solid.svg" alt="down" />
          <p className="text-transparent ">
          Previous
          </p>
          </span>
        </button>
        {/* <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div> */}
        <button
          className="button-arrow"
          onClick={() => {
              updateIndex(activeIndex + 1);
              setSelectedValue('')
          }}
          disabled={selectedValue===''?true:false}
        >
          {/* <span class="material-symbols-outlined">arrow_forward_ios</span> */}
          <span>
          <img src="/chevron-down-solid.svg" alt="down" />
          <p className="text-transparent ">
          Next
          </p>
          </span>
          {/* hello */} 
        </button>
      </div>
    </div>
  );
};
export default Carousel;
