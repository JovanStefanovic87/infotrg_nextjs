'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './styles.module.css';

interface Props {
  label: string;
  href: string;
}

const HeaderLinkButton: React.FC<Props> = ({ label, href }) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    router.push(href);
  };

  const isActive = pathname === href;

  return (
    <button
      className={`${styles['header-button']} text-gray-300 focus:outline-none transition duration-300 relative`}
      onClick={handleClick}
    >
      <span className='relative z-10'>{label}</span>
      <span className={`absolute inset-x-0 bottom-0 ${styles['button-underline']}`}></span>
      {isActive && (
        <span className={`absolute inset-x-0 bottom-0 ${styles['button-underline-active']}`}></span>
      )}
    </button>
  );
};

export default HeaderLinkButton;
