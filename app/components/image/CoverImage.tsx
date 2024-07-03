import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

const CoverImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className='flex items-center justify-center cursor-pointer transition duration-200 ease-in-out transform hover:scale-105 rounded-lg'>
      <div
        className='relative mb-4 overflow-hidden w-72 h-60 md:w-96 md:h-64' /* style={{ width: '300px', height: '250px' }} */
      >
        <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} priority sizes='100%' />
      </div>
    </div>
  );
};

export default CoverImage;
