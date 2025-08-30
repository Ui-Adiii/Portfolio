import React from 'react'

const Container = ({ image, children }) => {
  if (!image) {
    return (
      <div className="w-fit h-fit md:text-2xl text-sm px-4 md:px-6 py-2 
                      rounded-2xl font-bold md:font-normal capitalize 
                      bg-[#1a1a1a] border border-white/50">
        {children}
      </div>
    )
  }

  return (
    <div className="w-fit flex  flex-col justify-center items-center 
                    text-sm md:text-lg lg:text-2xl 
                    px-3 md:px-6 py-2 
                    rounded-2xl font-bold md:font-normal capitalize 
                 ">
      <div className="h-12 w-12">
        <img
          src={image}
          alt="skill-icon"
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-center">{children}</span>
    </div>
  )
}

export default Container
