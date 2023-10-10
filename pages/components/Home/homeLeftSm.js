"use client"

import React, { useEffect, useRef, useState } from 'react'
import NavbarSm from '../NavbarSm'
import Menu from './Menu'
import Script from 'next/script'
import Button from '../NavButton'
import Btn from '../Btn'

const homeLeftSm = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [typedWords, setTypedWords] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const hideShowMenu = (prev) => {
    setShowMenu(!prev);
    console.log(12);
  };

  const [play, setPlay] = useState(false);
  const vidRef = useRef();

  const handlePlayVideo = () => {
    setPlay(prev => !prev);
    vidRef.current.play();
  };

  const handlePauseVideo = () => {
    setPlay(prev => !prev);
    vidRef.current.pause();
  };

  const wordArray = [
    "Graphics",
    "Marketing",
    "Editings",
    "Advertisement",
    "Product Photos",
    "Architecture",
    "Interiors",
    "Fashion",
    "Art",
    "etc..."
  ];

  const delay = 120;

  const typeWords = (words, index) => {
    const word = words[index % words.length];
    let charIndex = 0;
    
    const typeChar = () => {
      if (charIndex < word.length) {
        setTypedWords(prev => prev + word[charIndex]);
        charIndex++;
        setTimeout(typeChar, delay);
      } else {
        setTimeout(() => {
          setCurrentWordIndex(index + 1);
          if (index === words.length - 1) {
            // Reset currentWordIndex when it reaches the end of the wordArray
            setCurrentWordIndex(0);
          }
        }, delay * 2);
      }
    };

    typeChar();
  };

  useEffect(() => {
    if (currentWordIndex < wordArray.length) {
      setTypedWords('');
      typeWords(wordArray, currentWordIndex);
    }
  }, [currentWordIndex]);
  
  return (
    <>

      <div className='bg'>
        <video src='/bg.mp4' autoPlay loop muted />
        <div className='home_left_sm'>
          {!showMenu ? <NavbarSm showMenu={showMenu} hideMenu={hideShowMenu} /> : null}
          <h2 style={{marginTop:'10px'}}>
            <span>WE CREATE</span>
            <span><i>A</i>WESOME</span>
            <span className="typed-words name2">{typedWords}</span>
          </h2>
          <div className='scroll'>
          <img src="data:image/png;base64,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" />
           
                       
            <div className='scroll_right '>
              {/* <p>explore collection</p> */}
              <Btn value={"Explore Collections"} />
              <p></p>
              <Btn value={"Community Showcase"} />
              {/* <p>Community</p> */}
            </div>
          </div>
          <div className='vid_div'>
            <video src="/mushrooms.mp4" ref={vidRef} setPlay={!play ? true : false}></video>
            {/* <button> */}
            {!play ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={handlePauseVideo} fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
              </svg>

              : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={handlePauseVideo} fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
              </svg>
            }
          </div>
        </div>
        <Menu showMenu={showMenu} hideShowMenu={hideShowMenu} />
      </div>
    </>
  )
}

export default homeLeftSm
