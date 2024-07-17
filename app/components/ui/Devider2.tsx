interface Props {
  marginY?: number;
  height?: number;
}

const Devider2: React.FC<Props> = ({ marginY = 0, height = 0 }) => (
  <hr
    className={`border-grayLight border-${height}`}
    style={{ marginTop: marginY, marginBottom: marginY }}
  />
);

export default Devider2;
