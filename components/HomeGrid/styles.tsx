import { BgProps } from "@/lib/types";
import Link from "next/link";
import styled from "styled-components";

export const StyledHomeGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-column-gap: 2vw;
  grid-row-gap: 2vw;
`;

export const StyledCard = styled(Link)`
  background-color: white;
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.1);
  will-change: box-shadow;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledCardTitle = styled.p`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 24px;
`;

export const Number = styled.p`
  position: absolute;
  inset: 0;
  color: white;
  opacity: 0.4;
  font-size: 32px;
  font-style: italic;
  line-height: 0.7;
`;

export const StyledCardImage = styled.div<BgProps>`
  width: 100%;

  background-color: ${(props) => props.theme.colors[props.bg]};
  img {
    width: 80%;
    height: auto;
    margin: auto;
    display: block;
  }
`;

export const StyledCardTray = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

export const FilterTray = styled.div`
  width: 100%;
  padding: 25px;
  background-color: white;
  margin-bottom: 25px;
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.1);
  h2 {
    line-height: 1;
    margin-bottom: 0.5vw;
    text-transform: none;
  }
  input {
    padding: 0.2vw;
  }
`;
