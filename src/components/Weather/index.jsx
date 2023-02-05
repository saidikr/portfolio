import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/weatherApp/weather1.png'

function WeatherApp() {
  return (
    <div className='pt-20 w-full text-center bg-gradient-to-b from-black via-black to-gray-800'>
      <h1 className='pb-4 text-white text-4xl'>Weather Forecast WebSite</h1>
      <p className='pb-5 text-white text-2xl'>Site Web pour prévisions météorologiques et informations climatologiques pour les villes fournies par les Services météorologiques. Simple et facile pour la navigation</p>
      <div className='flex items-center justify-center py-5'>
        <Link className='text-white text-xl rounded-xl mx-1 hover:scale-110 border border-white w-32 pt-2 h-12' to='https://github.com/saidikr/WeatherApp.git'>Code</Link>
        <Link to='https://weatherapp1007.netlify.app/' className='text-white text-xl rounded-xl mx-1  hover:scale-110 pt-2 border border-white w-32 h-12'>View Demo</Link>
      </div>
      <div className='flex flex-col items-center justify-center'>
      <img className='py-2' src={img1} alt="" />
      </div>
    </div>
  )
}

export default WeatherApp