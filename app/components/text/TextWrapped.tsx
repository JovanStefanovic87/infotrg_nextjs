interface Props {
  block: string | string[];
}

const TextWrapped: React.FC<Props> = ({ block }) => {
  return <p className='break-words overflow-wrap-anywhere text-lg text-gray-800'>{block}</p>;
};

export default TextWrapped;
