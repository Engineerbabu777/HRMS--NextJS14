export default function BottomLeftSection () {
  return (
    <>
      <section className='flex items-center justify-between max-h-[40vh] w-full'>
        {/* BOX 1! */}
        <div className='border border-red-500  h-[40vh] w-[49%] rounded-md shadow-sm'>
          1
        </div>

        {/* BOX 2! */}
        <div className='border border-green-500 h-[40vh] flex flex-col gap-2 w-[49%] rounded-md shadow-sm pt-4 px-2'>
          {/* TOP TEXT! */}
          <h2 className='text-black font-semibold tracking-wider'>
            Interview Candidates
          </h2>

          {/* SAMPLE THREE CANDIDATES! */}
          <div className='flex flex-col'>
            <div className='flex items-center px-2 border-b border-gray-200 py-2'>
              <div className='flex flex-col'>
                {/* NAME! */}
                <span className="text-lg">Elon Musk</span>

                {/* ROLE! */}
                <span className="text-[#8e8e8e] text-xs">CEO Of X</span>
              </div>
              {/* DATE! */}
              <div className='ml-auto text-[#1273eb]  text-sm'>Tomorrow</div>
            </div>

            <div className='flex items-center px-2 border-b border-gray-200 py-1'>
              <div className='flex flex-col'>
                {/* NAME! */}
                <span className="text-lg">Mark Zuckerburg</span>

                {/* ROLE! */}
                <span className="text-[#8e8e8e] text-xs">CEO Of Meta</span>
              </div>
              {/* DATE! */}
              <div className='ml-auto text-[#1273eb]  text-sm'>Friday</div>
            </div>

            <div className='flex items-center px-2 border-b border-gray-200 py-2'>
              <div className='flex flex-col'>
                {/* NAME! */}
                <span className="text-lg">Jeff Bezoss</span>

                {/* ROLE! */}
                <span className="text-[#8e8e8e] text-xs">CEO Of Amazon</span>
              </div>
              {/* DATE! */}
              <div className='ml-auto text-[#1273eb] text-sm'>31<sup>st</sup> January,2025</div>
            </div>
          </div>

          {/* VIEW ALL BUTTON! */}
        </div>
      </section>
    </>
  )
}
