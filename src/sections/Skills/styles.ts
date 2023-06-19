import styled from "styled-components";
import colors from "@/styles/colors";

export const Container = styled.section`
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: flex-end;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 5rem;
`;

export const Description = styled.p`
  width: 100%;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.text};
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SkillLabel = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 223.02%;
  color: ${colors.text};
`;

export const Counter = styled.span`
  position: absolute;
  right: 15%;
  top: -50%;
  opacity: 0.03;

  font-style: normal;
  font-weight: 600;
  font-size: 250px;
  line-height: 303px;
  color: ${colors.title};
  leading-trim: both;
  text-edge: cap;
`;
