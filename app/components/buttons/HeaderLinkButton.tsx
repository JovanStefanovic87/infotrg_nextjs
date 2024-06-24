import React, { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Route } from '../../helpers/types';

interface Props {
  label: string;
  href: string;
  icon: string;
  isActive: boolean;
  hasChildren: boolean;
  subRoutes?: Route[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isTopLevel?: boolean;
}

const HeaderLinkButton: React.FC<Props> = ({
  label,
  href,
  icon,
  isActive,
  hasChildren,
  subRoutes,
  onMouseEnter,
  onMouseLeave,
  isTopLevel = true,
}) => {
  const router = useRouter();
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const bufferRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        bufferRef.current &&
        !bufferRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnterLocal = () => {
    if (hasChildren && !isOpen) {
      setIsOpen(true);
      if (onMouseEnter) {
        onMouseEnter();
      }
    }
  };

  const handleMouseLeaveLocal = (event: React.MouseEvent) => {
    if (
      hasChildren &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.relatedTarget as Node) &&
      bufferRef.current &&
      !bufferRef.current.contains(event.relatedTarget as Node)
    ) {
      setIsOpen(false);
      if (onMouseLeave) {
        onMouseLeave();
      }
    }
  };

  const handleClick = () => {
    router.push(href);
  };

  return (
    <div
      className={`relative ${isTopLevel ? 'flex' : 'inline-block'} ${isActive ? 'font-bold' : ''}`}
      onMouseEnter={handleMouseEnterLocal}
      onMouseLeave={handleMouseLeaveLocal}
    >
      <button
        className='text-gray-300 focus:outline-none relative flex items-center justify-between gap-2 w-full'
        onClick={handleClick}
        onMouseEnter={handleMouseEnterLocal}
        onMouseLeave={handleMouseLeaveLocal}
      >
        <span className='relative z-10 py-4'>{label}</span>
        {hasChildren && (
          <span className='relative inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`h-4 w-4 transition-transform duration-150 transform ${
                !isTopLevel
                  ? isOpen
                    ? 'rotate-0'
                    : '-rotate-90'
                  : isOpen
                  ? 'rotate-180'
                  : 'rotate-0'
              }`}
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z' />
            </svg>
          </span>
        )}
        {isActive && <span className='absolute inset-x-0 bottom-0'></span>}
      </button>
      {hasChildren && (
        <div
          ref={dropdownRef}
          className={`absolute ${isTopLevel ? 'top-full left-0' : 'left-full top-0'}
                      mt-0 w-max max-w-sm bg-main shadow-lg rounded-md z-10 gap-4`}
          onMouseEnter={handleMouseEnterLocal}
          onMouseLeave={handleMouseLeaveLocal}
          style={{ display: isOpen ? 'flex' : 'none' }}
        >
          <div className='flex flex-col items-stretch justify-between px-2'>
            {subRoutes?.map((subRoute) => (
              <HeaderLinkButton
                key={subRoute.href}
                label={subRoute.label}
                href={subRoute.href}
                icon={subRoute.icon}
                isActive={currentPath === subRoute.href}
                hasChildren={!!subRoute.subRoutes && subRoute.subRoutes.length > 0}
                subRoutes={subRoute.subRoutes}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                isTopLevel={false}
              />
            ))}
          </div>
        </div>
      )}
      <div ref={bufferRef} className='absolute top-full left-0 w-full h-4' />
    </div>
  );
};

export default HeaderLinkButton;
