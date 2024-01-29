'use client';

import { FaArrowLeftLong } from 'react-icons/fa6'
import {Input} from "@nextui-org/react";

type Props = {}

export default function Page ({}: Props) {
    

  return (
    <>
      <section className='flex flex-col gap-6 h-[calc(100vh-52px)] p-2 bg-gray-100 overflow-auto'>
        <div className='mt-4'>
          {/* BACK HEADER! */}
          <header className='text-[#1273eb] font-semibold flex gap-4'>
            {/* ARROW BACK! */}
            <FaArrowLeftLong className='w-6 h-6 cursor-pointer' />

            {/* TEXT! */}
            <span className='text-xl'>Create Job</span>
          </header>

          {/* FORM! */}
          <form className="mt-4 flex flex-col gap-6 px-10 ">
               <div className="flex gap-2 justify-between items-center">
                <label className="flex flex-col gap-1 flex-1">
                    <p classNAme="flex gap-1 ">
                    <span className="font-bold">
                    POSITION NAME
                    </span>
                    <span className="text-red-500">*</span>
                    </p>
                    <input 
                       className="p-2 rounded-md border max-w-[70%] border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] "
                       placeholder={"Software Engineer"}
                     />
                 </label>

                 <label className="flex flex-col gap-1 flex-1">
                    <p className="flex gap-1 ">
                    <span className="font-bold">
                    LOCATION
                    </span>
                    <span className="text-red-500">*</span>

                    </p>
                    <select onChange={() => {}} className="max-w-[70%] cursor-pointer p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb]">
                        <option value={'lahore'}>Lahore</option>
                        <option value={'karachi'}>Karachi</option>
                        <option value={'istanbul'}>Istanbul</option>

                    </select>
                    
                 </label>
                </div>

                <div className="flex gap-2 justify-between items-center ">
                 <label className="flex flex-col gap-1 flex-1">
                    <p classNAme="flex gap-1 ">
                    <span className="font-bold">
                    HEADTCOUNT
                    </span>
                    <span className="text-red-500">*</span>
                    </p>
                    <input 
                       className="max-w-[70%] p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] "
                       placeholder={"Software Engineer"}
                       type="number"
                    />
                 </label>
                 <label className="flex flex-col gap-1 flex-1">
                    <p className="flex gap-1 ">
                    <span className="font-bold ">
                    CONTRACT DETAILS
                    </span>
                    <span className="text-red-500">*</span>

                    </p>
                    <select onChange={() => {}} className=" max-w-[70%] cursor-pointer p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb]">
                        <option value={'full-time'}>Full Time</option>
                        <option value={'internship'}>Internship</option>
                        <option value={'freelance'}>Freelance</option>

                    </select>
                 </label>
                </div>

                <div className="flex gap-2 justify-between  ">
                 <label className="flex flex-col gap-1 flex-1">
                    <p classNAme="flex gap-1 ">
                    <span className="font-bold">
                    DESCRIPTION
                    </span>
                    <span className="text-red-500">*</span>
                    </p>
                    <textarea 
                       rows={10}
                       className="resize-none max-w-[70%] p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] "
                       placeholder={"Description About Job"}
                       type="text"
                    />
                 </label>
                 <label className="flex flex-col gap-1 flex-1">
                    <p className="flex gap-1 ">
                    <span className="font-bold ">
                    SALARY RANGE
                    </span>
                    <span className="text-red-500">*</span>

                    </p>
                    <div className="max-w-[70%]  flex justify-between items-center">
                    <input 
                       className="w-[45%] p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] "
                       placeholder={"PKR From"}
                       type="number"
                    />
                    <input 
                       className="w-[45%] p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] "
                       placeholder={"PKR To"}
                       type="number"
                    />
                    </div>
                    
                 </label>
                </div>
          </form>
        </div>
      </section>
    </>
  )
}
