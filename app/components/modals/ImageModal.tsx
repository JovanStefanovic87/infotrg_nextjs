import { MdClose } from 'react-icons/md';
import Image from 'next/image';

type ImageModalProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  return (
    <div className='fixed inset-0 flex justify-center items-center z-50'>
      <div className='absolute inset-0 bg-black bg-opacity-75' onClick={onClose} />
      <div className='relative z-10'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-red-700 focus:outline-none transition duration-200 ease-in-out transform hover:scale-110'
          aria-label='Close Modal'
        >
          <MdClose className='w-6 h-6' />
        </button>
        <div className='relative'>
          <Image src={src} height={720} width={1280} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
