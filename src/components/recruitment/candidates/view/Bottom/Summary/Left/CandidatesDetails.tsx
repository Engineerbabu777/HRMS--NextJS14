



import React from 'react'
import { MdEdit } from 'react-icons/md'

type Props = {}

export default function CandidatesDetails({}: Props) {
  return (
    <>
       <div className=''>
          {/* HEADER! */}
          <header className='bg-gray-100 text-[#1273eb] font-bold p-2 text-xl border-2 '>
            Candidate Details
          </header>
          {/* BODY! */}
          <section className='p-3 w-full border-2 border-t-0 flex justify-between p-5 flex-col gap-2'>
            <p className='flex justify-between items-center '>
              <h2 className='text-md font-bold flex-1 text-lg'>
                Candidate Reference
              </h2>
              <div className='flex gap-2 items-center flex-1'>
                <p className='text-lg font-semibold'>AJKASNJ345</p>
              </div>
            </p>

            <p className='flex justify-between items-center '>
              <h2 className='text-md font-bold  flex-1 text-lg'>
                Candidate Name
              </h2>
              <div className='flex gap-2 items-center flex-1 justify-between font-semibold text-lg'>
                <p>Elon Musk</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </p>

            <p className='flex justify-between items-center '>
              <h2 className='text-md font-bold  flex-1 text-lg'>
                Candidate Location
              </h2>
              <div className='flex gap-2 items-center  flex-1 text-lg justify-between font-semibold'>
                <p>Boca Chica, Texas</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </p>

            <p className='flex justify-between items-center '>
              <h2 className='text-md font-bold  flex-1 text-lg'>Gender </h2>
              <div className='flex gap-2 items-center  flex-1 text-lg justify-between font-semibold'>
                <select className='flex-1 border border-[#1273eb] rounded-md'>
                  <option value={'Male'}>Male</option>
                  <option value={'Female'}>Female</option>
                  <option value={'Other'}>Other</option>
                </select>
              </div>
            </p>

            <p className='flex justify-between items-center '>
              <h2 className='text-md font-bold  flex-1 text-lg'>Diploma</h2>
              <div className='flex gap-2 items-center  flex-1 text-lg justify-between font-semibold'>
                <p className='text-[#1273eb]'>Add</p>
                {/* <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' /> */}
              </div>
            </p>

            <p className='flex justify-between items-center '>
              <h2 className='text-md font-bold  flex-1 text-lg'>University</h2>
              <div className='flex gap-2 items-center flex-1  justify-between font-semibold text-lg'>
                <p className='text-[#1273eb]'>Add</p>

                {/* <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' /> */}
              </div>
            </p>

            <p className='flex justify-between items-center '>
              <h2 className='text-md font-bold  flex-1 text-lg'>
                Current Company
              </h2>
              <div className='flex gap-2 items-center text-lg  flex-1 justify-between font-semibold'>
                <p>AllZone Technologies</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </p>

            <p className='flex justify-between items-center '>
              <h2 className='text-md font-bold  flex-1 text-lg'>
                Current Position
              </h2>
              <div className='flex gap-2 items-center text-lg font-semibold flex-1 justify-between items-center'>
                <select className='flex-1 border border-[#1273eb] rounded-md'>
                  <option value={'Software Developer Engineer'}>
                    Software Developer Engineer
                  </option>
                  <option value={'Frontend Engineer'}>Frontend Engineer</option>
                  <option value={'Backend Developer'}>Backend Developer</option>
                </select>
              </div>
            </p>

            <p className='flex justify-between items-center '>
              <h2 className='text-md font-bold  flex-1 text-lg'>Birthday</h2>
              <div className='flex gap-2 items-center text-lg font-semibold flex-1 justify-between font-semibold'>
                <p className='text-[#1273eb]'>Add</p>
                {/* DATE */}
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </p>

            <p className='flex justify-between items-center '>
              <h2 className='text-md font-bold  flex-1 text-lg'>Address</h2>
              <div className='flex gap-2 items-center  flex-1 text-lg justify-between font-semibold'>
                <p>Johar Town</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </p>

            <p className='flex justify-between items-center '>
              <h2 className='text-md font-bold  flex-1 text-lg'>
                Email Address
              </h2>
              <div className='flex gap-2 items-center  flex-1 text-lg justify-between font-semibold'>
                <p>elonmusk@tesla.com</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </p>

            <p className='flex justify-between items-center '>
              <h2 className='text-md font-bold  flex-1 text-lg'>
                Phone Number
              </h2>
              <div className='flex gap-2 items-center  flex-1 text-lg justify-between font-semibold'>
                <p>+1 718 781 881</p>
                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </p>

            <p className='flex justify-between items-center '>
              <h2 className='text-md font-bold  flex-1 text-lg'>
                Other Contact
              </h2>
              <div className='flex gap-2 items-center  flex-1 text-lg justify-between font-semibold'>
                <p className='text-[#1273eb]'>Add</p>

                <MdEdit className='text-[#1273eb] w-4 h-4 cursor-pointer' />
              </div>
            </p>
          </section>
        </div>
    
    </>
  )
}