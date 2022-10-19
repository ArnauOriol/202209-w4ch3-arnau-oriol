import { createContext } from "react";

interface CellphoneDisplayStructure {
  displayedNumber: string[];
  addNumber: () => void;
  deleteNumber: () => void;
}

const CellphoneContext = createContext<CellphoneDisplayStructure>(
  {} as CellphoneDisplayStructure
);

export default CellphoneContext;
