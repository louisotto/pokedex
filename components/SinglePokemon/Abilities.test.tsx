import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Abilities } from "./Abilities";
import { ThemeProvider } from "styled-components";
import { theme } from "../../pages/_app";

const abilities = [{ name: "overgrow", description: { flavor_text: "Something" }, hidden: false }];

describe("Abilities component", () => {
  it("renders a Pill component for each type in the `abilities` prop", () => {
    render(
      <ThemeProvider theme={theme}>
        <Abilities abilities={abilities} />
      </ThemeProvider>
    );
    abilities.forEach((t) => {
      expect(screen.getByText(t.name)).toBeInTheDocument();
    });
  });

  it("passes the correct background color to each Pill component", () => {
    render(
      <ThemeProvider theme={theme}>
        <Abilities abilities={abilities} />
      </ThemeProvider>
    );
    abilities.forEach((t) => {
      const pill = screen.getByText(t.name);
      expect(pill).toHaveStyle(`background-color: #B7B7CE`);
    });
  });

  it("renders a PillTray component", () => {
    render(
      <ThemeProvider theme={theme}>
        <Abilities abilities={abilities} />
      </ThemeProvider>
    );
    expect(screen.getByRole("group")).toBeInTheDocument();
  });
});
