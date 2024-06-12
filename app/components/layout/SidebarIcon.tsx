'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSidebar } from '../../context/SidebarContext';

type Props = {
  icon: string;
  label: string;
  targetPath: string;
};

const SidebarIcon: React.FC<Props> = ({ icon, label, targetPath }) => {
  const router = useRouter();
  const { closeSidebar } = useSidebar();

  const handleClick = () => {
    closeSidebar();
    router.push(targetPath);
  };

  return (
    <div
      className='flex flex-col items-center justify-center w-full h-20 bg-gray-900 rounded-lg p-2 cursor-pointer'
      onClick={handleClick}
    >
      <div className='relative h-24 w-24'>
        <Image src={icon} alt={label} fill />
      </div>
      <span className='mt-2 text-sm text-white text-center'>{label}</span>
    </div>
  );
};

export default SidebarIcon;
