import React from "react";
import { DESCRIPTION, NAME, OCCUPATION } from "./constants";
import * as S from "./styles";

export const MainSection: React.FC = () => {
  return (
    <S.Container id="main">
      <S.Column>
        <S.Picture src="" alt="pfp" />
        <S.Title>{NAME}</S.Title>
      </S.Column>

      <S.SubContainer>
        <S.SubTitle>{OCCUPATION}</S.SubTitle>
        <S.Description>{DESCRIPTION}</S.Description>
      </S.SubContainer>
    </S.Container>
  );
};
