import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
}

const CoverImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className='flex items-center justify-center cursor-pointer transition duration-200 ease-in-out transform hover:scale-105 rounded-lg'>
      <div className='relative mb-4 overflow-hidden w-full h-40'>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes='(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw'
        />
      </div>
    </div>
  );
};

export default CoverImage;
