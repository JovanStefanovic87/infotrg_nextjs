interface Props {
  text: string;
  align?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'bold' | 'semibold';
  paddingLeft?: string;
}

const Text: React.FC<Props> = ({
  text,
  align = 'left',
  size = 'lg',
  weight = 'normal',
  paddingLeft = '0',
}) => {
  const hasSpecialEnding = text.includes('.)');
  const parts = hasSpecialEnding ? text.split(/(\.\))/) : [text];

  return (
    <p
      className={`text-${align} font-${weight} text-grayDarkest text-${size} tracking-wide`}
      style={{ paddingLeft }}
    >
      {hasSpecialEnding ? (
        <>
          <span className='font-bold'>{parts[0]}</span>
          {parts[1]}
          {parts.slice(2).join('')}
        </>
      ) : (
        text
      )}
    </p>
  );
};

export default Text;
