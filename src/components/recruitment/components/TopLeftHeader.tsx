import { HiUsers } from 'react-icons/hi2'
import { IoBriefcaseOutline } from 'react-icons/io5'

export default function TopLeftHeader () {
  return (
    <>
      <section className='flex justify-between items-center h-[72px]'>
        {/* TEXT! */}
        <h2 className='text-[#1273eb] text-3xl font-semibold tracking-wider'>
          Dashboard
        </h2>
        {/* BUTTON! */}
        <div className='flex gap-2 items-center'>
          <button className='border-[#1273eb] text-[#1273eb] border-2 rounded-md flex gap-2 px-2 p-1 hover:bg-[#1273eb] hover:text-white transition-all'>
            <IoBriefcaseOutline className=' w-5 h-5' />
            <span>Add Job</span>
          </button>
          <button className='border-[#1273eb] text-[#1273eb] border-2 rounded-md flex gap-2 px-2 p-1 hover:bg-[#1273eb] hover:text-white transition-all'>
            <HiUsers className=' w-5 h-5' />
            <span>Add Candidates</span>
          </button>
        </div>
      </section>
    </>
  )
}
