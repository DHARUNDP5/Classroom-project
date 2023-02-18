import React from 'react'
import book from '../Components/asserts/ebook.jpg'

const homepage = () => {
  return (
    <div>
      <div className='bg-blue-300 h-[500px]'>
        <div className='flex items-center justify-center'>
        <p className='mt-[150px] text-[38px] text-white'>Class Manager</p>
        </div>
        <div className='flex items-center justify-center'>
        <p className='text-[35px] text-white'>Student-Teacher-Portal</p>
        </div>
        
      </div>


      <div className='bg-blue-900'>
        <p className='flex items-center justify-center font-bold text-[35px] text-white'>About us</p>
        <div className='pl-[800px] items-center justify-center'>
          <p className=' text-left  text-center w-[500px] mt-[15px]  text-[30px] text-white'>Class Manager is a Student-Teacher Portal where techers and student can sign up 
            and teachers can add students in their class.</p>
            <br></br>
         </div>
         </div>
      <div className='bg-red-600 h-100px]'>
      <p className='flex items-center justify-center font-bold text-[35px] text-black'>Our Services</p>
      </div>
      <div className='bg-blue-900'>
      <div className='flex items-center justify-center'>
        <p className='text-[35px] text-white mt-[50px]'>Digital Learing</p>
        </div>
      <div className='w-[400px]'>
          <img src={book} className="rounded-full pl-[20px] h-[240px]" />
          </div>
          <div className='pl-[600px] items-center justify-center'>
        <p className='text-center items-center justify-center text-[30px] text-white w-[1000px]'>A Student-Teacher Portal built using HTML, CSS, Tailwind ,Bootstrap 
          Python and Django Class Manager is a 
          Student-Teacher Portal where techers Student-Teacher Portal where techers</p>
        </div>
        
       
      </div>
    </div>
  )
}

export default homepage