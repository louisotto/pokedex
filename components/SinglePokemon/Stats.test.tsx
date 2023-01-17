import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Stats } from "./Stats";
const stats = [
  {
    base_stat: 100,
    effort: 2,
    stat: {
      name: "hp",
      url: "https://pokeapi.co/api/v2/stat/1/",
    },
  },
  {
    base_stat: 90,
    effort: 0,
    stat: {
      name: "attack",
      url: "https://pokeapi.co/api/v2/stat/2/",
    },
  },
  {
    base_stat: 70,
    effort: 0,
    stat: {
      name: "defense",
      url: "https://pokeapi.co/api/v2/stat/3/",
    },
  },
];
describe("Stats component", () => {
  it("renders a list of stats", () => {
    render(<Stats stats={stats} />);
    stats.forEach((s) => {
      expect(screen.getByText(s.stat.name.replace("-", " "))).toBeInTheDocument();
    });
  });

  it("renders a ProgressBar component for each stat", () => {
    render(<Stats stats={stats} />);
    stats.forEach((s) => {
      expect(screen.getByTestId(`progress-${s.stat.name}`)).toBeInTheDocument();
    });
  });
});
