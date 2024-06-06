const NavButtons: React.FC = () => {
  return (
    <nav className='flex space-x-4'>
      <a href='#home' className='text-white'>
        Početna
      </a>
      <a href='#about' className='text-white'>
        O nama
      </a>
      <a href='#services' className='text-white'>
        Ulaganje
      </a>
      <a href='#contact' className='text-white'>
        Kontakt
      </a>
    </nav>
  );
};

export default NavButtons;
