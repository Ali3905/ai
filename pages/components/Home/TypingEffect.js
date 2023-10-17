import React, { useState, useEffect } from 'react';

const TypingEffect = ({strings, name , name1, cursor}) => {
    useEffect(() => {
        
        const wordArray = strings
        const delay = 120;
        const cursorElement = document.querySelector(".cursor_sm");
        const typedWordsElement = document.querySelector(".typed-words");
    
        const typeWords = (words, index) => {
          const word = words[index % words.length];
          let charIndex = 0;
          let currentWord = "";
    
          const typeChar = () => {
            currentWord += word[charIndex];
            typedWordsElement.textContent = currentWord;
            charIndex++;
    
            if (charIndex < word.length) {
              setTimeout(typeChar, delay);
            } else {
              setTimeout(() => {
                currentWord = "";
                charIndex = 0;
                index++;
                typeWords(words, index);
              }, delay * 3);
            }
          };
    
          const blinkCursor = () => {
            //   console.log(cursorElement);
            cursorElement.classList.toggle("show");
            setTimeout(blinkCursor, 500);
          };
    
          typeChar();
          blinkCursor();
        };
    
        typeWords(wordArray, 0);
      }, []);
  
  return (
    <div>
        <h1 style={{ lineHeight: "1" }}><span className={`${name1}`}></span></h1>
            <h1 class="animated-text">
              <span className={`typed-words ${name}`}></span>
              <span className={`${cursor}`}></span>
            </h1>
    </div>
  );
};

export default TypingEffect;
