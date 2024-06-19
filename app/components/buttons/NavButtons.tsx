import HeaderLinkButton from './HeaderLinkButton';

const NavButtons: React.FC = () => {
  return (
    <nav className='flex space-x-4'>
      <HeaderLinkButton label='Početna' href='/' />
      <HeaderLinkButton label='O nama' href='/o-nama' />
      <HeaderLinkButton label='Ulaganje' href='/ulaganje' />
      <HeaderLinkButton label='Kontakt' href='/kontakt' />
    </nav>
  );
};

export default NavButtons;
