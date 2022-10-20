import { render, screen } from "@testing-library/react";
import Keyboard from "./Keyboard";

describe("Given a Keyboard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the keyboard with 11 buttons", () => {
      const expectedButtonNumber = 11;

      render(<Keyboard />);
      const keys = screen.queryAllByRole("button");
      const deleteKey = screen.queryByRole("button", { name: "delete" });

      expect(keys.length).toBe(expectedButtonNumber);
      expect(deleteKey).toBeInTheDocument();
    });
  });
});
