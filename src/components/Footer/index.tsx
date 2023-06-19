import React from 'react';
import * as S from './styles';
import { BsBoxArrowUpRight } from 'react-icons/bs';

export const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.LinkContainer href="https://github.com/JPLeopoldino/portfolio-site" target="_blanck">
        <u>Repository source</u>
        <BsBoxArrowUpRight />
      </S.LinkContainer>

      <S.Row>
        Made with
        <S.UnderlineLink href="https://nextjs.org" target="_blanck">
          NextJS
        </S.UnderlineLink>
      </S.Row>
    </S.Container>
  );
}
