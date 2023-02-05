import React from 'react'
import img1 from '../../assets/W-kaufer/w-kauf1.png';
import img2 from '../../assets/W-kaufer/w-kauf2.png';
import img3 from '../../assets/W-kaufer/w-kauf3.png';
import img4 from '../../assets/W-kaufer/w-kauf4.png';
import { Link } from 'react-router-dom';

function Wkaufer() {
  return (
    <div className='pt-20 w-full text-center bg-gradient-to-b from-black via-black to-gray-800'>
      <h1 className='pb-4 text-white text-4xl'>W-Kaufer WebSite</h1>
      <p className='pb-5 text-white text-2xl'>Site Web de vente de vetements hommes/femmes, outils électroniques et bijoux. Simple et facile pour la navigation</p>
      <div className='flex items-center justify-center py-5'>
        <Link className='text-white text-xl rounded-xl mx-1 hover:scale-110 border border-white w-32 pt-2 h-12' to='https://github.com/saidikr/GMC_Project_Client.git'>Client Code</Link>
        <Link className='text-white text-xl rounded-xl mx-1 hover:scale-110 border border-white w-32 pt-2 break-all h-12' to='https://github.com/saidikr/GMC_Project_Server.git'>Server Code</Link>
        <Link to='https://site1007.netlify.app/' className='text-white text-xl rounded-xl mx-1  hover:scale-110 pt-2 border border-white w-32 h-12'>View Demo</Link>
      </div>
      <div className='flex flex-col items-center justify-center'>
      <img className='py-2' src={img1} alt="" />
      <img className='py-2' src={img2} alt="" />
      <img className='py-2' src={img3} alt="" />
      <img className='py-2 mb-10' src={img4} alt="" />
      </div>
    </div>
  )
}

export default Wkaufer