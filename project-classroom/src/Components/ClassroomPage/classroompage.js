import React from 'react'

const Classroompage = () => {
  return (
    <div>
      <div className='h-screen bg-blue-900 flex flex-col space-y-[50px] items-center justify-center text-center text-[25px] text-white'>
        <button className='hover:bg-red-700 w-full h-[50px]'>Assignment</button>
        <button className='hover:bg-red-700 w-full h-[50px]'>Marks</button>
        <button className='hover:bg-red-700 w-full h-[50px]'>Database</button>
        <button className='hover:bg-red-700 w-full h-[50px]'>Sports</button>
        <button className='hover:bg-red-700 w-full h-[50px]'>Class notice</button>
        <button className='hover:bg-red-700 w-full h-[50px]'>Teacher profile</button>
        <button className='hover:bg-red-700 w-full h-[50px]'>Exam</button>
        <button className='hover:bg-red-700 w-full h-[50px]'>logout</button>

      </div>
    </div>
  )
}

export default Classroompage