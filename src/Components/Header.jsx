import React from 'react'

const Header = ({showAddAudience}) => {
  return (
    <div className={`w-full h-20 bg-gray-600  relative flex items-center gap-2 ${showAddAudience&&"opacity-50"}`}>
      <img  src="arrow-left.png" alt="back arrow" className='cursor-pointer w-6 h-6 mt-2 ml-4  bg-gray-600'/>
        <h1 className='font-medium text-2xl text-white mt-1 '> View Audience</h1>
    </div>
  )
}

export default Header