import React from 'react'
import ecommerce from '../assets/portfolio/ecommerce.png'
import todo from '../assets/portfolio/todo.png'


const Experience = () => {
  const experience = [
    {
      id: 1,
      src: ecommerce,
      demo: 'https://ecommercesite.pages.dev/',
      code:'https://github.com/Pranshulsh/ecommerce-site'
    },
    {
      id: 2,
      src: todo,
      demo:'https://todolist-efr.pages.dev/',
      code:'https://github.com/Pranshulsh/todo-reactapp'
    },
  ]




  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full 
    text-white md:h-screen ">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4
          border-gray-500">Experience</p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>



        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12
        sm:px-0">

          {
            experience.map(({ id, src, demo}) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200
              hover:scale-105">
                    <a href={demo} target="_blank" rel="noreferrer">Demo</a>
                  </button >
                  
                </div>
              </div>
            ))
          }

        </div>
      </div>

    </div>
  )
}

export default Experience;