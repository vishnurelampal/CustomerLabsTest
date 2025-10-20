import React, { useState } from 'react'
import ViewAudience from './ViewAudience'
import AddAudience from './AddAudience'
import SuccessModal from './SuccessModal'
import { modalMsgs } from '../utils/Constants'
export const Body = ({handleShowAudience,showAddAudience,hideAddAudience,showModal}) => {
    const[modalDetails,setmodalDetails] = useState({flag:false,
      msg:""
    })
function showModal (){
  setmodalDetails({flag:true
    ,msg:modalMsgs.success,
    status:"succ"
  })
}
function closeModal(){
  setmodalDetails((prev)=>({
    ...prev,
    flag:false
  })
  )
  hideAddAudience()
}
function LaunchModalWithError(){
   setmodalDetails({flag:true
    ,msg:modalMsgs.error,
    status:"err"
  })
}
  return (
   <div className='flex w-full h-full gap-2 overflow-hidden'>
    <SuccessModal modalDetails= {modalDetails} closeModal={closeModal}/>
     <ViewAudience handleShowAudience = {handleShowAudience} showAddAudience={showAddAudience} />
    {showAddAudience && <AddAudience hideAddAudience={hideAddAudience} showModal={showModal} LaunchModalWithError ={LaunchModalWithError}/>        } 
       
         
    </div>
  )
}
export default Body
