export default function MiddleDashboardSection () {
  return (
    <>
      <section className='flex gap-6 w-full  '>
        {/* BOX 1! */}
        <Left />

        {/* BOX 2! */}
        <Middle />

        {/* BOX 3! */}
        <Right />
      </section>
    </>
  )
}

function Left () {
  return (
    <>
      <div className='bg-white  flex-grow  rounded-md shadow-lg py-3 px-2 overflow-hidden'>
        {/* TOP TEXT! */}
        <h2 className='font-bold text-xl '>
          Hiring Pipeline
        </h2>
      </div>
    </>
  )
}

function Middle () {
  return (
    <>
      <div className='bg-white  flex-grow  flex flex-col gap-2 rounded-md shadow-lg py-3 px-2 overflow-hidden'>
        {/* TOP TEXT! */}
        <h2 className='font-bold text-xl '>
          Interview Candidates
        </h2>

        {/* SAMPLE THREE CANDIDATES! */}
        <div className='flex flex-col'>
          <EachSingleCandidate
            name={'Elon Musk'}
            interviewDate='Today'
            position={'CEO Of Tesla'}
          />
          <EachSingleCandidate
            name={'Mark Zuckerburg'}
            interviewDate='Tomorrow'
            position={'CEO Of Meta'}
          />
          <EachSingleCandidate
            name={'Jeff Bezoss'}
            interviewDate='1 Dec 2022'
            position={'CEO Of Amazon'}
          />
        </div>

        {/* VIEW ALL BUTTON! */}
        <button className='border-2  p-2 rounded-md w-fit mx-auto hover:opacity-60'>
          View All
        </button>
      </div>
    </>
  )
}

export function EachSingleCandidate ({
  name,
  position,
  interviewDate,
  noBorder=false
}: {
  name: string,
  position: string,
  interviewDate: string,
  noBorder:boolean
}) {
  return (
    <>
      <div className={`flex items-center px-2 ${!noBorder ?"border-b-2 border-gray-100":""}  py-2 hover:opacity-50 cursor-pointer translate-all`}>
        <div className='flex flex-col'>
          {/* NAME! */}
          <span className='text-lg font-[500]'>{name}</span>

          {/* ROLE! */}
          <span className='text-[#8e8e8e] text-xs'>{position}</span>
        </div>
        {/* DATE! */}
        <div className='ml-auto text-[#1273eb] text-sm'>{interviewDate}</div>
      </div>
    </>
  )
}

function Right () {
  return (
    <>
      <section className='bg-white max-w-[20vw] flex-grow rounded-md shadow-lg py-3 px-2 overflow-hidden'>
        {/* HEADING! */}
         <div className="flex justify-between items-center">
           <div className="flex flex-col">
            <h2  className="font-bold text-xl ">Candidates</h2>
            <span className="text-sm text-[#8e8e8e] -mt-1">Recent Candidates</span>
           </div>
           <div className="underline text-[#1273eb] font-[500]">
            View All
           </div>
         </div>

        {/* NAMES! */}
        <div className="mt-[5%] flex flex-col gap-2">
          <EachSingleCandidate name={"Mark Wood"} interviewDate={"14 Dec 2022"}/>
          <EachSingleCandidate name={"Dice Lilly"} interviewDate={"17 Dec 2029"}/>
          <EachSingleCandidate name={"Joseph Kin"} interviewDate={"21 Dec 2027"}/>
          <EachSingleCandidate name={"Darren Brown"} interviewDate={"61 Dec 2025"} noBorder/>
        </div>
      </section>
    </>
  )
}


