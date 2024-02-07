import React from 'react'
import SearchInput from '@/components/Header/SearchInput'
import { MdAdd } from 'react-icons/md'
import useUploadPdf from '@/hooks/useUploadPdf'
import { ClipLoader } from 'react-spinners'
import NoAttachmentView from '@/components/recruitment/shared/jobs/NoAttachmentsView'
import EachFile from './EachFile'

type Props = {
  data: any
}

export default function ResumesView ({ data }: Props) {
  const {uploadPdf,uploadingProgress} = useUploadPdf();

  const handleUploadFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event?.target?.files) return
    await uploadPdf(event?.target?.files[0],"candidate")
  }

  return (
    <>
      {/* NO ATTACHMENTS VIEW! */}
      {data?.resumes?.length === 0 && <NoAttachmentView candidates />}

      {/* IF NAY ATTACHMENTS THE VIEW WILL BE DIFFERENT! */}
      {data?.resumes?.length > 0 && (
        <section className='w-full flex h-full flex-1 overflow-auto scrollbar bg-white flex-col p-4 gap-4'>
          {/* HEADER! */}
          <header className='flex items-center justify-between '>
            <div className='w-full'>
              <SearchInput placeholder={'Search...'} />
            </div>
            {/* BTN TO UPLOAD FILES! */}
            <label className='flex gap-1 min-w-[200px] hover:opacity-50 rounded-md text-white  px-3 bg-[#1273eb] h-[40px] items-center justify-center '>
              <input
                type='file'
                className='hidden'
                onChange={handleUploadFile}
                multiple={false}
                accept={'.pdf'}
              />
              {uploadingProgress ? (
                <>
                  <ClipLoader size={12} color={'white'} />
                </>
              ) : (
                <MdAdd className='w-4 h-4' />
              )}
              <span className=''>
                {uploadingProgress
                  ? `uploading...${uploadingProgress}`
                  : 'Upload Files'}
              </span>
            </label>
          </header>

          {/* FILES! */}
          <div className='flex-1 flex flex-col'>
            <h2 className='text-lg font-bold'>Uploaded files</h2>

            <section className='flex flex-col gap-2'>
              {data?.resumes?.length > 0 &&
                data?.resumes?.map((eachFile: any, index: number) => (
                  <EachFile index={index} key={index} eachFile={eachFile} />
                ))}
            </section>
          </div>
        </section>
      )}
    </>
  )
}
