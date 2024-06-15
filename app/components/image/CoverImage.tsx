import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

const CoverImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div
      className='relative mb-4 cursor-pointer rounded-lg overflow-hidden'
      style={{ height: '200px', borderRadius: '1rem' }}
    >
      <Image src={src} alt={alt} layout='fill' objectFit='cover' />
    </div>
  );
};

export default CoverImage;
