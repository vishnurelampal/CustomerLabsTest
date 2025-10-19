import React from 'react'
import { DropDownOptions } from '../utils/Constants'
const Dropdown = ({handelChangeSegment,segments,removeSelectedDropDown,dynamic}) => {
   return (
    <div id = "selectDropDownDiv" className='flex h-16 w-full font-medium text-lg ml-10 items-center gap-3 '> 
<div className='w-2/3'>
     <select className='px-2 w-full bg-gray-100 border-2  focus:border-green-700 focus:outline-none'
 onChange={handelChangeSegment}
 value ={segments}>
 {DropDownOptions.map((item)=><option key = {item.Value} value = {item.Value}> {item.Label}</option>)}
    </select>
</div>
    {dynamic && <div className='flex-grow-1'>
        <button onClick ={removeSelectedDropDown} className='text-8xl text-red-600  hover:opacity-50 flex-grow-1 align-middle mb-6'>-</button>
    </div>}
  </div>
  
  )
}

export default Dropdown