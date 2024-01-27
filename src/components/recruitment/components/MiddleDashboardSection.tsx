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
        <h2 className='text-black font-semibold tracking-wider'>
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
        <h2 className='text-black font-semibold tracking-wider'>
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
            name={'Elon Musk'}
            interviewDate='Today'
            position={'CEO Of Tesla'}
          />
          <EachSingleCandidate
            name={'Elon Musk'}
            interviewDate='Today'
            position={'CEO Of Tesla'}
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

function EachSingleCandidate ({
  name,
  position,
  interviewDate
}: {
  name: string,
  position: string,
  interviewDate: string
}) {
  return (
    <>
      <div className='flex items-center px-2 border-b-2 border-gray-100 py-2 hover:opacity-50 cursor-pointer translate-all'>
        <div className='flex flex-col'>
          {/* NAME! */}
          <span className='text-lg'>{name}</span>

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
        hello
      </section>
    </>
  )
}
