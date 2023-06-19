import styled from "styled-components";
import colors from "./colors";

export const Main = styled.main`
  position: relative;
  flex: 1;
  height: 100%;
  min-height: 100vh;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 5%;
  left: 5%;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background-color: ${colors.title};
`;
