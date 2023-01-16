import Link from "next/link";
import styled from "styled-components";

export const StyledHomeGrid = styled.section`
  width: 100%;
  padding: 2vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
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
  transition: box-shadow 0.4s ease;
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

type BgProps = {
  bg: string;
};

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
