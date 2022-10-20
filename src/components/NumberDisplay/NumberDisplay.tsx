import { useContext } from "react";
import CellphoneContext from "../../contexts/cellphone/CellphoneContext";

const NumberDisplay = (): JSX.Element => {
  const { displayedNumber } = useContext(CellphoneContext);

  return <span className="number">{displayedNumber}</span>;
};

export default NumberDisplay;
