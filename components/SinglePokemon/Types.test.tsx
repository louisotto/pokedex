import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Types } from "./Types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../pages/_app";

const types = [
  { slot: 1, type: { name: "Fire", url: "" } },
  { slot: 2, type: { name: "Water", url: "" } },
  { slot: 3, type: { name: "Grass", url: "" } },
];

describe("Types component", () => {
  it("renders a Pill component for each type in the `types` prop", () => {
    render(
      <ThemeProvider theme={theme}>
        <Types types={types} />
      </ThemeProvider>
    );
    types.forEach((t) => {
      expect(screen.getByText(t.type.name)).toBeInTheDocument();
    });
  });

  it("passes the correct background color to each Pill component", () => {
    render(
      <ThemeProvider theme={theme}>
        <Types types={types} />
      </ThemeProvider>
    );
    types.forEach((t) => {
      const pill = screen.getByText(t.type.name);
      expect(pill).toHaveStyle(`background-color: ${t.type.name}`);
    });
  });

  it("renders a PillTray component", () => {
    render(
      <ThemeProvider theme={theme}>
        <Types types={types} />
      </ThemeProvider>
    );
    expect(screen.getByRole("group")).toBeInTheDocument();
  });
});
