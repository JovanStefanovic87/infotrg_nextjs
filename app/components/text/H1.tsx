interface Props {
  title: string;
  mb?: number;
}

const H1: React.FC<Props> = ({ title, mb = 4 }) => {
  return (
    <h1
      className={`text-3xl md:text-4xl font-bold text-center text-yellowStrong`}
      style={{ marginBottom: mb }}
    >
      {title}
    </h1>
  );
};

export default H1;
