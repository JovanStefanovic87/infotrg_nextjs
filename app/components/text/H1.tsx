interface Props {
  title: string;
}

const H1: React.FC<Props> = ({ title }) => {
  return <h1 className='text-4xl font-bold mb-10 text-center text-yellowStrong'>{title}</h1>;
};

export default H1;
