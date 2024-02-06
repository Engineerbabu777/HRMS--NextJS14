import React,{useState} from 'react'
import { MdAdd } from 'react-icons/md'
import { useRecoilState } from 'recoil'
import { ModalAtom } from '@/recoil/modalAtom'
import { BsThreeDotsVertical } from 'react-icons/bs'
import HeaderWithAdd from '../../Header'

type Props = {
  data: any
}

export default function Addresses ({ data }: Props) {
  const [modalState, setModalState] = useRecoilState(ModalAtom)
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='flex-1'>
        {/* HEADER! */}
        <HeaderWithAdd
          showAdd={data.candidateAddresses.length}
          headerName='Addressed'
          type='address'
        />

        <section className='p-3 py-5 w-full border-2 border-t-0 flex  p-2 flex-col gap-2'>
          {data.candidateAddresses.length > 0 &&
            data.candidateAddresses.map((e: any, i: number) => (
              <div className='border relative p-1' key={i}>
                <BsThreeDotsVertical
                  className='absolute right-2 top-1 text-[#1273eb] w-5 h-5'
                  onClick={() => setOpen(!open)}
                />
                {open && (
                  <div
                    className={`absolute w-[200px] rounded-md border bg-white top-0 right-6 transition-all duration-500 ${
                      open ? 'opacity-1' : 'opacity-0'
                    } `}
                  >
                    <p className='text-center border-b border-gray-100 py-2 hover:opacity-50'>
                      Edit
                    </p>
                    <p className='text-center border-b border-gray-100 py-2 hover:opacity-50'>
                      Remove
                    </p>
                  </div>
                )}
                <EachExperience
                  name={'Permanent Address'}
                  value={e.permanentAddress}
                />
                <EachExperience
                  name={'Current address'}
                  value={e.currentAddress}
                />
                <EachExperience name={'District'} value={e.district} />
                <EachExperience name={'Province'} value={e.province} />
                <EachExperience name={'Country'} value={e.country} />
                <EachExperience name={'Postcode'} value={e.postCode} />
              </div>
            ))}
        </section>
        {/* BODY! */}
        {data.candidateAddresses.length === 0 && (
          <section className='p-3 py-5 w-full border-2 border-t-0 flex justify-between items-center p-5 flex-col gap-2'>
            <p className='text-gray-500 text-lg'>No Addresses added yet</p>
            <button
              onClick={() => {
                setModalState({ isOpen: true, type: 'address' })
              }}
              className='flex gap-1 min-w-[100px] hover:opacity-50  rounded-md text-white  px-3 bg-[#1273eb] 
            h-[40px] items-center justify-center '
            >
              <MdAdd className='w-4 h-4 -mt-1' />
              <span className=''>Add</span>
            </button>
          </section>
        )}
      </div>
    </>
  )
}

function EachExperience ({
  name,
  value
}: {
  name: string,
  value: string | number
}) {
  return (
    <>
      <div className=' flex flex-col gap-1 w-full text-lg'>
        <div className='flex items-center justify-between'>
          {/* NAME! */}
          <p className='w-[200px] font-semibold'>{name}:</p>

          {/* VALUE! */}
          <p className='flex-1 text-gray-500'>{value}</p>
        </div>
      </div>
    </>
  )
}
