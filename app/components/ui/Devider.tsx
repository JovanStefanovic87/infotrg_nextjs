interface Props {
  marginY?: string;
}

const Devider: React.FC<Props> = ({ marginY = '0' }) => (
  <hr className={`my-${marginY} border-black bg-black`} />
);

export default Devider;
