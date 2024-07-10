interface Props {
  title: string;
  mb?: number | string;
}

const H1: React.FC<Props> = ({ title }) => {
  return (
    <h1 className={`text-3xl md:text-4xl font-bold text-center text-yellowStrong pb-6`}>{title}</h1>
  );
};

export default H1;
