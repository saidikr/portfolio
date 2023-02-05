import React from 'react'
import weatherapp from '../assets/portfolio/weatherapp.png'
import chatapp from '../assets/portfolio/chat1.png'
import e_shopps from '../assets/portfolio/Capture.png' 
import {Link} from 'react-router-dom'


const Portfolio = () => {
const portfolios=[
    {
        id:6,
        title:"Weather Website",
        link:'/weather',
        src:weatherapp
    },
    {
        id:3,
        title:"W-Kaufer Website",
        link:'/wkaufer',
        src:e_shopps
    },
    {
        id:4,
        title:"ChatApp Website",
        link:'/chatapp',
        src:chatapp
    },
]
    return (
    <div name='portfolio' className='pt-20 bg-gradient-to-b from-black  to-gray-800 w-full text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6 text-xl'>Découvrez quelques-unes de mes réalisations ici</p>
            </div>
                <div  className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0'>

                    {
                    portfolios.map(({id,src,title,link})=>(
                    
                    <div key={id} className='shadow-md shadow-gray-600 w-[450px] rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 w-[450px] h-[250px]'/>
                        <p className='mt-2 text-2xl font-medium text-center'>{title}</p>
                        <div className='flex items-center justify-center'>
                            <Link to={link} className='border text-center border-gray-50 rounded-xl w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>View Détaill</Link>
                        </div>
                        </div>
                    ))
                    }
                </div>            
        </div>
    </div>
  )
}

export default Portfolio