import colors from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.form`
  width: 50%;
  align-self: center;
`;

export const Button = styled.button`
  width: 100%;
  position: relative;
  padding: 1.5rem;
  color: ${colors.background};
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 29px;
  background-color: ${colors.title};
  border: none;
  outline: none;
  z-index: 0;
  transition: 200ms ease-out;
  transition: opacity 100ms ease;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 98%;
    height: 98%;
    top: 2%;
    left: 2%;
    border: 0.5rem solid ${colors.title};
    transition: 200ms ease;
    z-index: -1;
  }

  &:hover:after {
    width: 98%;
    height: 79%;
    top: 0%;
    left: 0%;
    border: 0.5rem solid ${colors.title};
    z-index: -2;
  }

  &:active {
    opacity: 0.6;
  }

  /* &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 1;
  } */

  /* &:active:after {
    width: 97%;
    height: 79%;
    top: 0%;
    left: 0%;
    border: 0.5rem solid ${colors.background};
    z-index: -2;
  } */
`;
