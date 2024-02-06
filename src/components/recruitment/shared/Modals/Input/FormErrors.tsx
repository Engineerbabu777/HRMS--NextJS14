


type Props = {
    error: string
  }
  
  export default function FormErrors ({ error }: Props) {
    return (
      <>
        <div className='text-red-500 text-sm'>{error}</div>
      </>
    )
  }
  