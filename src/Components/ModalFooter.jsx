import React from 'react'

const ModalFooter = ({onClickHandler}) => {
  return (
    <div className='bg-gray-100 w-full h-[13%] bottom-0 fixed flex'>
        <div className='flex gap-1 items-center'>
            <button name="save" onClick={onClickHandler} className='rounded-md cursor-pointer ml-10 w-[150px] h-[40px] bg-[#29453d] text-white'>Save the Segment</button>
            <button  name = "cancel" onClick={onClickHandler}  className="rounded-md cursor-pointer  w-[150px] h-[40px] bg-white text-black">Cancel</button>

        </div>
    </div>
  )
}

export default ModalFooter