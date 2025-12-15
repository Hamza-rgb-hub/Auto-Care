import React from 'react'

const Cta = () => {
  return (
    <div className='flex flex-col justify-center text-center lg:max-w-[50%] mx-auto gap-6'>
      <h2 className='md:text-[2.7rem] text-[2rem] font-medium md:max-w-[70%] mx-auto leading-tight'>"Perfect Wash for a <span className='text-[#6114E4]'>Perfect Ride!</span> "</h2>
      <p className='text-[1rem] md:px-[3rem] px-2.5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
     <div>
         <button className='text-[1rem] bg-white/20 border border-white/25 px-5 py-2 rounded-[10px] hover:border-purple-500 hover:text-purple-500 transition-all-500'>Read More</button>
     </div>
    </div>
  )
}

export default Cta
