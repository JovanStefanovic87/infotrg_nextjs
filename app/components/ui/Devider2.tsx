interface Props {
  marginY?: number;
}

const Devider2: React.FC<Props> = ({ marginY = 0 }) => (
  <hr className='border-grayLight' style={{ marginTop: marginY, marginBottom: marginY }} />
);

export default Devider2;
