import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import CloseButtonX from '../buttons/CloseButtonX';

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
        <CloseButtonX onClose={onClose} />
        <div className='relative border-4 border-blueLighter rounded-md overflow-hidden'>
          <Image src={src} height={720} width={1280} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
