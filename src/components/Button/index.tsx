import React from 'react';
import * as S from './styles';

export const Button: React.FC = () => {
  return (
    <S.Container action="mailto:leopoldinodev@gmail.com" method="GET">
      <S.Button type="submit">
        CONTACT ME
      </S.Button>
    </S.Container>
  );
}
