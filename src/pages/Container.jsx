import React from 'react'
import {easeIn, motion} from 'framer-motion'
const Container = ({children}) => {
  return (
    <motion.div 
    initial={{
            y:20,
            opacity:0
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          viewport={{
            once:false,
            amount:.5
          }}
          transition={{
            delay:.2,
            duration:.7,
            ease:easeIn
          }}
    className='w-fit text-2xl px-6 py-2 rounded-2xl bg-[#1a1a1a] border-[1px] border-white/50'>{children}</motion.div>
  )
}

export default Container