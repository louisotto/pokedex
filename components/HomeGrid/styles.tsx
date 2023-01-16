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
  width: 100%;
  max-width: 400px;
`;

type StyledCardImageProps = {
  bg: string;
};

export const StyledCardImage = styled.div<StyledCardImageProps>`
  width: 100%;
  background: url(/bg/${(props) => props.bg + ".svg"}) no-repeat;
  background-size: cover;

  img {
    width: 80%;
    margin: auto;
    display: block;
  }
`;
