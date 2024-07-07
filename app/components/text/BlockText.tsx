interface Props {
  description: string;
  maxLines: number;
}

const BlockText: React.FC<Props> = ({ description, maxLines }) => {
  return (
    <div className='text-grayDarkest text-base leading-relaxed mb-2 max-w-full flex-grow overflow-hidden'>
      <p className={`line-clamp-${maxLines}`}>{description}</p>
    </div>
  );
};

export default BlockText;
