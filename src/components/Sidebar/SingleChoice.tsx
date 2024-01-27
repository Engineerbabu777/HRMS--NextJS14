import { IconType } from 'react-icons'
import Link from 'next/link';
import {usePathname} from 'next/navigation';


type Props = {
  Icon: IconType,
  Text: string,
  ThirdIcon?: IconType,
  onClick?: () => void,
  third?: boolean,
  pathname: string,
  nested?:boolean,
}

export default function SingleChoice ({
  Icon,
  Text,
  ThirdIcon,
  onClick,
  active=false,
  third = false,
  pathname='/',
  nested=false
}: Props) {



  return (
    <>
      <Link
        href={pathname}
        className={` mb-1 group  cursor-pointer hover:bg-gradient-to-r from-[#4da7f0] to-[#82cff5] 
        flex gap-2 py-3 px-2 items-center 
        ${Text === 'Dashboard' ? 'mt-16' : ''}
        ${nested ? 'pl-8' : ''}
        ${active ? 'bg-gradient-to-r from-[#4da7f0] to-[#82cff5] !text-white' : ''}
      `}
        onClick={onClick}
      >
        {/* ICON! */}
        <Icon className={`w-6 h-6 text-gray-500 group-hover:!text-white  ${active ? '!text-white' : ''}`} />
        {/* TEXT! */}
        <p className={`text-xl text-gray-500 group-hover:!text-white  ${active ? '!text-white' : ''}`}>{Text}</p>

        {/* ICON! (ONLY VISIBLE ON SOME CONDITIONS!) */}
        {third && (
          <>
            <ThirdIcon className={`w-4 h-4 text-gray-500 group-hover:!text-white ml-auto  ${active ? '!text-white' : ''}`} />
          </>
        )}
      </Link>
    </>
  )
}
