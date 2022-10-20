import { render, screen } from "@testing-library/react";
import NumberDisplay from "./NumberDisplay";

describe("Given a NumberDisplay component", () => {
  describe("When it's rendered with a '5' '6' '3' '4'", () => {
    test("Then it should show '5634' on the screen", () => {
      const expectedNumber = "5634";

      render(<NumberDisplay />);
      const numberTyped = screen.queryByText(expectedNumber);

      expect(numberTyped).toBe(expectedNumber);
    });
  });
});
