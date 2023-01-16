import Link from "next/link";
import styled from "styled-components";

export const StyledHomeGrid = styled.section`
  width: 100%;
  padding: 2vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-column-gap: 2vw;
  grid-row-gap: 2vw;
`;

export const StyledCard = styled(Link)`
  background-color: white;
  position: relative;
  width: 100%;
  max-width: 400px;
  p {
    text-transform: capitalize;
  }
`;

export const Number = styled.p`
  position: absolute;
  inset: 0;
  color: white;
  opacity: 0.4;
  font-size: 32px;
  font-style: italic;
`;

type BgProps = {
  bg: string;
};

export const StyledCardImage = styled.div<BgProps>`
  width: 100%;
  background: url(/bg/${(props) => props.bg + ".svg"}) no-repeat;
  background-size: cover;

  img {
    width: 80%;
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

export const Pill = styled.span<BgProps>`
  padding: 5px 10px;
  background: url(/bg/${(props) => props.bg + ".svg"}) no-repeat;
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
