import { useState } from "react";
import CellphoneContext from "./CellphoneContext";

interface CellPhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const CellPhoneContextProvider = ({
  children,
}: CellPhoneContextProviderProps): JSX.Element => {
  const [displayedNumber, setDisplayedNumber] = useState<string[]>([]);

  const addNumber = (numberToAdd: string): void => {
    setDisplayedNumber([...displayedNumber, numberToAdd]);
  };

  const deleteNumber = (): void => {
    setDisplayedNumber([...displayedNumber.slice(0, -1)]);
  };

  return (
    <CellphoneContext.Provider
      value={{ displayedNumber, addNumber, deleteNumber }}
    >
      {children}
    </CellphoneContext.Provider>
  );
};

export default CellPhoneContextProvider;
