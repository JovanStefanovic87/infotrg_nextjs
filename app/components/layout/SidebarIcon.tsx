import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useSidebar } from '../../context/SidebarContext';
import SidebarArrow from './SidebarArrow';

interface Props {
  icon: string;
  label: string;
  href: string;
  subRoutes?: Props[];
}

const SidebarIcon: React.FC<Props> = ({ icon, label, href, subRoutes = [] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { closeSidebar } = useSidebar();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isActive = subRoutes.some(
      (subRoute) => subRoute.href === pathname || pathname.startsWith(subRoute.href),
    );

    setIsOpen(isActive);
  }, [pathname, subRoutes]);

  const handleItemClick = () => {
    closeSidebar();
    router.push(href);
  };

  const handleArrowClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const isActive = pathname === href;

  return (
    <div className='bg-blueMain rounded-lg'>
      <div
        className={`flex items-center justify-between p-3 cursor-pointer transition-colors duration-300 ${
          isActive ? 'bg-blue-500 text-white' : 'text-gray-700'
        }`}
        onClick={handleItemClick}
      >
        <div className='flex items-center'>
          <div className='relative h-8 w-8'>
            <Image src={icon} alt={label} fill style={{ objectFit: 'contain' }} />
          </div>
          <span className='ml-3 text-sm font-medium'>{label}</span>
        </div>
        {subRoutes.length > 0 && <SidebarArrow isOpen={isOpen} onClick={handleArrowClick} />}
      </div>
      {isOpen && (
        <div className='pl-6'>
          {subRoutes.map((subRoute) => (
            <SidebarIcon key={subRoute.href} {...subRoute} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarIcon;
