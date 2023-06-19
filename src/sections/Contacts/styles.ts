import styled from "styled-components";
import colors from "@/styles/colors";

export const Container = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 2rem;
`;

export const Row = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.8rem;
`;

export const LinkContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  transition: 200ms ease;

  &:hover, &:focus {
    opacity: 0.6;
    outline: none;
    border: none;
  }

  &:active {
    opacity: 1;
  }
`;

export const ContactLabel = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.text};
`;

export const Description = styled.p`
  width: 100%;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.text};
`;

export const Counter = styled.span`
  position: absolute;
  right: 5%;
  top: -60%;
  opacity: 0.03;

  font-style: normal;
  font-weight: 600;
  font-size: 250px;
  line-height: 303px;
  color: ${colors.title};
  leading-trim: both;
  text-edge: cap;
  z-index: -1;
`;