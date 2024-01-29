'use client';

import { FaArrowLeftLong } from 'react-icons/fa6'
import {Input} from "@nextui-org/react";
import { FaRegEdit } from "react-icons/fa";

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
            <span className='text-xl'>Create Candidate</span>
          </header>

          {/* FORM! */}
          <form className="mt-4 flex flex-col gap-6 px-10 ">
               <div className="flex gap-2 justify-between items-center">
                {/* IMAGE! */}
                <div className='rounded-full w-[100px] h-[100px] relative'>
           <img
             src={'/elon.jpg'}
             alt='alt-text'
             className='overflow-hidden w-full h-full rounded-full object-cover'
            />
            <div className="w-6 h-6 absolute right-2 bottom-0 bg-[#1273eb] flex items-center justify-center rounded-full">
            <FaRegEdit className="w-3 h-3 text-white "/>
            </div>
           </div>
                </div>

                <div className="flex gap-2 justify-between items-center">
                <label className="flex flex-col gap-1 flex-1">
                    <p classNAme="flex gap-1 ">
                    <span className="font-bold">
                    CANDIDATE NAME
                    </span>
                    <span className="text-red-500">*</span>
                    </p>
                    <input 
                       className="p-2 rounded-md border max-w-[70%] border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] "
                       placeholder={"Elon Musk"}
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
                        <option value={'berlin'}>Berlin</option>
                        <option value={'tokoyo'}>Tokoyo</option>
                        <option value={'taskim'}>Taskim</option>

                    </select>
                    
                 </label>
                </div>

                <div className="flex gap-2 justify-between items-center">
                <label className="flex flex-col gap-1 flex-1">
                    <p classNAme="flex gap-1 ">
                    <span className="font-bold">
                    PHONE NUMBER
                    </span>
                    <span className="text-red-500">*</span>
                    </p>
                    <input 
                       className="p-2 rounded-md border max-w-[70%] border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] "
                       placeholder={"+91 671 891 771"}
                       type="number"
                     />
                 </label>

                 <label className="flex flex-col gap-1 flex-1">
                    <p className="flex gap-1 ">
                    <span className="font-bold">
                    EMAIL
                    </span>
                    <span className="text-red-500">*</span>

                    </p>
                    <input 
                       type="email"
                       className="p-2 rounded-md border max-w-[70%] border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] "
                       placeholder={"software@engineer.dev"}
                     />
                    
                 </label>
                </div>

                <div className="flex gap-2 justify-between ">
                 <label className="flex flex-col gap-1 flex-1">
                    <p classNAme="flex gap-1 ">
                    <span className="font-bold">
                    DESCRIPTION
                    </span>
                    <span className="text-red-500">*</span>
                    </p>
                    <textarea 
                       rows={8}
                       className="resize-none max-w-[35%] p-2 rounded-md border border-gray-200 outline-[#1273eb] hover:outline-[#1273eb] "
                       placeholder={"Description About Candidate"}
                       type="text"
                    />
                 </label>
                 </div>
          </form>
        </div>
      </section>
    </>
  )
}
