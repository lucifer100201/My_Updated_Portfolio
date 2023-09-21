import React from 'react'
import cpp from '../assets/cpp.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import dsa from '../assets/dsa.jpg'
import reactimg from '../assets/react.png'
import javascript from '../assets/javascript.png'
import nodeimg from '../assets/node.png.png'
import expressimg from '../assets/express.png.png'
import sqlimg from '../assets/sql.png.png'



const Skills = () => {


    const techs = [

        {
            id: 1,
            src: cpp,
            title: 'CPP',
            style: 'shadow-white'
        },
        {
            id: 2,
            src: dsa,
            title: 'Data Structures',
            style: 'shadow-blue-400'
        },
        {
            id: 3,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 4,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-300'
        },
        {
            id: 5,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            src: reactimg,
            title: 'React',
            style: 'shadow-sky-700'
        },
        {
            id: 7,
            src: nodeimg,
            title: 'Node.js',
            style: 'shadow-blue-700'
        },
        {
            id: 8,
            src: expressimg,
            title: 'Express.js',
            style: 'shadow-blue-100'
        },
        {
            id: 9,
            src: sqlimg,
            title: 'PostgreSQL',
            style: 'shadow-sky-700'
        },
    ];
    return (
        <div name="skills" className="bg-gradient-to-b
        from-gray-800 to-black w-full h-screen">

            <div className="max-w-screen-lg mx-auto p-4 flex flex-col
            justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4
                    border-gray-500 p-2 inline">Skills</p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                gap-8 text-center py-8 px-12 sm:px-0">

                    {
                        techs.map(({ id, src, title, style }) => (
                            <div 
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500
                                py-2 rounded-lg ${style}`}
                            >
                                <img src={src} alt="" className="w-20 mx-auto" />
                                <p className="mt-4">{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Skills
