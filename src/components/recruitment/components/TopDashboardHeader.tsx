import { HiUsers } from 'react-icons/hi2'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { TiWeatherDownpour } from 'react-icons/ti'

export default function TopDashboardHeader () {
  return (
    <>
      <section className='flex justify-between items-center h-[90px]'>
        {/* TEXT! */}
        <h2 className='text-[#1273eb] text-3xl font-bold tracking-wider pl-2'>
          Dashboard
        </h2>
        <div className='flex gap-6 items-center'>
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

          {/* TOP! */}
          <div className='bg-white font-mono rounded-md flex justify-between w-[20vw] items-center shadow-lg py-3 px-2 overflow-hidden'>
            {/* TIME && DATE! */}
            <div className='flex flex-col gap-1 '>
              {/* TIME! */}
              <span className='text-xl text-[#1273eb] font-semibold'>
                12:53
              </span>
              {/* DATE! */}
              <span className=''>14, May 2025</span>
            </div>

            {/* WEATHER UPDATE! */}
            <div className='flex gap-1'>
              <div className='flex gap-1 flex-col'>
                <span className='text-xl text-[#1273eb] font-semibold'>
                  12°C
                </span>
                <span className='text-black'>Mostly Cloudy</span>
              </div>
              {/* ICON */}
              <TiWeatherDownpour className='w-8 h-8 text-[#1273eb]' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
