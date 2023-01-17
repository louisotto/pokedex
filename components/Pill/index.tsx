import { StyledPill } from "./styles";
type PillProps = {
  bg: string;
  children: any;
  id?: string;
  hidden?: boolean;
};
export const Pill = ({ bg, children, id, hidden = false }: PillProps) => (
  <StyledPill id={id} bg={bg} hidden={hidden}>
    {children}
  </StyledPill>
);
