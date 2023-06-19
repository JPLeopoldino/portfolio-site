import colors from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 20px 160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.card};
`;

export const LinkContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  transition: 200ms ease;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: ${colors.title};

  &:hover, &:focus {
    opacity: 0.6;
    outline: none;
    border: none;
  }

  &:active {
    opacity: 1;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: ${colors.title};
`;

export const UnderlineLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: ${colors.title};
  text-decoration: underline;
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
