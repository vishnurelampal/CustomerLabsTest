import React from 'react'
import Header from './Header'
import Body from './Body'
import { useState } from 'react'
const MainDiv = () => {
      const [showAddAudience,setShowAddAudience]= useState(false);
  function handleShowAudience(){
    setShowAddAudience(true);
  }
  function hideAddAudience(){
    setShowAddAudience(false);
  }
  return (
    <div className=''>
    <Header showAddAudience={showAddAudience}/>
    <Body handleShowAudience={handleShowAudience} hideAddAudience={hideAddAudience} showAddAudience={showAddAudience}/> 
    </div>
  )
}

export default MainDiv