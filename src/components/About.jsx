import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black 
    text-white" >

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 
                border-gray-500">About</p>
            </div>
            <p className="text-xl mt-20">
            I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Experience section.
            </p>
            <br />

            <p className="text-xl ">
            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </p>
        </div>
    </div>
  )
}

export default About