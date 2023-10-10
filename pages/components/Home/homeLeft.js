import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar";

const homeLeft = () => {
  useEffect(() => {
    const wordArray = [
      "Graphic Design",
      "Marketing",
      "Editing",
      "Advertisement",
      "Product Photos",
      "Architecture",
      "Interior Design",
      "Fashion",
      "etc..."
    ];
    const delay = 120;
    const cursorElement = document.querySelector(".cursor");
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
        cursorElement.classList.toggle("show");
        setTimeout(blinkCursor, 500);
      };

      typeChar();
      blinkCursor();
    };

    typeWords(wordArray, 0);
  }, []);

  return (
    <div className="homeleft">
      <video src='/bg.mp4' autoPlay loop muted />
      <div className="homeLeft">
        <nav>
          <h5>
            <img className="silverlogo" src="/Golden Divyvy Logo.png"/>
          </h5>
          <Navbar />
        </nav>
        <div class="container">
          <div class="box">
            <span class="title">✨Dream it.<br />👆Select it.<br />👀See it.</span>
            <div>
              <p>Quickly create, make precise edits, add to, remove, or replace images right in Divyvy AI Editor with simple text prompts powered by Generative AI</p>
            </div>
          </div>
        </div>
        <div className="bottom_container">
          <div className="heading_container">
            <div>
              {/* <input placeholder="Describe what you want or directly click the &quot;Generate&quot; button to access tool." value="" className="input" />
              <button>Generate</button> */}
              <div class="input-container">
                <input type="text" placeholder="Describe what you want..." />
                <button class="button">Generate</button>
              </div>
            </div>
            <h1 style={{ lineHeight: "1" }}><span className="name1">Use Divyvy for</span></h1>
            <h1 class="animated-text">
              <span className="typed-words name"></span>
              <span className="cursor"></span>
            </h1>

          </div>
          <div className="tags">
            <button class="btnn">
              <strong className="strong1">CREATE ART</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
            </button>
            <button class="btnn">
              <strong className="strong1">EDIT ART</strong>
              <div id="container-stars">
                <div id="stars"></div>
              </div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default homeLeft;
