import React from 'react'


const login = () => {
    return (
        <div>
            <div className='h-screen  bg-blue-900 flex justify-center items-center'>
                <div className='bg-red-600 w-180 h-[700px] shadow-xl rounded p-[180px]'>
                    <h1 className='text-[45px] font-medium flex mb-[20px]'>Welcome</h1>
                    <p className='text-[28px] font-medium'>Classroom Manager</p>

                    <form className='space-y-5 mt-5'>
                        <input type="text" className='w-full h-12 border border-gray-800 rounded px-3' placeholder="Email" />
                        <input type="text" className='w-full h-12 border border-gray-800 rounded px-3' placeholder="password" />
                        <div className=''>
                            <a href="#!" className='font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2'>Forgot Password ?</a>
                        </div>

                        <button className='text-center w-full bg-blue-900  hover:bg-blue-700 rounded-md text-white py-3 font-medium'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login