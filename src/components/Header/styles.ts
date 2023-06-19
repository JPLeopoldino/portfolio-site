import styled from "styled-components";
import colors from "@/styles/colors";

export const Container = styled.ul`
  min-width: 8rem;
  position: fixed;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  z-index: 99;
  /* backdrop-filter: blur(2px); */
  background: linear-gradient(90deg, ${colors.background} 0%, rgba(0,0,0,0) 100%);
  /* mask: linear-gradient(transparent, black 60%); */
  /* padding-left: 0.5rem; */
  transform: translateY(-2rem) translateX(-5rem);
`;

export const NavItem = styled.li`
  width: 100%;
  display: flex;
`;

export const NavLink = styled.a`
  width: 100%;
  padding: 0.5rem 0;
  transition: opacity 200ms ease;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
