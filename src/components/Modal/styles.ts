import styled, { keyframes } from 'styled-components';

const fade = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`

export const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    animation: ${fade} 0.5s ease;
    background-color: rgba(3, 1, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Modal = styled.div`
    width: 30%;
    height: 35%;
    background-color: #F2F3F7;
    border-radius: 1rem;
`;
