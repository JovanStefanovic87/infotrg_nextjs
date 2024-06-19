'use client';

import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useSidebar } from '../../context/SidebarContext';

type Props = {
  icon: string;
  label: string;
  href: string;
};

const SidebarIcon: React.FC<Props> = ({ icon, label, href }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { closeSidebar } = useSidebar();

  const handleClick = () => {
    closeSidebar();
    router.push(href);
  };

  const isActive = pathname === href;

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full h-20 rounded-lg p-2 cursor-pointer ${
        isActive ? 'bg-blue' : 'bg-blueMain'
      }`}
      onClick={handleClick}
    >
      <div className='relative h-16 w-16'>
        <Image src={icon} alt={label} layout='fill' objectFit='contain' />
      </div>
      <span className={`mt-2 text-sm text-center ${isActive ? 'text-white' : 'text-gray-300'}`}>
        {label}
      </span>
    </div>
  );
};

export default SidebarIcon;
