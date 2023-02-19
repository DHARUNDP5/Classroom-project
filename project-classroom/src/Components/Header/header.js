import React from 'react'

import { useNavigate } from "react-router-dom";

const Header = () => {
    // const Navigate = useNavigate();
    // const handelPages = () => {
    //   Navigate("/login");
    // }
    return (
        <div>
            <div className="flex h-[100px] bg-blue-800">

                <div className='flex pt-[20px] ml-[20px] font-bold text-[28px] text-white'>
                    <p> Classroom Manager</p>

                </div>
                <div className='flex justify-center items-center'>
                    <button type="button" className='flex pl-[20px] ml-[1450px] font-bold text-[28px] text-center
                 text-white w-[120px] h-[45px] bg-red-600 rounded-[50px]'>Login</button>
                </div>


            </div>


        </div>
    )
}

export default Header