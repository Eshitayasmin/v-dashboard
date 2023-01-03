import React from 'react';
import { RiCalendar2Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";

const Home = () => {
    return (
        <div className='w-full bg-gray-100 h-full p-4'>
            <div className='flex justify-between'>
                <div className=''>
                    <p className='text-lg font-medium'>Good Morning Anna!</p>
                    <p className='text-sm'>Here's what's happening with your store today.</p>
                </div>

                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <input className='px-4 py-2 rounded-l-lg' type="text" name="" placeholder='11 Jan, 2023 to 27 Jan, 2023' />
                        <button className='text-white bg-blue-900 px-4 py-3 rounded-r-lg'><RiCalendar2Line size="1rem"></RiCalendar2Line></button>
                    </div>
                    <div className='ml-4'>
                        <button className='bg-blue-100 text-green-500 flex items-center px-4 py-2 rounded-md text-sm hover:bg-teal-600 hover:text-white'><span className='px-1'><AiOutlinePlusCircle size="0.85rem"></AiOutlinePlusCircle></span> Add Product</button>
                    </div>
                    <div className='ml-4'>
                     <button className='bg-blue-100 text-green-500 px-4 py-3 rounded-md text-sm hover:bg-teal-600 hover:text-white'><FiActivity size="0.85rem"></FiActivity></button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;