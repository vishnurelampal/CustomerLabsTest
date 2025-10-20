import React,{useState,useRef} from 'react'
import Dropdown from './Dropdown';
import ModalFooter from './ModalFooter';
import { FormatApi } from '../utils/HelperFunctions/FormatApi';
import { LIT_CODES, modalMsgs, uniqueApi } from '../utils/Constants';


const AddAudience = ({hideAddAudience,showModal,LaunchModalWithError}) => {
 const postingFlag = useRef(true);
  const [segments, setSegments] = useState ("");
  const [selectedSegments, setSelectedSegments] = useState ([]);
  const [errorMsg,setErrorMsg] =useState({input:"",
    segment:""
  });
  const nameOfSegment = useRef(null);
  const errorScroll = useRef(null);
  function handelChangeSegment(e){
    setSegments(e.target.value)
  }
  function addSegment(){
    if(segments!==""){
      const exisitngSegments = selectedSegments.some(item=>item.selectedVal=== segments)
      if(!exisitngSegments){
        const uniqueObj = {id:Math.random().toFixed(4),selectedVal:segments}
    const newArray = [...selectedSegments]
    newArray.push(uniqueObj);
    setSelectedSegments(newArray)
    setSegments("")
    setErrorMsg((prev)=>({
        ...prev,
        segment:""
      }))
   }else{
        setErrorMsg((prev)=>({
        ...prev,
        segment:LIT_CODES.segmentSelectedTryOther
      }))
       selectedSegments.length>3 && errorScroll.current.scrollIntoView({behaviour:"smooth"})
    }
}else{
      setErrorMsg((prev)=>({
        ...prev,
        segment:LIT_CODES.selectOneSegment
      }))
         selectedSegments.length>3 && errorScroll.current.scrollIntoView({behaviour:"smooth"})
    }
  
  }
  function handleDynamicDropDowns(selctID,newVal){
   if(newVal=== "") return
   const exisitngSegments = selectedSegments.some(item=>item.selectedVal=== newVal) 
 if(!exisitngSegments){
   setSelectedSegments((prev)=>prev.map((val)=>{
    if(val.id === selctID){
      return {
    ...val,
   selectedVal:newVal
      }
    }
    return val
  }))
  setErrorMsg((prev)=>({
        ...prev,
        segment:""
      }))
 }else{
 setErrorMsg((prev)=>({
        ...prev,
        segment:LIT_CODES.segmentSelectedTryOther
      }))
       selectedSegments.length>3 && errorScroll.current.scrollIntoView({behaviour:"smooth"})
 }
  };
  function removeSelectedDropDown(selctID){
setSelectedSegments(prev=>prev.filter((item)=>item.id !== selctID))
  }

function handleClick(type) {
  if (type !== "save") {
    hideAddAudience();
    return;
  }
  const nameValue = nameOfSegment.current.value.trim();
  let errors = { input: "", segment: "" };
  if (!nameValue) {
    errors.input = LIT_CODES.provideName;
  }
  if (selectedSegments.length === 0) {
    errors.segment = LIT_CODES.selectOneSegment;
  
  }
  if (errors.input || errors.segment) {
    setErrorMsg(errors);
    return;
  }
  setErrorMsg({ input: "", segment: "" });
   handleAPiCall()
}

async function  handleAPiCall() {
  
  if(postingFlag.current){
   postingFlag.current  = false;
const nameValue = nameOfSegment.current.value.replace(/\s+/g, ' ').trim();
 const finalData =  FormatApi(nameValue,selectedSegments)
    try{
 const res = await fetch(uniqueApi,{
    method:"POST",
    headers: { "Content-Type": "application/json" },
     body: JSON.stringify(finalData),
  })
  if(res.ok){
    showModal()
  }else{
LaunchModalWithError()
    }
  }
  catch(error){
    LaunchModalWithError()
    }
} 
};

function handleInputChange(){
  if(nameOfSegment.current.value!==""){
    setErrorMsg((prev)=>({
        ...prev,
        input:""
      }))
  }else{
    setErrorMsg((prev)=>({
        ...prev,
        input:LIT_CODES.provideName
      }))
  }
}
  return (
    <div className='bg-white overflow-x-hidden shadow-lg z-40 md:w-1/2 absolute top-0 md:left-1/2 pb-16 h-full md:overflow-y-auto'>
       <div id="headerModalDiv" className='w-full h-20 bg-gray-600 fixed   flex items-center'>
        <span className='flex gap-2'> 
          <img 
        onClick = {hideAddAudience}
        src="arrow-left.png" alt="back arrow" className='cursor-pointer w-6 h-6 mt-2 ml-4  bg-gray-600'/>
        <h1 className='font-medium text-2xl text-white mt-0.5'>Saving Segment</h1>
        </span>
    </div>
    <div className=' w-full h-full'>
<form onSubmit = {(e)=>{e.preventDefault()}} 
className='pb-20'>
  <div className='flex flex-col mt-25  ml-10 '>
<label htmlFor="segmentName" className='text-lg'>Enter the Name of the Segment</label><br/>
  <input ref={nameOfSegment}
  onChange={handleInputChange}
   name  ="segmentName" type="text" placeholder='Name of the Segment'
    className='p-2 w-10/12 md:w-2/3 bg-gray-100 border-2 border-gray-500 rounded-md'/>
  <p className='text-red-600 font-semibold'>{errorMsg.input}</p>
  <p className='mt-5 pr-2 w-10/12 md:w-2/3'>To save your segment you need to add the schemas to build the query</p>
  <div className='flex gap-3 ml-auto w-10/12 md:w-2/3 mt-10 font-semibold'>
    <span className='flex items-center gap-1'>
  <div className="bg-green-300 w-3 h-3 rounded-full"> </div>
  <p>- User Traits</p>
  </span>
  <span className='flex items-center gap-1'>
  <div className="bg-pink-600 w-3 h-3 rounded-full"> </div>
  <p>- Group Traits</p>
  </span>
  </div>
  </div>
  {selectedSegments.length>0 && <div id="SegmentAddedDiv"
   className={`flex rounded-2xl sm:pr-12 sm:w-11/12 w-10/12 flex-col mt-10 ml-10 md:w-2/3 overflow-x-hidden border-2 md:border-4 border-blue-300 px-0 md:px-3md:py-1 py-0 ${selectedSegments.length<=3 ? "h-auto overflow-y-hidden":"h-[200px] overflow-y-auto"}`}>
  {selectedSegments.map((item)=><Dropdown key = {item.id} 
   handelChangeSegment= {(e)=>handleDynamicDropDowns(item.id,e.target.value)} 
   removeSelectedDropDown={()=>{removeSelectedDropDown(item.id)}}
   segments={item.selectedVal}
   dynamic={true}/>)}
    </div>}
    <div className='md:ml-10 w-full md:w-auto px-3 flex flex-col h-auto'>
       <Dropdown handelChangeSegment ={handelChangeSegment} segments = {segments}  dynamic = {false}/>
       <div id = "addSegmentButton"className='flex opacity-70 ml-10'>
   <p className='text-green-600 font-bold'>+ </p> <p className='cursor-pointer underline text-green-600 font-bold'
   onClick={addSegment}>Add new Schema</p>
  </div>
    </div>
    <p ref = {errorScroll} className='font-semibold text-red-600 ml-12'>{errorMsg.segment}</p>
</form>

    </div>
    <ModalFooter onClickHandler= {(e)=>{handleClick(e.target.name)}} />
    </div>
  )
}

export default AddAudience