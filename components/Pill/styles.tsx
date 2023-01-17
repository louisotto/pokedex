import styled from "styled-components";
import { BgProps } from "@/lib/types";

interface PillProps extends BgProps {
  hidden: boolean;
}
export const StyledPill = styled.span<PillProps>`
  margin-right: 5px;
  padding: 5px 10px;
  background: ${(props) => props.theme.colors[props.bg]};
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  font-size: 12px;
  display: ${(props) => (props.hidden ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-transform: uppercase;
`;
