import HamburgerButton from '../buttons/HamburgerButton';
import LogoButton from '../buttons/LogoButton';
import NavButtons from '../buttons/NavButtons';

const Header: React.FC = () => {
  return (
    <header className='bg-main flex justify-between items-center px-4 py-4 fixed w-screen z-10 h-header'>
      <div className='flex items-center space-x-4'>
        {/* <div className='block md:hidden'>
          <HamburgerButton />
        </div> */}
        <div className='hidden md:flex'>
          <NavButtons />
        </div>
      </div>
      <LogoButton />
    </header>
  );
};

export default Header;
