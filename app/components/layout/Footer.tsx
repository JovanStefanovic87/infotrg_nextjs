import Link from 'next/link';
import { useIsMobile } from '../../helpers/universalFunctions';

interface Props {}

const Footer: React.FC<Props> = () => {
  const isMobile = useIsMobile();

  const links = () => {
    return (
      <>
        <div className='mb-4'>
          <h2 className='text-lg font-bold text-white mb-2'>Linkovi</h2>
          {isMobile ? (
            <ul className='space-y-2'>
              <FooterLink href='/' label='Home' />
              <FooterLink href='/o-nama' label='O Nama' />
              <FooterLink href='/ulaganja' label='Ulaganja' />
              <FooterLink href='/kontakt' label='Kontakt' />
            </ul>
          ) : (
            <ul className='flex gap-5'>
              <FooterLink href='/' label='Početna' />
              <FooterLink href='/o-nama' label='O Nama' />
              <FooterLink href='/ulaganja' label='Ulaganja' />
              <FooterLink href='/kontakt' label='Kontakt' />
            </ul>
          )}
        </div>

        {/* Contact Info */}
        <div className='mb-4'>
          <h2 className='text-lg font-bold text-white mb-2'>Kontaktirajte nas</h2>
          <p className='text-gray-300'>
            <span className='block'>Telefon: (123) 456-7890</span>
            <span className='block'>Email: office@infotrg.com</span>
          </p>
        </div>
      </>
    );
  };

  return (
    <footer className='bg-gray-800 text-gray-300 py-6'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-1'>
          <div className='flex justify-between'>{links()}</div>
        </div>
        {/* Company Info */}
        <div className='text-sm text-gray-300'>
          <p>&copy; {new Date().getFullYear()} Infotrg. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => (
  <li>
    <Link href={href}>
      <span className='cursor-pointer text-gray-300 hover:text-white transition duration-300'>
        {label}
      </span>
    </Link>
  </li>
);

export default Footer;
