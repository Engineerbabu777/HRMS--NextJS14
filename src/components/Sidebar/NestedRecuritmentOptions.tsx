'use client';
import SingleChoice from './SingleChoice';
import { HiUsers } from 'react-icons/hi2'
import { IoBriefcaseOutline } from 'react-icons/io5'
import {usePathname} from 'next/navigation';

export default function NestedRecruitmentOptions() {

      const pathname = usePathname();

    return(
    <>
      { pathname.split('/').includes('recruitment') && (<>
        <SingleChoice
        Text={'Jobs'}
        Icon={IoBriefcaseOutline}
        pathname={'/recruitment/jobs'}
        nested
        active={pathname.split('/').includes('jobs')}
      />
      <SingleChoice
        Text={'Candidates'}
        Icon={HiUsers}
        pathname={'/recruitment/candidates'}
        nested
        active={pathname.split('/').includes('candidates')}
      />
      </>)
}
    </>)
}