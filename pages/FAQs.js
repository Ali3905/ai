"use client"
import React, { useState } from "react";

const FAQs = () => {
    const [active, setActive] = useState(null)


    const data = [{
      question: "What is Divyvy AI Workspace?",
      answer: "Divyvy AI Workspace is an all-in-one creative hub solution for images, offering features such as [Image generation and AI-based editing, including Image Revision, Expand Image, Erase and Replace, Infinite Zoom, Image Retouch, Animate Image, Vision Assistant, Image to Image, and Image to Melody]"
      
    }, {
        question: "How do I use Workspace?",
        answer: "We provide a comprehensive [4-minute YouTube tutorial] to guide you through the entire process.",
      },{
        question: "Can you make images of higher quality?",
        answer: "Absolutely! You can select resolutions ranging from 720p to 2K quality, as well as various industry-standard aspect ratios."
        
      },{
        question: "Who owns the rights to the images?",
        answer: "You retain full ownership of the generated images and can use them for commercial purposes.",
      },{
        question: "Are my generated photos private?",
        answer: "Yes, all your generated photos are private. They are only accessible to you. If you choose to make them public by clicking [Public Share] in your workspace, they will be available in the [Community]."
        
      },{
        question: "How can I report a bad generation?",
        answer: "To report an incorrect generation, hover over the generated image and click on the report icon in the top right corner menu options.",
      },
      {
        question: "How long does Divyvy AI store my creations?",
        answer: "For paid plans, we offer permanent data retention to ensure your creations are never lost. Free users' creations are stored for 15 days before automatic deletion. Consider upgrading or saving important work locally for extended storage."
        
      },
      {
        question: "Are there any restrictions on images I can generate with Workspace?",
        answer: "Generating illegal images, including child pornography, is strictly prohibited. Such images will be deleted, and accounts will be permanently banned upon discovery.",
      },
      {
        question: "Are there any new features or updates coming soon?",
        answer: "Yes, we are continually developing new features and updates to enhance your experience on our platform. Stay informed by subscribing to our [newsletter].",
      },
      {
        question: "Are there any system requirements for using Divyvy AI?",
        answer: "Divyvy AI is accessible on any desktop device with an internet browser! We are currently optimized for use with Google Chrome. Simply head to [app.divyvy.xyz] to get started, no downloads required.",
      },
      {
        question: "My question is not answered. How can I get help?",
        answer: "You can join our Discord server and tag any admin or email [support@divyvy.xyz] for assistance.",
      },
      
      
      
      
    
    
    ];

  const handleCollapse = (index) => {
    if(active === index){
        setActive(null)
    }else{
        setActive(index)
    }
  }

  return (
    <div className="faqs_page">
      <h2>FAQs </h2>
      <div className="faqs_section">
        {data.map((ele, i) => {
          return <div className="faqs_item" key={i}>
            <span onClick={()=>handleCollapse(i)} >
            <p className="question">{ele.question}</p>
            <svg className={active === i ?"rotate_180": ""} xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 10 6" fill="none">
                <path d="M1 1.16667L4.66667 4.83333L8.33333 1.16667" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </span>
            {active === i && <p className="answer">{ele.answer}</p>}
          </div>;
        })}
      </div>
    </div>
  );
};

export default FAQs;
