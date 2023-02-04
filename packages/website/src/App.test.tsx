import { render } from "@testing-library/react";
import { buttonDriver } from "@yoniaiz/library/dist/drivers";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  expect(
    buttonDriver.getButton({
      name: "Test",
    })
  ).toBeInTheDocument();
});
