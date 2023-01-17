import ProgressBar from "@ramonak/react-progress-bar";
import { StatList, SubHeading } from "./styles";

type StatsProps = {
  stats: Stat[];
};

type Stat = {
  base_stat: number;
  effort: number;
  stat: StatDetails;
};

type StatDetails = {
  name: string;
  url: string;
};

export const Stats = ({ stats }: StatsProps) => {
  const list = stats.map((stat) => (
    <li key={stat.stat.name}>
      <p>{stat.stat.name.replace("-", " ")}</p>
      <ProgressBar completed={stat.base_stat} maxCompleted={255} customLabel={stat.base_stat.toString()} />
    </li>
  ));
  return (
    <div>
      <SubHeading>Stats</SubHeading>
      <StatList>{list}</StatList>
    </div>
  );
};
