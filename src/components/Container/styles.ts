import styled, { keyframes } from "styled-components";
import colors from "@/styles/colors";

const fadeIn = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`;

export const Container = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 5rem 10rem 10rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10rem;
  background-color: ${colors.background};
  animation: ${fadeIn} 1s ease forwards;
`;
