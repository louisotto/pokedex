import styled from "styled-components";
import { BgProps } from "@/lib/types";

export const PillTray = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Pill = styled.span<BgProps>`
  margin: 0 5px;
  padding: 5px 10px;
  background: ${(props) => props.theme.colors[props.bg]};
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-transform: uppercase;
`;
