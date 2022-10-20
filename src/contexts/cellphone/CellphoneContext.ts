import { createContext } from "react";

interface CellphoneDisplayStructure {
  displayedNumber: string[];
  addNumber: (numberToAdd: string) => void;
  deleteNumber: () => void;
}

const CellphoneContext = createContext<CellphoneDisplayStructure>(
  {} as CellphoneDisplayStructure
);

export default CellphoneContext;
