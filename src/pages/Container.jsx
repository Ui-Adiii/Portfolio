import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-fit text-2xl px-6 py-2 rounded-2xl bg-[#1a1a1a] border-[1px] border-white/50'>{children}</div>
  )
}

export default Container