import styled from "styled-components";
import Image from 'next/image'
import colors from "@/styles/colors";

export const Container = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  /* justify-content: flex-start; */
`;

export const Column = styled.div`
  width: 50%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5rem;
`;

export const Picture = styled(Image)`
  width: 15rem;
  height: 15rem;
  background-color: ${colors.title};
  border-radius: 5%;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 5rem;
  line-height: 115.02%;
  text-align: right;
  color: ${colors.title};
`;

export const SubContainer = styled.div`
  width: 50%;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const SubTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: ${colors.title};
`;

export const Description = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.text};
`;
