import React from "react";
import * as S from "./styles";

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};
