import React from 'react';
import * as S from './styles';

interface NavigationItem {
  id: number;
  title: string;
  url: string;
}

export const Header: React.FC = () => {
  const navList: NavigationItem[] = [
    {
      id: 0,
      title: '00. ABOUT',
      url: '#main',
    },
    {
      id: 1,
      title: '01. SKILLS',
      url: '#skills',
    },
    {
      id: 2,
      title: '02. EXP',
      url: '#experiences',
    },
    {
      id: 3,
      title: '03. CONTACT',
      url: '#contacts',
    },
  ];

  return (
    <S.Container>
      {navList.map(navItem => {
        return (
          <S.NavItem key={navItem.id.toString()}>
            <S.NavLink href={navItem.url}>{navItem.title}</S.NavLink>
          </S.NavItem>
        );
      })}
    </S.Container>
  );
};
