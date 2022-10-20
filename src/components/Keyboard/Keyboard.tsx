import { useContext } from "react";
import CellphoneContext from "../../contexts/cellphone/CellphoneContext";
import Key from "../Key/Key";

const Keyboard = (): JSX.Element => {
  const keyboardNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const { addNumber, deleteNumber } = useContext(CellphoneContext);

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keyboardNumbers.map((numberKey) => {
          return (
            <li key={numberKey}>
              <Key
                text={numberKey}
                className="key"
                action={() => {
                  addNumber(numberKey);
                }}
              />
            </li>
          );
        })}
        <li key={keyboardNumbers.length + 1}>
          <Key
            text="delete"
            className="key big"
            action={() => deleteNumber()}
          />
        </li>
      </ol>
    </div>
  );
};

export default Keyboard;
