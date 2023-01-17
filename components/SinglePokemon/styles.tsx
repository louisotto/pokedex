import styled from "styled-components";
import { BgProps } from "@/lib/types";

export const MainLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr 0.5fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 2vw;
  grid-template-areas:
    "Main Main Sidebar Sidebar"
    "Main Main Sidebar Sidebar"
    "Body Body Sidebar Sidebar";
`;

export const Hero = styled.section`
  grid-area: Main;
  background-color: white;
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.1);
`;

export const HeroBanner = styled.div`
  padding: 10px 25px;
  span,
  h1 {
    display: inline-block;
  }
  h1 {
    text-transform: capitalize;
  }
`;
export const HeroImage = styled.div<BgProps>`
  width: 100%;
  padding: 2vw 0;
  background: url(/bg/${(props) => props.bg}.svg) no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 1));
  }
`;

export const Sidebar = styled.aside`
  grid-area: Sidebar;
  background-color: white;
  box-shadow: 0 10px 10px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 25px;
  h2,
  div {
    margin-bottom: 1vw;
  }
`;

export const Body = styled.section`
  grid-area: Body;
`;

export const PillTray = styled.div`
  display: flex;
  align-items: center;
`;

export const StatList = styled.ul`
  list-style: none;
  li {
    margin-bottom: 1vw;
  }
  p {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
  }
`;

export const SubHeading = styled.h3`
  margin-bottom: 0.5vw;
`;
