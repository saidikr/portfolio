import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'> About</p>
        </div>
        <p className='text-xl mt-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus officia fuga voluptas placeat. Adipisci, dolorem? Adipisci placeat magnam nemo nisi ea nesciunt molestias, voluptatem molestiae perferendis temporibus doloribus distinctio quibusdam.</p>
        <br />
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quia delectus distinctio, dolor, vero sunt at officiis explicabo consectetur et voluptas veritatis sed ipsam iusto consequatur beatae doloribus qui voluptatum!</p>
        </div>
    </div>
  )
}

export default About