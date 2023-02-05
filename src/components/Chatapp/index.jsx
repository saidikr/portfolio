import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/Chatmessage/chat1.png'
import img2 from '../../assets/Chatmessage/chat2.png'
import img3 from '../../assets/Chatmessage/chat3.png'


function ChatAppMessage() {
  return (
 <div className='pt-20 w-full text-center bg-gradient-to-b from-black via-black to-gray-800'>
      <h1 className='pb-4 text-white text-4xl'>WhatsApp Clone</h1>
      <p className='pb-5 text-white text-2xl'>Application Web qui vous permet de communiquer avec les utilisateurs dans des groupes de chat. Il vous permet d'envoyer et de recevoir des messages</p>
      <div className='flex items-center justify-center py-5'>
        <Link className='text-white text-xl rounded-xl mx-1 hover:scale-110 border border-white w-32 pt-2 h-12' to='https://github.com/saidikr/WhatsappClone.git'>Client Code</Link>
        <Link className='text-white text-xl rounded-xl mx-1 hover:scale-110 border border-white w-32 pt-2 h-12' to='https://github.com/saidikr/chatmessengeraddServer.git'>Server Code</Link>
        <Link to='https://chatmessageapp1007.netlify.app/' className='text-white text-xl rounded-xl mx-1  hover:scale-110 pt-2 border border-white w-32 h-12'>View Demo</Link>
      </div>
      <div className='flex flex-col items-center justify-center'>
      <img className='py-2' src={img2} alt="" />
      <img className='py-2' src={img1} alt="" />
      <img className='py-2' src={img3} alt="" />
      </div>
    </div>
    )
}

export default ChatAppMessage