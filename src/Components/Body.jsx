import React, { useState } from 'react'
import ViewAudience from './ViewAudience'
import AddAudience from './AddAudience'
  import SuccessModal from './SuccessModal'
export const Body = ({handleShowAudience,showAddAudience,hideAddAudience,showModal}) => {
    const[openModal,setOpenModal] = useState(false)
function showModal (){
  setOpenModal(true)
}
function closeModal(){
  setOpenModal(false)
  hideAddAudience()
}
  return (
   <div className='flex w-full h-full gap-2 overflow-hidden'>
    <SuccessModal openFlag= {openModal} closeModal={closeModal}/>
     <ViewAudience handleShowAudience = {handleShowAudience} showAddAudience={showAddAudience}/>
    {showAddAudience && <AddAudience hideAddAudience={hideAddAudience} showModal={showModal}/>        } 
       
         
    </div>
  )
}
export default Body
