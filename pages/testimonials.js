import React from 'react'

const testimonials = () => {

    const testimonials = [{
        testimonial: "Oh my God, this is lifesaver! This saved my few hours. ",
        person: "Sarah Mitchell",
        occupation: "Marketing Manager",
        color: "#90FCBD",
    },
    {
        testimonial: "As a content creator, I can't thank this tool enough. It's my secret weapon for stunning visuals in minutes!",
        person: "Emily Chen",
        occupation: "Content Creator",
        color: "#FF8674",
    }, {
        testimonial: "As a professional photographer, I was amazed by the seamless image editing capabilities of this AI tool.",
        person: "Sarah Thompson",
        occupation: "Photographer",
        color: "#00FDFD",
    },
    ]


    return (
        <>
            <div className='testimonials_page'>

                {testimonials.length > 0 && testimonials.map((ele, i) => {
                    return <div className="testimonial_card" key={i}
                    >
                        <svg className="quotation_mark" width="36" height="27" viewBox="0 0 36 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8904 8.46818V0H14.5479C5.54795 0 0 5.64545 0 16.0773V27H9.86301V16.4455C9.86301 11.1682 11.9589 8.46818 15.1644 8.46818H16.8904ZM36 8.46818V0H33.6575C24.7808 0 19.2329 5.64545 19.2329 16.0773V27H28.9726V16.4455C28.9726 11.1682 31.0685 8.46818 34.274 8.46818H36Z" fill="black"></path></svg>
                        <p className='testimonial'>{ele.testimonial}</p>
                        <span>
                            <p>{ele.person}</p>
                            <p>{ele.occupation}</p>
                        </span>
                    </div>
                })}

            </div>
        </>
    )
}




export default testimonials
