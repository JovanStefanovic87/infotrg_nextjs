interface Props {
    description: string;
  }
  
  const BlockTextFullContent: React.FC<Props> = ({ description }) => {
    return (
      <div className='text-grayDarkest text-base leading-relaxed mb-2 max-w-full flex-grow overflow-hidden'>
        <p>{description}</p>
      </div>
    );
  };
  
  export default BlockTextFullContent;
  