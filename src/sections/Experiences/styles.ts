import styled from "styled-components";
import colors from "@/styles/colors";

export const Container = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
`;

export const Row = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 5rem;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.8rem;
`;

export const Name = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.text};
`;

export const Position = styled.p`
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
  left: -5%;
  top: -40%;
  opacity: 0.03;

  font-style: normal;
  font-weight: 600;
  font-size: 250px;
  line-height: 303px;
  color: ${colors.title};
  leading-trim: both;
  text-edge: cap;
`;
