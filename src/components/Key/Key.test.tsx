import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given a Key component", () => {
  describe("When it's rendered with the text '3'", () => {
    test("Then it should show a button with the number '3'", () => {});
    const KeyProps = {
      text: "3",
      className: "",
      action: () => {},
    };

    render(
      <Key
        text={KeyProps.text}
        className={KeyProps.className}
        action={KeyProps.action}
      />
    );

    const key = screen.queryByRole("button", { name: KeyProps.text });

    expect(key).toBeInTheDocument();
  });
});
