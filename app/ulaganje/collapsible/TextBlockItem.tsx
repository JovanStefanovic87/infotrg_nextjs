interface Props {
  content: string | string[];
}

const TextBlockItem: React.FC<Props> = ({ content }) => {
  return <p className='text-gray-800'>{content}</p>;
};

export default TextBlockItem;
