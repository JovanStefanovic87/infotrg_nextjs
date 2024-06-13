const NavButtons: React.FC = () => {
  return (
    <nav className='flex space-x-4'>
      <a href='/' className='text-white'>
        Početna
      </a>
      <a href='/o-nama' className='text-white'>
        O nama
      </a>
      <a href='/ulaganje' className='text-white'>
        Ulaganje
      </a>
      <a href='/kontakt' className='text-white'>
        Kontakt
      </a>
    </nav>
  );
};

export default NavButtons;
