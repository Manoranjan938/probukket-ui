import { render, screen } from "@testing-library/react";
import Login from "../../../pages/Login";

describe("Test the login Page", () => {
  test("render the login with a button", async () => {
    render(<Login />);
    const btn = await screen.findAllByRole("button");
    expect(btn).toHaveLength(1);
  });

  test("Validate email validate", () => {
    // const email = "sagar.com";
  });
});
