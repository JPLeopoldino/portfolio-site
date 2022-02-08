import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import colors from '../../styles/colors';

interface LinkDotProps {
    hover: boolean;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    postion: relative;
    padding: 2rem;
    background-color: #030100;
`;

export const Content = styled.main`
    height: 100%;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    /* background: rgb(3,1,0);
    background: linear-gradient(90deg, rgba(3,1,0,1) 90%, rgba(3,1,0,0) 100%); */
`;

export const Logo = styled(Image)`
    animation: ${rotate} 14s linear infinite;
`;

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: #F2F3F7;
`;

export const Text = styled.p`
    font-size: 1.25rem;
    color: #AAAAAA;
`;

export const AnchorText = styled.a`
    font-size: 1.25rem;
    color: #F2F3F7;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.1s ease;

    &:hover{
        text-decoration: underline;
    }

    &:active{
        opacity: .5;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`;

export const LinkRow = styled.div`
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
`;

export const LinkDot = styled.div<LinkDotProps>`
    height: 2.5px;
    /* width: 2.5px; */
    border-radius: 80px;
    background: #F2F3F7;
    margin-right: .5rem;
    transition: width 0.5s ease-out;

    width: ${props => props.hover
        ? '15px'
        : '2.5px'
    };
`;

export const LinkText = styled.a`
    font-size: 1.25rem;
    color: #F2F3F7;
    font-weight: bold;
    cursor: pointer;
    postion: relative;
    transition: opacity 0.1s ease;


    &:active{
        opacity: .5;
    }
`;
