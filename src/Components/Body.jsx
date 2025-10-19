import React from 'react'
import ViewAudience from './ViewAudience'
import AddAudience from './AddAudience'
export const Body = ({handleShowAudience,showAddAudience,hideAddAudience}) => {

  return (
   <div className='flex w-full h-full gap-2 overflow-hidden'>
        <ViewAudience handleShowAudience = {handleShowAudience} showAddAudience={showAddAudience}/>
       
          {showAddAudience && <AddAudience hideAddAudience={hideAddAudience}/>        } 
       
         
    </div>
  )
}
export default Body
