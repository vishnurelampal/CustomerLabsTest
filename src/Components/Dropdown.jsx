import React from 'react'
import { DropDownOptions } from '../utils/Constants'
const Dropdown = ({handelChangeSegment,segments,removeSelectedDropDown,dynamic}) => {
    console.log(segments)
    let circleColour;
    debugger
    if(['account_name','city','state'].includes(segments)){
circleColour = "bg-pink-600"
    }else if(dynamic){
circleColour =  "bg-green-300" 
    }else{
       circleColour =  "bg-gray-300"  
    }
   return (
    <div id = "selectDropDownDiv" className='flex h-16 w-10/12 md:w-full font-medium text-lg ml-10 items-center gap-3 '> 
    <div className={`${circleColour} w-3 h-3  rounded-full`}> </div>
<div className={`w-2/3 ${dynamic && "sm:w-11/12"}`}>
     <select className='px-2 w-full bg-gray-100 border-2 border-gray-300 rounded-2xl focus:border-green-700 focus:outline-none'
 onChange={handelChangeSegment}
 value ={segments}>
 {DropDownOptions.map((item)=><option className='px-4 py-1' key = {item.Value} value = {item.Value}> {item.Label}</option>)}
    </select>
</div>
    {dynamic && <div className='flex-grow-1'>
        <button onClick ={removeSelectedDropDown} className='md:text-8xl sm:text-5xl text-red-600  hover:opacity-50 flex-grow-1 align-middle mb-6'>-</button>
    </div>}
  </div>
  
  )
}

export default Dropdown