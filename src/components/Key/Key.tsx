interface KeyProps {
  text: string;
  className: string;
  action: () => void;
}

const Key = ({ text, className, action }: KeyProps): JSX.Element => {
  return (
    <li>
      <button className={className} onClick={action}>
        {text}
      </button>
    </li>
  );
};

export default Key;
