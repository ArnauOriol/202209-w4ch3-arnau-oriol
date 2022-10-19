import Key from "../Key/Key";

const Keyboard = (): JSX.Element => {
  const keyboardNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keyboardNumbers.map((numberKey) => {
          return <Key text={numberKey} className="key" action={() => {}} />;
        })}
        <Key text="delete" className="key big" action={() => {}} />
      </ol>
    </div>
  );
};

export default Keyboard;
