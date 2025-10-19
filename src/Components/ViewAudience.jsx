import React from 'react'

const ViewAudience = ({handleShowAudience,showAddAudience}) => {
    return (
    <div className={`flex flex-col gap-5 w-1/2  opacity-50  ${showAddAudience&&"bg-white/70"}` }>
      <div className=''>
         <div className=' bg-white '> 
     <button onClick = {handleShowAudience} className="mt-10 ml-10 bg-transparent text-blue-500 font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-blue-700 rounded">Save Segment</button> 
     </div>
      </div>
       
    </div>
  )
}

export default ViewAudience


