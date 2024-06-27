interface Props {
  title: string;
}

const PageTitle: React.FC<Props> = ({ title }) => {
  return <h1 className='text-5xl font-bold mb-10 text-center text-yellow-400'>{title}</h1>;
};

export default PageTitle;
