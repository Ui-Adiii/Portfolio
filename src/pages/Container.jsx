import React from 'react'
const Container = ({children}) => {
  return (
    <div 
    className='w-fit md:text-2xl text-sm px-4 md:px-6 py-2 rounded-2xl font-bold md:font-normal capitalize bg-[#1a1a1a] border-[1px] border-white/50'>{children}</div>
  )
}

export default Container