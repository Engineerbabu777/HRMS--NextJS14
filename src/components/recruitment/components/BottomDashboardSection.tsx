import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

type Props = {}

export default function BottomDashboardSection ({}: Props) {
  return (
    <>
      <section className='flex w-full items-center justify-end'>
        <div className='bg-white max-w-[20vw] flex-grow rounded-md shadow-lg py-3 px-2 overflow-hidden'>
            {/* HEADING! */}
         <div className="flex justify-between items-center">
           <div className="flex flex-col">
            <h2  className="font-bold text-xl ">Jobs</h2>
            <span className="text-sm text-[#8e8e8e] -mt-1">Last Published Jobs</span>
           </div>
           <div className="underline text-[#1273eb] font-[500]">
            View All
           </div>
         </div>

        {/* NAMES! */}
        <div className="mt-[5%] flex flex-col gap-2">
          <SingleJob name={"UI/UX Designer"} views={21} applied={40} postedDate={"13 Dec 2024"} location={"Dubai"}/>
          <SingleJob name={"Software Engineer"} views={45} applied={44} postedDate={"10 Dec 2024"} location={"Uk"}/>
          <SingleJob name={"Backend Developer"} views={60} applied={34} postedDate={"1 Feb 2024"} location={"Lahore"}/>
          <SingleJob name={"Full Stack Developer"} views={76} applied={64} postedDate={"7 Mar 2025"} location={"Istanbul"} noBorder/>

        </div>
        </div>
      </section>
    </>
  )
}



function SingleJob(
  {
    name,
    position,
    postedDate,
    noBorder=false,
    views,
    applied,
    location,
  }: {
    name: string,
    position: string,
    postedDate: string,
    noBorder:boolean,
    views: number,
    applied:number,
    location:string,
  }
) {


  return(<>
        <div className={`flex items-center px-2 ${!noBorder ?"border-b-2 border-gray-100":""}  py-2 hover:opacity-50 cursor-pointer translate-all`}>
        <div className='flex flex-col flex-1 '>
          {/* NAME! */}
          <span className='text-lg font-[500] line-clamp-1 '>{name}</span>

          {/* VIEWS && APPLIED CANDIDATES! */}
          <EachJobReport views={views} applied={applied} location={location}/>
         
        </div>
        {/* DATE! */}
        <div className='ml-auto text-[#1273eb] text-sm'>{postedDate}</div>
      </div>
  </>)
}



function EachJobReport({
  views=21,
  applied=20,
  location="Lahore"
}:{
  views:number,
  applied:number,
  location:string,
}){
  return(<>
   <div className="flex gap-2 items-center">
    {/* LOCATION BOX! */}
    <div className="flex gap-1 items-center">
     <FaLocationDot className="w-3 h-3 text-black"/>
     <span className="text-xs font-semibold">{location}</span>
    </div>

    <Line />
    
    {/* APPLIED CANDIDATES! */}
    <div className="flex gap-1 items-center">
     <FaUserFriends className="w-4 h-4 text-black"/>
     <span className="text-xs">{applied}</span>
    </div>

{/* VIEWS BOX! */}
    <div className="flex gap-1 items-center">
     <FaEye className="w-4 h-4 text-black"/>
     <span className="text-xs">{views}</span>
    </div>
           
    </div>
  </>)
}


function Line () {
  return <div className='w-[2px] h-[16px] bg-gray-200 hidden md:block' />
}