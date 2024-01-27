import Image from 'next/image'

export default function Home () {
  return (
    <>
      <div className='flex items-center justify-center h-full flex-col '>
        <Image
          src={'/hrmslogo.png'}
          alt={'alternative-text'}
          className=''
          width={500}
          height={200}
        />
        <div className='font-semibold text-2xl bg-[#3789FF] w-[200px] p-2 text-white rounded-md text-center ml-2'>
          Dashboard
        </div>
      </div>
    </>
  )
}
