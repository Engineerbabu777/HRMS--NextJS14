'use client';
import React from 'react'
import { RiHomeHeartLine } from 'react-icons/ri'
import { MdAdminPanelSettings } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { GrAttachment } from 'react-icons/gr'
import { TbReportSearch } from 'react-icons/tb'
import { HiUser } from 'react-icons/hi'

import { FaAngleRight } from 'react-icons/fa6'
import SingleChoice from './SingleChoice'

import NestedRecruitmentOptions from './NestedRecuritmentOptions';

import {usePathname} from 'next/navigation';

type Props = {}

export default function Sidebar ({}: Props) {
  
  const pathname = usePathname();


  return (
    <aside className='w-[7vw] lg:w-[15vw] border-r-2 border-gray-200'>
      <SingleChoice Text={'Dashboard'} Icon={RiHomeHeartLine} pathname={'/'} />

      <SingleChoice
        Text={'HR Admin'}
        Icon={MdAdminPanelSettings}
        ThirdIcon={FaAngleRight}
        third
        pathname={'/manage-hr-admins'}
        active={pathname === '/manage-hr-admins'}
      />

      <SingleChoice
        Text={'Employees'}
        Icon={HiUser}
        pathname={'/manage-employees'}
        active={pathname === '/manage-employees'}
      />

      <SingleChoice
        Text={'Attachments'}
        Icon={GrAttachment}
        pathname={'/client-attachments'}
        active={pathname === '/client-attachments'}
      />

      <SingleChoice
        Text={'Reports'}
        Icon={TbReportSearch}
        pathname={'/reports'}
        active={pathname === '/reports'}
      />

      <SingleChoice
        Text={'Recruitment'}
        Icon={FaUsers}
        ThirdIcon={FaAngleRight}
        third
        active={pathname === '/recruitment'}
        pathname={'/recruitment'}
      />
      {/* THIS IS TWO NESTED OPTIONS FOR RECUIRTMENTS! */}
      <NestedRecruitmentOptions />
    </aside>
  )
}
